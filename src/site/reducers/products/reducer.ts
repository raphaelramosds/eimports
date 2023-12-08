
import { ProductsActionTypes } from "./actions";
import { produce } from "immer";
import { Product } from "@/@types/Product";

export interface ProductsState {
    products: Product[];
}

export function productsReducer(state: ProductsState, action: any) {
    switch (action.type) {
        case ProductsActionTypes.CREATE_PRODUCT:
            {
                return produce(state, (draft) => {
                    draft.products.push(action.payload)
                })
            }
        case ProductsActionTypes.DELETE_PRODUCT:
            {
                return produce(state, (draft) => {
                    const i = draft.products.findIndex(product => product.id === action.payload)
                    draft.products.splice(i, 1)
                })
            }
        case ProductsActionTypes.FETCH_PRODUCTS:
            {
                return produce(state, (draft) => {
                    draft.products = action.payload
                })
            }
        default:
            return state
    }
}