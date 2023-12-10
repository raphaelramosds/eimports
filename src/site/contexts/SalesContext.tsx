'use client'

import { Sale } from "@/@types/Sale";
import { createSaleAction, fetchSalesAction, holdSaleAction } from "@/reducers/sales/actions";
import { SalesState, salesReducer } from "@/reducers/sales/reducer";
import { WebServer } from "@/services/WebServer";
import { useCallback, useEffect, useReducer } from "react";
import { createContext } from "use-context-selector"

interface SalesContextType extends SalesState {
    holdSale: (sale: Sale | null) => void;
    fetchSales: (sales: Sale[]) => void;
    createSale: (sale: Sale) => void;
    refresh: (token: string) => void;
}

export const SalesContext = createContext({} as SalesContextType)

export function SalesContextProvider({ children }: { children: React.ReactNode }) {
    async function getOrders(token: string) {
        try {
            const productsData = await WebServer.GetSales({ token })
            fetchSales(productsData)
            console.log('Fetch Sales: ', productsData)
        } catch (e) {
            console.log(e)
        }
    }

    const [salesState, dispatch] = useReducer(salesReducer, {
        onHoldSale: null,
        sales: [],
    })

    const { onHoldSale, sales } = salesState

    const holdSale = useCallback((sale: Sale | null) => {
        dispatch(holdSaleAction(sale))
    }, [])

    const fetchSales = useCallback((sales: Sale[]) => {
        dispatch(fetchSalesAction(sales))
    }, [])

    const createSale = useCallback((sale: Sale) => {
        dispatch(createSaleAction(sale))
    }, [])

    const refresh = useCallback((token: string) => {
        getOrders(token)
    }, [])

    useEffect(() => {
        let user
        const userJSON = localStorage.getItem('@eimports:user-1.0.0')
        if (userJSON) {
            user = JSON.parse(userJSON)
        }
        if (user.access_token) {
            getOrders(user.access_token)
        }
    }, [])

    return (
        <SalesContext.Provider value={{ onHoldSale, sales, holdSale, fetchSales, createSale, refresh }}>
            {children}
        </SalesContext.Provider>
    )
}