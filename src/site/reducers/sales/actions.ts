import { Sale } from "@/@types/Sale";

export enum SalesActionTypes {
    HOLD_SALE = 'HOLD_SALE',
}

export function holdSaleAction(sale: Sale | null) {
    return {
        type: SalesActionTypes.HOLD_SALE,
        payload: sale
    }
}