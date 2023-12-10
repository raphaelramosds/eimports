
import { TurnoverActionTypes } from "./actions";
import { produce } from "immer";
import { Product } from "@/@types/Product";
import { Turnover } from "@/@types/Turnover";

export interface TurnoverState {
    product: Product | null;
    turnover: Turnover | null;
}

export function turnoverReducer(state: TurnoverState, action: any) {
    switch (action.type) {
        case TurnoverActionTypes.FETCH_TURNOVER:
            {
                return produce(state, (draft) => {
                    draft.product = action.payload.product
                    draft.turnover = action.payload.turnover
                })
            }
        default:
            return state
    }
}