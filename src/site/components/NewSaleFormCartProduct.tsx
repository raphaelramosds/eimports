import { Product } from "@/@types/Product";
import { Parser } from "@/services/Parser";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useHookFormMask } from 'use-mask-input';
import { z } from "zod";

const newSaleCartProductFormSchema = z.object({
    quantity: z.number().min(1),
    price: z.string().min(3)
})

type newSaleCartProductFormInputs = z.infer<typeof newSaleCartProductFormSchema>

interface NewSaleFormCartProductProps {
    product: Product,
    removeFromCart: any,
    updateProductQuantity: any,
    updateProductPrice: any,
    cartProduct: any
}

export function NewSaleFormCartProduct({ product, removeFromCart, updateProductQuantity, updateProductPrice, cartProduct }: NewSaleFormCartProductProps) {
    const {
        register,
    } = useForm<newSaleCartProductFormInputs>({
        resolver: zodResolver(newSaleCartProductFormSchema),
        mode: 'all'
    })
    const registerWithMask = useHookFormMask(register)

    console.log(cartProduct)

    return (
        <div
            className={clsx(
                "flex p-4 items-start justify-between",
                "bg-gray-800 hover:bg-gray-700",
                "border-gray-700"
            )}>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <h5 className="text-green-300 text-sm">{product.name}</h5>
                    <p className="text-gray-100 text-xs"> {product.description}</p>
                </div>
                <div className='flex gap-4'>
                    <input required type="number" placeholder='Quantidade' className='form-input'
                        {...register('quantity')}
                        onBlur={(e) => updateProductQuantity(product.id, Number(e.target.value))}
                        onChange={(e) => updateProductQuantity(product.id, Number(e.target.value))}
                    />
                    <input required type="text" placeholder='Preço' className='form-input'
                        {...registerWithMask('price', ['R$9{*},9{2}'], {
                            autoUnmask: false,
                            showMaskOnHover: false,
                            placeholder: '0',
                            onBeforeMask: (value) => {
                                return value.replace('.', ',')
                            },
                           
                        })}
                        value={cartProduct.price}
                        onBlur={(e) => updateProductPrice(product.id, Parser.parseCurrencyFromForm(e.target.value))}
                        onChange={(e) => {
                            console.log(e.target.value)
                            console.log(Parser.parseCurrencyFromForm(e.target.value))
                            updateProductPrice(product.id, Parser.parseCurrencyFromForm(e.target.value))
                        }}
                    />
                </div>
            </div>
            <button
                type="button"
                className="text-gray-100 hover:text-red-300 hover:transition-colors"
                onClick={() => removeFromCart(product.id)}>
                <X size={20} />
            </button>
        </div>
    )
}