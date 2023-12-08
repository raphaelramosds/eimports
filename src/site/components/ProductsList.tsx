'use client'

import { ProductsContext } from "@/contexts/ProductsContext"
import { UserContext } from "@/contexts/UserContext"
import { WebServer } from "@/services/WebServer"
import clsx from "clsx"
import { X } from "lucide-react"
import { useContextSelector } from "use-context-selector"

export function ProductsList() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const { products, deleteProduct } = useContextSelector(ProductsContext, context => context)

    async function handleDeleteProduct(id: number) {
        const deletedProduct = await WebServer.DeleteProduct({
            token, id
        })
        deleteProduct(id)
        console.log('Delete Product: ', deleteProduct)
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-title">
                Produtos
            </h2>
            <ul className="flex flex-col rounded overflow-hidden max-h-[500px] overflow-y-auto">
                {products.length > 0
                    ? products.map((product, i) => (
                        <li key={i} className={clsx(
                            "flex p-4 items-center justify-between",
                            "bg-gray-800 hover:bg-gray-900"
                        )}>
                            <div className="flex flex-col">
                                <h6 className="text-green-300 text-sm">{product.name}</h6>
                                <p className="text-gray-100 text-xs"> {product.description}</p>
                            </div>
                            <button
                                className="text-gray-100 hover:text-red-300 hover:transition-colors"
                                onClick={() => handleDeleteProduct(product.id)}>
                                <X size={20} />
                            </button>
                        </li>
                    ))
                    : <span>Sem categorias cadastradas</span>}
            </ul>
        </div>
    )
}