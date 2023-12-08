'use client'

import { SideMenu } from "@/components/SideMenu";
import { CategoriesContextProvider } from "@/contexts/CategoriesContext";
import { CustomersContextProvider } from "@/contexts/CustomersContext";
import { ProductsContextProvider } from "@/contexts/ProductsContext";
import { SalesContextProvider } from "@/contexts/SalesContext";
import { UserContextProvider } from "@/contexts/UserContext";
import { redirect } from "next/navigation";

import { useLayoutEffect } from "react";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
    
    useLayoutEffect(() => {
        const userJSON = localStorage.getItem('@eimports:user-1.0.0') ?? '{}'
        const user = JSON.parse(userJSON)
        if (!user.access_token) {
            redirect('/login')
        }
    }, [])

    return (
        <UserContextProvider>
            <ProductsContextProvider>
                <CustomersContextProvider>
                    <CategoriesContextProvider>
                        <SalesContextProvider>
                            <SideMenu />
                            <main className="flex w-full h-screen max-w-[100dvw] overflow-hidden">
                                <div className="ml-16 grow">
                                    {children}
                                </div>
                            </main>
                        </SalesContextProvider>
                    </CategoriesContextProvider>
                </CustomersContextProvider>
            </ProductsContextProvider>
        </UserContextProvider>
    )
}