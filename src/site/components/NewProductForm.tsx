'use client'

import * as Select from '@radix-ui/react-select'
import { Boxes, ChevronDown } from 'lucide-react'

export function NewProductForm() {
    return (
        <form
            action=""
            className="form-wrapper"
        >
            <h2 className="form-title">
                Adicionar produto
            </h2>
            <input
                className="form-input"
                placeholder="Nome"
                type="text"
            />
            <input
                className="form-input"
                placeholder="Descrição"
                type="text"
            />
            <input
                className="form-input"
                placeholder="Categoria"
                type="text"
            />
            <Select.Root>
                <Select.Trigger className='form-input relative' >
                    <Select.Value className='text-gray-300' placeholder='Selecione categoria' />
                    <Select.Icon className="absolute right-2">
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Content>
                    <Select.Viewport className='bg-gray-800 p-2 rounded-md border border-gray-600'>
                        <Select.Group>
                            {["Garrafas", "Eletrônicos", "Celulares", "Notebooks", "Canetas", "Vapes"].map((item, index) => {
                                return <Select.Item
                                    className='hover:bg-gray-600 text-gray-300 p-4 rounded cursor-pointer'
                                    key={index}
                                    value={item}>
                                    <Select.ItemText>{item}</Select.ItemText>
                                </Select.Item>
                            })}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>

            </Select.Root>
            <input
                className="form-input [&::-webkit-outer-spin-button]:hidden [&::-webkit-inner-spin-button]:hidden"
                placeholder="Quantidade"
                type="number"
            />
            <button
                className="form-submit mt-4"
            >Adicionar</button>
        </form>
    )
}