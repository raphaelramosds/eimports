'use client'

import { Product } from "@/@types/Product";
import { createProductAction, deleteProductAction, fetchProductsAction } from "@/reducers/products/actions";
import { ProductsState, productsReducer } from "@/reducers/products/reducer";
import { WebServer } from "@/services/WebServer";
import { useCallback, useLayoutEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface ProductsContextType extends ProductsState {
    createProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
    fetchProducts: (products: Product[]) => void;
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(productsReducer, {
        products: [],
    })

    const { products } = state

    const createProduct = useCallback((product: Product) => {
        dispatch(createProductAction(product))
    }, [])

    const deleteProduct = useCallback((id: number) => {
        dispatch(deleteProductAction(id))
    }, [])

    const fetchProducts = useCallback((products: Product[]) => {
        dispatch(fetchProductsAction(products))
    }, [])

    async function getProducts(token: string) {
        try {
            const productsData = await WebServer.GetProducts({ token })
            fetchProducts(productsData)
            console.log('Fetch Products: ', productsData)
        } catch (e) {
            console.log(e)
        }
    }

    useLayoutEffect(() => {
        const userJSON = localStorage.getItem('@eimports:user-1.0.0')
        if (userJSON) {
            const user = JSON.parse(userJSON)
            if (user.access_token) {
                getProducts(user.access_token)
            }
        }
    }, [])

    return (
        <ProductsContext.Provider value={{ products, createProduct, deleteProduct, fetchProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}