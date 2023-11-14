import { SideMenu } from "@/components/SideMenu";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SideMenu />
            <main className="flex w-full h-screen">
                <div className="ml-16 flex-1">
                    {children}
                </div>
            </main>
        </>
    )
}