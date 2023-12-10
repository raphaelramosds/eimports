import { Customer } from "@/@types/Customer";

export enum CustomerActionTypes {
    CREATE_CUSTOMER = 'CREATE_CUSTOMER',
    DELETE_CUSTOMER = 'DELETE_CUSTOMER',
    UPDATE_CUSTOMER = 'UPDATE_CUSTOMER',
    FETCH_CUSTOMERS = 'FETCH_CUSTOMERS',
}

export function createCustomerAction(customer: Customer) {
    return {
        type: CustomerActionTypes.CREATE_CUSTOMER,
        payload: customer
    }
}

export function deleteCustomerAction(id: number) {
    return {
        type: CustomerActionTypes.DELETE_CUSTOMER,
        payload: id
    }
}

export function updateCostumerAction(customer: Customer) {
    return {
        type: CustomerActionTypes.UPDATE_CUSTOMER,
        payload: customer
    }
}

export function fetchCostumersAction(customers: Customer[]) {
    return {
        type: CustomerActionTypes.FETCH_CUSTOMERS,
        payload: customers
    }
}