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
            {
                id: 1,
                client: {
                    id: 1,
                    cpf_cnpj: '70286120402',
                    name: 'Cleyton Arrasta Fitas',
                    phone: '11999999999',
                },
                date: new Date(),
                products: [
                    {
                        id: 1,
                        category: 'Celular',
                        name: 'Xiaomi Redmi 12C',
                        description: 'Celular top de linha',
                        price: 1200,
                        quantity: 3,
                    },
                    {
                        id: 2,
                        category: 'Celular',
                        name: 'Maçã Bagre 13S',
                        description: 'Celular top de linha',
                        price: 9900,
                        quantity: 1,
                    },
                ],
                total: 1200 + 9900,
            }
        ]
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