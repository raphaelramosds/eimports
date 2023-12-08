import { Customer } from "@/@types/Customer";

export enum CustomerActionTypes {
    CREATE_CUSTOMER = 'CREATE_CUSTOMER',
    DELETE_CUSTOMER = 'DELETE_CUSTOMER',
    UPDATE_CUSTOMER = 'UPDATE_CUSTOMER',
}

export function createCustomerAction(customer: Customer) {
    return {
        type: CustomerActionTypes.CREATE_CUSTOMER,
        payload: customer
    }
}

export function deleteCustomerAction(id: string) {
    return {
        type: CustomerActionTypes.DELETE_CUSTOMER,
        payload: id
    }
}

export function updateCUSTOMERAction(customer: Customer) {
    return {
        type: CustomerActionTypes.UPDATE_CUSTOMER,
        payload: customer
    }
}