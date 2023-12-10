import { TurnoverForm } from "@/components/Forms/TurnoverForm";
import { TurnoverCard } from "@/components/TurnoverCard";

export default function InventoryTurnoverPage() {
    return (
        <div className="h-screen flex items-start flex-col gap-6 mx-auto max-w-5xl pt-8">
            <div className="w-full">
                <TurnoverForm />
            </div>
            <div className="w-full">
                <TurnoverCard />
            </div>
        </div>
    )
}