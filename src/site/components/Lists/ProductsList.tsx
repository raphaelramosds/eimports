'use client'

import { ProductsContext } from "@/contexts/ProductsContext"
import { UserContext } from "@/contexts/UserContext"
import { WebServer } from "@/services/WebServer"
import clsx from "clsx"
import { X } from "lucide-react"
import { toast } from "react-toastify"
import { useContextSelector } from "use-context-selector"

export function ProductsList() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const { products, deleteProduct } = useContextSelector(ProductsContext, context => context)

    async function handleDeleteProduct(id: number) {
        toast.promise(async () => {
            const deletedProduct = await WebServer.DeleteProduct({
                token, id
            })
            deleteProduct(id)
        }, {
            pending: 'Deletando produto...',
            success: 'Produto deletado com sucesso',
            error: 'Erro ao deletar produto'
        })
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-title">
                Produtos
            </h2>
            <ul className="flex flex-col rounded overflow-hidden max-h-[500px] overflow-y-auto [&>li:not(:last-child)]:border-b">
                {products.length > 0
                    ? products.map((product, i) => (
                        <li key={i} className={clsx(
                            "flex p-4 items-center justify-between",
                            "bg-gray-800 hover:bg-gray-900",
                            "border-gray-700"
                        )}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <h5 className="text-green-300 text-sm">{product.name}</h5>
                                    <p className="text-gray-100 text-xs"> {product.description}</p>
                                </div>
                                <div className="flex flex-col text-xs [&_span]:text-green-300">
                                    <h6>Preço: <span>R$ {String(product.quotation)?.replaceAll('.', ',')}</span></h6>
                                    <h6>Qtd. em estoque: <span>{product.stock}</span></h6>
                                </div>
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