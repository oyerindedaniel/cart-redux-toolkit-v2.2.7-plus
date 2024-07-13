import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Product } from "../types";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: Array<CartItem>;
  totalItems: number;
  totalCost: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  removeEntireProduct: (productId: string) => void;
  getItemCount: (id: string) => number;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      totalCost: 0,
      addToCart: (product: Product) => {
        const { cart } = get();
        const existingProductIndex = cart.findIndex(
          (item) => item.id === product.id
        );

        let updatedCart;
        if (existingProductIndex > -1) {
          updatedCart = cart.map((item, index) =>
            index === existingProductIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        const totalItems = updatedCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalCost = updatedCart.reduce(
          (total, item) => total + item.current_price[0].NGN[0] * item.quantity,
          0
        );

        set({ cart: updatedCart, totalItems, totalCost });
      },
      removeFromCart: (productId: string) => {
        const { cart } = get();
        const existingProductIndex = cart.findIndex(
          (item) => item.id === productId
        );

        if (existingProductIndex > -1) {
          const updatedCart = [...cart];
          updatedCart[existingProductIndex].quantity -= 1;

          if (updatedCart[existingProductIndex].quantity <= 0) {
            updatedCart.splice(existingProductIndex, 1);
          }

          const totalItems = updatedCart.reduce(
            (total, item) => total + item.quantity,
            0
          );
          const totalCost = updatedCart.reduce(
            (total, item) =>
              total + item.current_price[0].NGN[0] * item.quantity,
            0
          );

          set({ cart: updatedCart, totalItems, totalCost });
        }
      },
      removeEntireProduct: (productId: string) => {
        const { cart } = get();
        const updatedCart = cart.filter((item) => item.id !== productId);

        const totalItems = updatedCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalCost = updatedCart.reduce(
          (total, item) => total + item.current_price[0].NGN[0] * item.quantity,
          0
        );

        set({ cart: updatedCart, totalItems, totalCost });
      },
      clearCart: () => set({ cart: [], totalItems: 0, totalCost: 0 }),
      getItemCount: (id: string) => {
        const item = get().cart.find((item) => item.id === id);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
