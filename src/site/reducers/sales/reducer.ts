import { Sale } from "@/@types/Sale";
import { SalesActionTypes } from "./actions";
import { produce } from 'immer'

export interface SalesState {
    onHoldSale: Sale | null;
    sales: Sale[];
    payedFilter: boolean;
    pendingFilter: boolean
}

export function salesReducer(state: SalesState, action: any) {
    switch (action.type) {
        case SalesActionTypes.HOLD_SALE:
            {
                return produce(state, (draft) => {
                    draft.onHoldSale = action.payload
                })
            }
        case SalesActionTypes.CREATE_SALE:
            {
                return produce(state, (draft) => {
                    draft.sales.push(action.payload)
                })
            }
        case SalesActionTypes.FETCH_SALES:
            {
                return produce(state, (draft) => {
                    draft.sales = action.payload
                })
            }
        case SalesActionTypes.UPDATE_PAYMENT_FILTER:
            {
                return produce(state, (draft) => {
                    action.payload.filter == 'payed' ? draft.payedFilter = action.payload.flag : draft.pendingFilter = action.payload.flag
                })
            }
        default:
            return state
    }
}