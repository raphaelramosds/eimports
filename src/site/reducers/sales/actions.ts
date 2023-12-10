import { Sale } from "@/@types/Sale";

export enum SalesActionTypes {
    CREATE_SALE = 'CREATE_SALE',
    FETCH_SALES = 'FETCH_SALES',
    HOLD_SALE = 'HOLD_SALE',
}

export function holdSaleAction(sale: Sale | null) {
    return {
        type: SalesActionTypes.HOLD_SALE,
        payload: sale
    }
}

export function createSaleAction(sale: Sale) {
    return {
        type: SalesActionTypes.CREATE_SALE,
        payload: sale
    }
}

export function fetchSalesAction(orders: Sale[]) {
    return {
        type: SalesActionTypes.FETCH_SALES,
        payload: orders
    }
}