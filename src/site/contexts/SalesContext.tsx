'use client'

import { Sale } from "@/@types/Sale";
import { holdSaleAction } from "@/reducers/sales/actions";
import { SalesState, salesReducer } from "@/reducers/sales/reducer";
import { useCallback, useReducer } from "react";
import { createContext } from "use-context-selector"

interface SalesContextType extends SalesState {
    holdSale: (sale: Sale | null) => void;
}

export const SalesContext = createContext({} as SalesContextType)

export function SalesContextProvider({ children }: { children: React.ReactNode }) {
    const [salesState, dispatch] = useReducer(salesReducer, {
        onHoldSale: null,
        sales: [

        ],
    })

    const { onHoldSale, sales } = salesState

    const holdSale = useCallback((sale: Sale | null) => {
        dispatch(holdSaleAction(sale))
    }, [])

    return (
        <SalesContext.Provider value={{ onHoldSale, sales, holdSale }}>
            {children}
        </SalesContext.Provider>
    )
}