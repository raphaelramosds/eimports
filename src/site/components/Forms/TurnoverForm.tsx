'use client'

import { ProductsContext } from "@/contexts/ProductsContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import { z } from "zod"
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from "lucide-react"
import { TurnoverContext } from "@/contexts/TurnoverContext"
import { UserContext } from "@/contexts/UserContext"
import { WebServer } from "@/services/WebServer"

const turnoverFormSchema = z.object({
    product_id: z.string(),
})

type TurnoverFormInputs = z.infer<typeof turnoverFormSchema>

export function TurnoverForm() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const products = useContextSelector(ProductsContext, context => context.products)
    const fetchTurnover = useContextSelector(TurnoverContext, context => context.fetchTurnover)

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { isSubmitting, errors },
    } = useForm<TurnoverFormInputs>({
        resolver: zodResolver(turnoverFormSchema)
    })

    async function onSubmit(data: TurnoverFormInputs) {
        const turnover = await WebServer.GetTurnover({ product_id: Number(data.product_id), token })
        console.log(turnover)
        fetchTurnover(products.filter(product => product.id == Number(data.product_id))[0], turnover)
    }

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <h2 className="form-title">Giro de Estoque</h2>
            <div className="flex gap-4">
                <Controller
                    name='product_id'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Select.Root disabled={products.length < 1} onValueChange={onChange} value={value}>
                            <Select.Trigger className='form-input relative aria-disabled:cursor-not-allowed grow' aria-disabled={products.length < 1}>
                                <Select.Value
                                    className='text-gray-300 placeholder:text-gray-500'
                                    placeholder={products.length < 1 ? 'Sem produtos cadastrados' : 'Selecione produto'}
                                />
                                <Select.Icon className="absolute right-2">
                                    <ChevronDown />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Content className="z-50">
                                <Select.Viewport className='bg-gray-800 p-2 rounded-md border border-gray-600'>
                                    <Select.Group>
                                        {products.map((category, i) => {
                                            return <Select.Item
                                                className='hover:bg-gray-600 text-gray-300 p-4 rounded cursor-pointer'
                                                key={i}
                                                value={String(category.id)}>
                                                <Select.ItemText>{category.name}</Select.ItemText>
                                            </Select.Item>
                                        })}
                                    </Select.Group>
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Root>
                    )}>
                </Controller>
                <button disabled={isSubmitting} className="form-submit">OK</button>
            </div>
        </form>
    )
}