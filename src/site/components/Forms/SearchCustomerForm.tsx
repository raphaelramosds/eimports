'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const searchSaleFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchSaleFormSchema>


export function SearchCustomerForm() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchSaleFormSchema)
    })

    return (
        <form
            className="flex items-center gap-4"
            action=""
        >
            <input
                className="form-input"
                placeholder="Cliente"
                type="text"
            />
            <button
                disabled={isSubmitting}
                className="form-submit"
            >Buscar</button>
        </form>
    )
}