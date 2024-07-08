export interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
  isFavorite: boolean;
  isNew: boolean;
  category?: string;
}
