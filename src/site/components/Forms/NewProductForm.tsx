'use client'

import { CategoriesContext } from '@/contexts/CategoriesContext'
import { ProductsContext } from '@/contexts/ProductsContext'
import { UserContext } from '@/contexts/UserContext'
import { WebServer } from '@/services/WebServer'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { z } from 'zod'
import { useHookFormMask } from 'use-mask-input'

const newProductFormSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().min(3).max(50),
    category_id: z.string().min(1),
    quotation: z.string().min(3),
    stock: z.number().min(1),
})

type NewProductFormInputs = z.infer<typeof newProductFormSchema>

export function NewProductForm() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const createProduct = useContextSelector(ProductsContext, context => context.createProduct)
    const categories = useContextSelector(CategoriesContext, context => context.categories)

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { isSubmitting, errors },
    } = useForm<NewProductFormInputs>({
        resolver: zodResolver(newProductFormSchema)
    })

    const registerWithMask = useHookFormMask(register)

    async function onSubmit(data: NewProductFormInputs) {
        try {
            const newProduct = await WebServer.CreateProduct({
                token,
                category_id: Number(data.category_id),
                name: data.name,
                description: data.description,
                stock: data.stock,
                quotation: data.quotation,
            })
            createProduct({
                id: newProduct.id,
                category_id: Number(data.category_id),
                name: data.name,
                description: data.description,
                stock: data.stock,
                quotation: data.quotation,
            })
            reset()
        } catch (e) {
            console.log(e)
        }
    }

    console.log(errors)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-wrapper"
        >
            <h2 className="form-title">
                Adicionar produto
            </h2>
            <input
                className="form-input"
                placeholder="Nome"
                type="text"
                required
                {...register('name')}
            />
            <input
                className="form-input"
                placeholder="Descrição"
                type="text"
                required
                {...register('description')}
            />
            <input
                className="form-input"
                placeholder="Preço"
                type="text"
                required
                {...registerWithMask('quotation', ['R$ 9[9{*}],99'], {
                    autoUnmask: true,
                    showMaskOnHover: false,
                })}
            />
            <input
                className="form-input"
                placeholder="Estoque"
                type="number"
                maxLength={10}
                required
                {...register('stock', {
                    valueAsNumber: true
                })}
            />
            <Controller
                name='category_id'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Select.Root disabled={categories.length < 1} onValueChange={onChange} value={value} >
                        <Select.Trigger className='form-input relative aria-disabled:cursor-not-allowed' aria-disabled={categories.length < 1}>
                            <Select.Value
                                className='text-gray-300 placeholder:text-gray-500'
                                placeholder={categories.length < 1 ? 'Sem categorias cadastradas' : 'Selecione categoria'}
                            />
                            <Select.Icon className="absolute right-2">
                                <ChevronDown />
                            </Select.Icon>
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Viewport className='bg-gray-800 p-2 rounded-md border border-gray-600'>
                                <Select.Group>
                                    {categories.map((category, i) => {
                                        return <Select.Item
                                            className='hover:bg-gray-600 text-gray-300 p-4 rounded cursor-pointer'
                                            key={i}
                                            value={String(category.id)}>
                                            <Select.ItemText>{category.description}</Select.ItemText>
                                        </Select.Item>
                                    })}
                                </Select.Group>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Root>
                )}>

            </Controller>
            <button
                disabled={isSubmitting}
                type='submit'
                className="form-submit mt-4"
            >Adicionar</button>
        </form>
    )
}