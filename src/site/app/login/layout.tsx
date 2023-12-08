import { UserContextProvider } from "@/contexts/UserContext";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}