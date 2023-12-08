'use client'

import { Product } from "@/@types/Product";
import { createProductAction, deleteProductAction, fetchProductsAction } from "@/reducers/products/actions";
import { ProductsState, productsReducer } from "@/reducers/products/reducer";
import { useCallback, useReducer } from "react";
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

    return (
        <ProductsContext.Provider value={{ products, createProduct, deleteProduct, fetchProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}