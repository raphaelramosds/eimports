import { Sale } from "@/@types/Sale";
import { SalesActionTypes } from "./actions";
import { produce } from 'immer'

export interface SalesState {
    onHoldSale: Sale | null;
    sales: Sale[];
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
        default:
            return state
    }
}