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
        default:
            return state
    }
}