import { Customer } from "@/@types/Customer";
import { produce } from "immer";
import { CustomerActionTypes } from "./actions";

export interface CustomersState {
    customers: Customer[];
}

export function customersReducer(state: CustomersState, action: any) {
    switch (action.type) {
        case CustomerActionTypes.CREATE_CUSTOMER:
            {
                return produce(state, (draft) => {
                    draft.customers.push(action.payload)
                })
            }
        case CustomerActionTypes.DELETE_CUSTOMER:
            {
                return produce(state, (draft) => {
                    const i = draft.customers.findIndex(customer => customer.id === action.payload)
                    draft.customers.splice(i, 1)
                })
            }
        case CustomerActionTypes.UPDATE_CUSTOMER:
            {
                return produce(state, (draft) => {
                    const i = draft.customers.findIndex(customer => customer.id === action.payload.id)
                    draft.customers[i] = action.payload
                })
            }
        case CustomerActionTypes.FETCH_CUSTOMERS:
            {
                return produce(state, (draft) => {
                    draft.customers = action.payload
                })
            }
        default:
            return state
    }
}