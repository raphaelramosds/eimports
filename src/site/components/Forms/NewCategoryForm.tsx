'use client'

import { CategoriesContext } from "@/contexts/CategoriesContext"
import { UserContext } from "@/contexts/UserContext"
import { WebServer } from "@/services/WebServer"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import { z } from "zod"
import { toast } from 'react-toastify'
import { ThreeDots } from "../Loadings/ThreeDots"

const newCategoryFormSchema = z.object({
    description: z.string(),
})

type NewCategoryFormInputs = z.infer<typeof newCategoryFormSchema>

export function NewCategoryForm() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const createCategory = useContextSelector(CategoriesContext, context => context.createCategory)
    const [isValid, setIsValid] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm<NewCategoryFormInputs>({
        resolver: zodResolver(newCategoryFormSchema)
    })

    async function onSubmit(data: NewCategoryFormInputs) {
        setIsLoading(true)
        toast.promise(async () => {
            const newCategory = await WebServer.CreateCategory({
                token,
                description: data.description
            })
            const isNewCategoryValid = newCategory ? createCategory({
                id: newCategory.id,
                seller_id: newCategory.seller_id,
                description: newCategory.description
            }) : false
            if (newCategory) {
                setIsValid(true)
                reset()
            } else {
                setIsValid(false)
            }

        }, {
            error: 'Erro ao adicionar categoria.',
            success: 'Categoria adicionada com sucesso.',
            pending: 'Adicionando categoria...'
        })
        setIsLoading(false)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-wrapper"
        >
            <h2 className="form-title">
                Adicionar categoria
            </h2>
            <input
                className="form-input"
                placeholder="Categoria"
                type="text"
                required
                {...register("description")}
            />
            <span className="text-xs text-red-300">{!isValid && 'Categoria já existe.'}</span>
            <button
                type="submit"
                disabled={isSubmitting}
                className="form-submit mt-4"
            >{isLoading ? <ThreeDots /> : 'Adicionar'}</button>
        </form>
    )
}