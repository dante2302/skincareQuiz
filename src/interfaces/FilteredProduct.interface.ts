import { Product } from "./Product.interface";

export interface FilteredProduct extends Product {
  matches: number;
  favourite?: boolean;
}