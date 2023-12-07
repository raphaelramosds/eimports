import { LoginForm } from "@/components/Forms/LoginForm";
import clsx from "clsx";

export default function Login() {
    return (
        <div className="h-screen w-full flex">
            <main className="bg-gray-700 grid place-items-center grow">
                <div className={clsx(
                    "w-[calc(100%-32px)] lg:w-[30%] px-12 py-10 z-10",
                    "bg-gray-800 rounded-md",
                    "flex flex-col gap-8 shadow-low",
                )}>
                    <div className="flex">
                        <h1 className="text-lg text-gray-100 leading-4">Bem-vindo a<br />
                            <span className="text-green-300 text-right pl-10">Eimports</span>
                        </h1>
                        <span className="diamond" />
                    </div>
                    <LoginForm />
                </div>
                <div className="absolute shadow-clip-green w-full h-full flex">
                    <div className="grow clip-wave bg-gray-900" />
                </div>
            </main>
        </div>
    )
}