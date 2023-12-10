'use client'

import { CategoriesContext } from "@/contexts/CategoriesContext"
import { UserContext } from "@/contexts/UserContext"
import { WebServer } from "@/services/WebServer"
import clsx from "clsx"
import { X } from "lucide-react"
import { useContextSelector } from "use-context-selector"

export function CategoriesList() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const { categories, deleteCategory, fetchCategories } = useContextSelector(CategoriesContext, context => context)

    async function handleDeleteCategory(id: number) {
        const deletedCategory = await WebServer.DeleteCategory({
            token, id
        })
        deleteCategory(id)
        console.log('Delete Category: ', deletedCategory)
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-title">
                Categorias
            </h2>
            <ul className="flex flex-col rounded overflow-hidden max-h-[500px] overflow-y-auto [&>li:not(:last-child)]:border-b">
                {categories.length > 0
                    ? categories.map((category, i) => (
                        <li key={i} className={clsx(
                            "flex p-4 items-center justify-between",
                            "bg-gray-800 hover:bg-gray-900 border-gray-700"
                        )}>
                            <span className="text-gray-100">{category.description}</span>
                            <button
                                className="text-gray-100 hover:text-red-300 hover:transition-colors"
                                onClick={() => handleDeleteCategory(category.id)}>
                                <X size={20} />
                            </button>
                        </li>
                    ))
                    : <span>Sem categorias cadastradas</span>}
            </ul>
        </div>
    )
}