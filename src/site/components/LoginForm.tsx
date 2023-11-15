'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const loginFormSchema = z.object({
    userName: z.string(),
    password: z.string(),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    })


    return (
        <form
            className="flex flex-col gap-4"
            action=""
        >
            <input
                className="form-input"
                placeholder="Email ou Usuário"
                type="text"

            />
            <input
                className="form-input"
                placeholder="Senha"
                type="text"
            />
            <button 
            className="form-submit mt-4"
            disabled={isSubmitting}
            >Entrar</button>
        </form>
    )
}