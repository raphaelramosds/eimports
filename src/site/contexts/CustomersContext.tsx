'use client'

import { Customer } from "@/@types/Customer";
import { createCustomerAction, deleteCustomerAction, fetchCostumersAction } from "@/reducers/customers/actions";
import { CustomersState, customersReducer } from "@/reducers/customers/reducer";
import { WebServer } from "@/services/WebServer";
import { useCallback, useLayoutEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface CustomersContextType extends CustomersState {
    createCustomer: (customer: Customer) => boolean;
    deleteCustomer: (id: number) => void;
    fetchCustomers: (customers: Customer[]) => void;
}

export const CustomersContext = createContext({} as CustomersContextType)

export function CustomersContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(customersReducer, {
        customers: []
    })

    const { customers } = state

    const createCustomer = useCallback((customer: Customer) => {
        if (customers.find(customerInRow => customer.id === customerInRow.id)) {
            return false
        } else {
            dispatch(createCustomerAction(customer))
            return true
        }
    }, [])

    const deleteCustomer = useCallback((id: number) => {
        dispatch(deleteCustomerAction(id))
    }, [])

    const fetchCustomers = useCallback((customers: Customer[]) => {
        dispatch(fetchCostumersAction(customers))
    }, [])

    async function getCustomers(token: string) {
        try {
            const customersData = await WebServer.GetCustomers({ token })
            fetchCustomers(customersData)
            console.log('Fetch Customers: ', customersData)
        } catch (e) {
            console.log(e)
        }
    }

    useLayoutEffect(() => {
        const userJSON = localStorage.getItem('@eimports:user-1.0.0')
        if (userJSON) {
            const user = JSON.parse(userJSON)
            if (user.access_token) {
                getCustomers(user.access_token)
            }
        }
    }, [])

    return (
        <CustomersContext.Provider value={{ customers, createCustomer, deleteCustomer, fetchCustomers }}>
            {children}
        </CustomersContext.Provider>
    )
}