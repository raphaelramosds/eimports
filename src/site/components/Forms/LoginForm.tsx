'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { WebServer } from "@/services/WebServer"
import { useContextSelector } from "use-context-selector"
import { UserContext } from "@/contexts/UserContext"
import { useRouter } from "next/navigation"

const loginFormSchema = z.object({
    login: z.string().min(3, 'Usuário inválido'),
    password: z.string().min(3, 'Senha inválida'),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function LoginForm() {
    const updateUser = useContextSelector(UserContext, context => context.updateUser)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    })

    async function onSubmit(data: LoginFormInputs) {
        try {
            const userData = await WebServer.Login({ login: data.login, password: data.password })
            updateUser({ access_token: userData.data.access_token, name: userData.data.name, login: userData.data.login })
            router.push('/sales')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                className="form-input"
                placeholder="Nome"
                type="text"
                maxLength={50}
                required
                {...register("login")}
            />
            <input
                className="form-input"
                placeholder="Senha"
                type="password"
                maxLength={50}
                required
                {...register("password")}
            />
            <span className="text-xs text-red-300">
                {(errors.login || errors.password) && 'Credenciais inválidas, verifique os dados.'}
            </span>
            <button
                className="form-submit mt-4"
                disabled={isSubmitting}
            >Entrar</button>
        </form>
    )
}