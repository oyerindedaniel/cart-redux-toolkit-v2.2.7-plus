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
  removeFromCart: (productName: string) => void;
  getItemCount: (name: string) => number;
  clearCart: () => void;
}

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      totalCost: 0,
      addToCart: (product: Product) => {
        const { cart } = get();
        const existingProductIndex = cart.findIndex(
          (item) => item.name === product.name
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
          (total, item) => total + item.price * item.quantity,
          0
        );

        set({ cart: updatedCart, totalItems, totalCost });
      },
      removeFromCart: (productName: string) => {
        const { cart } = get();
        const existingProductIndex = cart.findIndex(
          (item) => item.name === productName
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
            (total, item) => total + item.price * item.quantity,
            0
          );

          set({ cart: updatedCart, totalItems, totalCost });
        }
      },
      clearCart: () => set({ cart: [], totalItems: 0, totalCost: 0 }),
      getItemCount: (name) => {
        const item = get().cart.find((item) => item.name === name);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
