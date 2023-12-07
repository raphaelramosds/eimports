import { SideMenu } from "@/components/SideMenu";
import { SalesContextProvider } from "@/contexts/SalesContext";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
    return (
        <SalesContextProvider>
            <SideMenu />
            <main className="flex w-full h-screen max-w-[100dvw] overflow-hidden">
                <div className="ml-16 grow">
                    {children}
                </div>
            </main>
        </SalesContextProvider>
    )
}