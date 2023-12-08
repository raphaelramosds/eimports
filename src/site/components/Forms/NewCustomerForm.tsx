'use client'

import { CustomersContext } from "@/contexts/CustomersContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import { z } from "zod"
// import { useHookFormMask } from "use-mask-input"
import { useState } from "react"

const newCustomerFormSchema = z.object({
    name: z.string().min(3).max(50),
    phone: z.string().min(10).max(20),
    cpf_cnpj: z.string().min(11).max(20)
})

type NewCustomerFormInputs = z.infer<typeof newCustomerFormSchema>

export function NewCustomerForm() {
    const createCustomer = useContextSelector(CustomersContext, context => context.createCustomer)

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm<NewCustomerFormInputs>({
        resolver: zodResolver(newCustomerFormSchema),
    })
    // const registerWithMask = useHookFormMask(register)
    const [isValid, setIsValid] = useState<boolean>(true)

    async function onSubmit(data: NewCustomerFormInputs) {
        const isNewCustomerValid = createCustomer({
            id: crypto.randomUUID(),
            name: data.name,
            phone: data.phone,
            cpf_cnpj: data.cpf_cnpj
        })
        if (isNewCustomerValid) {
            setIsValid(true)
            reset()
        } else {
            setIsValid(false)
        }
    }

    console.log(errors)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-wrapper"
        >
            <h2 className="form-title">
                Adicionar cliente
            </h2>
            <input
                className="form-input"
                placeholder="Nome"
                maxLength={50}
                type="text"
                required
                {...register('name')}
            />
            {/* <input
                className="form-input"
                placeholder="Telefone"
                type="text"
                required
                {...registerWithMask('phone', ['(99) 9999-9999', '(99) 99999-9999'], {
                    showMaskOnHover: false,
                    autoUnmask: true,
                })}
            /> */}
            {/* <input
                className="form-input"
                placeholder="CPF/CNPJ"
                type="text"
                required
                {...registerWithMask('cpf_cnpj', ['999.999.999-99', '99.999.999/9999-99'], {
                    showMaskOnHover: false,
                    autoUnmask: true,
                })}
            /> */}
            <span className="text-xs text-red-300">
                {(errors.name || errors.cpf_cnpj || errors.phone) ?
                    'Dados inválidos, verifique e tente novamente.'
                    : !isValid && 'Cliente já existe.'}
            </span>
            <button
                disabled={isSubmitting}
                className="form-submit mt-4"
            >Adicionar</button>
        </form>
    )
}