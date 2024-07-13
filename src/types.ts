/* eslint-disable @typescript-eslint/no-explicit-any */

interface CurrentPrice {
  [currency: string]: [number, number | null, any[]];
}

export interface Product {
  name: string;
  description: string | null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  product_image: any[];
  categories: any[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: any[];
  current_price: CurrentPrice[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any | null;
}

export interface ProductsResponse {
  page: number;
  size: number;
  total: number;
  debug: any | null;
  previous_page: string | null;
  next_page: string | null;
  items: Product[];
}
