'use client'

import { Category } from "@/@types/Category";
import { createCategoryAction, deleteCategoryAction, fetchCategoriesAction } from "@/reducers/categories/actions";
import { CategoriesState, categoriesReducer } from "@/reducers/categories/reducer";
import { useCallback, useReducer } from "react";
import { createContext } from "use-context-selector";

interface CategoriesContextType extends CategoriesState {
    createCategory: (category: Category) => void;
    deleteCategory: (id: number) => void;
    fetchCategories: (categories: Category[]) => void;
}

export const CategoriesContext = createContext({} as CategoriesContextType)

export function CategoriesContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(categoriesReducer, {
        categories: [],
    })

    const { categories } = state

    const createCategory = useCallback((category: Category) => {
        dispatch(createCategoryAction(category))
    }, [])

    const deleteCategory = useCallback((id: number) => {
        dispatch(deleteCategoryAction(id))
    }, [])

    const fetchCategories = useCallback((categories: Category[]) => {
        dispatch(fetchCategoriesAction(categories))
    }, [])


    return (
        <CategoriesContext.Provider value={{ categories, createCategory, deleteCategory, fetchCategories }}>
            {children}
        </CategoriesContext.Provider>
    )
}