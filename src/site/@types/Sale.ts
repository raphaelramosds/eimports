import { Client } from "./Client";
import { Product } from "./Product";

export interface Sale {
    id: number;
    client: Client;
    products: Product[];
    date: Date;
    total: number;
}