import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Sale {
    id?: number;
    client: Customer;
    products: Product[];
    purchase: string;
    total: number;
    settlement?: string;
}