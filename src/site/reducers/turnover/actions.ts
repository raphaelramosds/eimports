import { Product } from "@/@types/Product";
import { Turnover } from "@/@types/Turnover";

export enum TurnoverActionTypes {
    FETCH_TURNOVER = 'FETCH_TURNOVER',
}

export function fetchTurnoverAction({ turnover, product }: { turnover: Turnover, product: Product }) {
    return {
        type: TurnoverActionTypes.FETCH_TURNOVER,
        payload: {
            turnover,
            product
        }
    }
}