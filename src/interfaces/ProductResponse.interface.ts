import { Product } from "./Product.interface"

export interface ProductResponse
{
    products:
    {
        [key: number]: Product
    }
}