import { LoginForm } from "@/components/LoginForm";

export default function Login() {
    return (
        <div className="h-screen flex">
            <div className="w-2/6 bg-gray-800">
            </div>
            <main className="w-4/6 bg-gray-100 grid place-items-center">
                <div className=" w-2/5 bg-gray-800 px-12 py-10 rounded-md">
                    <LoginForm />
                </div>
            </main>
        </div>
    )
}