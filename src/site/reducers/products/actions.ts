import { Product } from "@/@types/Product";

export enum ProductsActionTypes {
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
}

export function createProductAction(product: Product) {
    return {
        type: ProductsActionTypes.CREATE_PRODUCT,
        payload: product
    }
}

export function deleteProductAction(id: number) {
    return {
        type: ProductsActionTypes.DELETE_PRODUCT,
        payload: id
    }
}

export function fetchProductsAction(products: Product[]) {
    return {
        type: ProductsActionTypes.FETCH_PRODUCTS,
        payload: products
    }
}