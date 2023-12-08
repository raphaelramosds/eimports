import { Category } from "@/@types/Category";

export enum CategoriesActionTypes {
    CREATE_CATEGORY = 'CREATE_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY',
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

export function createCategoryAction(category: Category) {
    return {
        type: CategoriesActionTypes.CREATE_CATEGORY,
        payload: category
    }
}

export function deleteCategoryAction(id: number) {
    return {
        type: CategoriesActionTypes.DELETE_CATEGORY,
        payload: id
    }
}

export function fetchCategoriesAction(categories: Category[]) {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES,
        payload: categories
    }
}