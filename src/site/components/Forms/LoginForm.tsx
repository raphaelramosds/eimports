'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { WebServer } from "@/services/WebServer"
import * as argon2 from "argon2";

const loginFormSchema = z.object({
    login: z.string().min(3, 'Usuário inválido'),
    password: z.string().min(3, 'Senha inválida'),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema),
        shouldFocusError: false,
    })

    async function onSubmit(data: LoginFormInputs) {
        console.log(data)
        // try {
        //     const res = await argon2.hash(data.password)
        //     console.log(res)
        // } catch (e) {
        //     console.log(e)
        // }
        try {
            const isValidLogin = await WebServer.Login({ login: data.login, password: data.password })
            console.log(isValidLogin)
        } catch (e) {
            console.log(e)
        }
        return
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                className="form-input"
                placeholder="Email ou Usuário"
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