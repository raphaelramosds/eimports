'use client'

import { ProductsContext } from '@/contexts/ProductsContext'
import { UserContext } from '@/contexts/UserContext'
import { WebServer } from '@/services/WebServer'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { z } from 'zod'
import { CustomersContext } from '@/contexts/CustomersContext'
import { useEffect, useState } from 'react'
import { Product } from '@/@types/Product'
import clsx from 'clsx'
import { NewSaleFormCartProduct } from '../NewSaleFormCartProduct'
import { SalesContext } from '@/contexts/SalesContext'
import { toast } from 'react-toastify'

const newSaleFormSchema = z.object({
    client_id: z.string(),
    products: z.array(z.object({
        id: z.number(),
        price: z.number().min(1),
        quantity: z.number().min(1),
    })).min(1)
})

type NewSaleFormInputs = z.infer<typeof newSaleFormSchema>

export function NewSaleForm() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const products = useContextSelector(ProductsContext, context => context.products)
    const customers = useContextSelector(CustomersContext, context => context.customers)
    const refresh = useContextSelector(SalesContext, context => context.refresh)
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        control,
        getValues,
        formState: { isSubmitting, errors },
    } = useForm<NewSaleFormInputs>({
        resolver: zodResolver(newSaleFormSchema)
    })


    function updateProductQuantity(id: number, quantity: number) {
        const products = getValues().products
        const productIndex = products.findIndex(product => product.id == id)
        if (productIndex >= 0) {
            products[productIndex].quantity = quantity
            setValue('products', products)
        }
    }

    function updateProductPrice(id: number, price: number) {
        const products = getValues().products
        const productIndex = products.findIndex(product => product.id == id)
        console.log(products, price, productIndex)
        if (productIndex >= 0) {
            products[productIndex].price = price
            console.log(products)
            setValue('products', products)
        }
    }

    function removeFromCart(id: number) {
        const products = getValues().products
        setSelectedProducts(selectedProducts.filter(product => product.id != id))
        setValue('products', products.filter(product => product.id != id))
    }

    function addToCart(product: Product) {
        const products = getValues().products || []
        console.log(products)
        setSelectedProducts([...selectedProducts, product])
        setValue('products', [...products, { id: product.id, price: 1, quantity: 1 }])
    }

    async function onSubmit(data: NewSaleFormInputs) {
        toast.promise(async () => {
            const newSale = await WebServer.CreateOC({
                token,
                client_id: Number(data.client_id),
                products: data.products
            })
            refresh(token)
            reset()
            setSelectedProducts([])
        }, {
            error: 'Erro ao criar venda',
            success: 'Venda criada com sucesso',
            pending: 'Criando venda...'
        })
    }


    console.log(errors)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-wrapper">
            <Controller name='client_id' control={control} render={({ field: { onChange, value } }) => (
                <Select.Root
                    disabled={customers.length < 1}
                    onValueChange={onChange}
                    value={value}
                >
                    <Select.Trigger className='form-input relative aria-disabled:cursor-not-allowed' aria-disabled={customers.length < 1}>
                        <Select.Value
                            className='text-gray-300 placeholder:text-gray-500'
                            placeholder={products.length < 1 ? 'Sem clientes cadastrados' : 'Clique para selecionar cliente'}
                        />
                        <Select.Icon className="absolute right-2">
                            <ChevronDown />
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Content position='popper' className='z-20'>
                        <Select.Viewport className='bg-gray-800 p-2 rounded-md border border-gray-600 z-50'>
                            <Select.Group>
                                {customers
                                    .map((customer, i) => {
                                        return <Select.Item
                                            className='hover:bg-gray-600 text-gray-300 p-4 rounded cursor-pointer'
                                            key={i}
                                            value={String(customer.id)}>
                                            <Select.ItemText>{customer.name}</Select.ItemText>
                                        </Select.Item>
                                    })}
                            </Select.Group>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Root>
            )} />
            <Select.Root
                disabled={selectedProducts.length == products.length}
                value={''}
                onValueChange={(e) => addToCart(JSON.parse(e))}>
                <Select.Trigger className='form-input relative aria-disabled:cursor-not-allowed' aria-disabled={selectedProducts.length == products.length}>
                    <Select.Value
                        className='text-gray-300 placeholder:text-gray-500'
                        placeholder={products.length < 1 ? 'Sem produtos cadastrados' : 'Clique para selecionar produto'}
                    />
                    <Select.Icon className="absolute right-2">
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Content position='popper'>
                    <Select.Viewport className='bg-gray-800 p-2 rounded-md border border-gray-600'>
                        <Select.Group>
                            {products
                                .filter(product => !selectedProducts.some(productInCart => productInCart.id == product.id))
                                .map((product, i) => {
                                    return <Select.Item
                                        className='hover:bg-gray-600 text-gray-300 p-4 rounded cursor-pointer'
                                        key={i}
                                        value={JSON.stringify(product)}>
                                        <Select.ItemText>{product.name}</Select.ItemText>
                                    </Select.Item>
                                })}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select.Root>
            <ul className="flex flex-col rounded overflow-hidden max-h-[300px] overflow-y-auto [&>li:not(:last-child)]:border-b">
                {selectedProducts.length > 0
                    ? selectedProducts.map((product, i) => (
                        <NewSaleFormCartProduct
                            cartProduct={getValues().products.find(productInCart => productInCart.id == product.id)}
                            updateProductQuantity={updateProductQuantity}
                            updateProductPrice={updateProductPrice}
                            product={product}
                            removeFromCart={removeFromCart}
                            key={i}
                        />
                    ))
                    : <li className={clsx(
                        "flex p-4 items-start justify-between",
                        "bg-gray-800",
                        "border-gray-700"
                    )}>Sem produtos no carrinho</li>
                }
            </ul>
            <button
                disabled={isSubmitting}
                type='submit'
                className="form-submit mt-4"
            >Adicionar</button>
        </form >
    )
}