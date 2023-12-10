'use client'

import { Product } from "@/@types/Product";
import { Turnover } from "@/@types/Turnover";
import { fetchTurnoverAction } from "@/reducers/turnover/actions";
import { TurnoverState, turnoverReducer } from "@/reducers/turnover/reducer";
import { WebServer } from "@/services/WebServer";
import { useCallback, useReducer } from "react";
import { createContext } from "use-context-selector";

interface TurnoverContextType extends TurnoverState {
    fetchTurnover: (product: Product, turnover: Turnover) => void;
}

export const TurnoverContext = createContext({} as TurnoverContextType)

export function TurnoverContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(turnoverReducer, {
        product: null,
        turnover: null
    })

    const { product, turnover } = state

    const fetchTurnover = useCallback((product: Product, turnover: Turnover) => {
        dispatch(fetchTurnoverAction({ product, turnover }))
    }, [])

    return (
        <TurnoverContext.Provider value={{ product, turnover, fetchTurnover }}>
            {children}
        </TurnoverContext.Provider>
    )
}