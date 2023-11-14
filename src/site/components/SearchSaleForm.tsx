'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from "@radix-ui/react-dialog"
import { NewSaleModal } from "./NewSaleModal"

const searchSaleFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchSaleFormSchema>


export function SearchSaleForm() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchSaleFormSchema)
    })

    return (
        <div className="flex items-center gap-6">
            <form
                className="flex items-center gap-4"
                action=""
            >
                <input
                    className="form-input"
                    placeholder="Código da Compra"
                    type="text"
                />
                <button
                    disabled={isSubmitting}
                    className="form-submit"
                >Buscar</button>
            </form>
            <div
                className="h-8 w-[1px] rounded bg-gray-600"
            />
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button
                        className="form-submit"
                    >Nova Compra</button>
                </Dialog.Trigger>
                <NewSaleModal />
            </Dialog.Root>
        </div>
    )
}