'use client'

import { CustomersContext } from "@/contexts/CustomersContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import { z } from "zod"
// import { useHookFormMask } from "use-mask-input"
import { useState } from "react"
import { useHookFormMask } from "use-mask-input"
import { WebServer } from "@/services/WebServer"
import { UserContext } from "@/contexts/UserContext"
import { toast } from "react-toastify"

const newCustomerFormSchema = z.object({
    name: z.string().min(3).max(50),
    phone: z.string().min(10).max(20),
})

type NewCustomerFormInputs = z.infer<typeof newCustomerFormSchema>

export function NewCustomerForm() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const createCustomer = useContextSelector(CustomersContext, context => context.createCustomer)

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm<NewCustomerFormInputs>({
        resolver: zodResolver(newCustomerFormSchema),
    })
    const registerWithMask = useHookFormMask(register)
    const [isValid, setIsValid] = useState<boolean>(true)

    async function onSubmit(data: NewCustomerFormInputs) {
        toast.promise(async () => {
            const newCustomer = await WebServer.CreateCostumer({
                name: data.name,
                phone_num: data.phone,
                token
            })
            const isNewCustomerValid = createCustomer({
                id: newCustomer.id,
                name: data.name,
                phone_num: data.phone,
            })
            if (isNewCustomerValid) {
                setIsValid(true)
                reset()
            } else {
                setIsValid(false)
            }
        }, {
            pending: 'Adicionando cliente...',
            success: 'Cliente adicionado!',
            error: 'Erro ao adicionar cliente.'
        })
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
            <input
                className="form-input"
                placeholder="Telefone"
                type="text"
                required
                {...registerWithMask('phone', ['(99) 9999-9999', '(99) 99999-9999'], {
                    showMaskOnHover: false,
                    autoUnmask: true,

                })}
            />
            <span className="text-xs text-red-300">
                {(errors.name || errors.phone) ?
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