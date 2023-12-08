import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Sale {
    id: string;
    customer: Customer;
    products: Product[];
    date: Date;
    total: number;
}