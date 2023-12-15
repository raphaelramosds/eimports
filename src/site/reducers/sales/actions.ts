import { Sale } from "@/@types/Sale";

export enum SalesActionTypes {
    CREATE_SALE = 'CREATE_SALE',
    FETCH_SALES = 'FETCH_SALES',
    HOLD_SALE = 'HOLD_SALE',
    UPDATE_PAYMENT_FILTER = 'UPDATE_PAYMENT_FILTER'
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

export function updatePaymentFilterAction(filter: 'payed' | 'pending', flag: boolean) {
    return {
        type: SalesActionTypes.UPDATE_PAYMENT_FILTER,
        payload: {
            filter,
            flag
        }
    }
}