import { TurnoverForm } from "@/components/Forms/TurnoverForm";
import { TurnoverChart } from "@/components/TurnoverChart";

export default function InventoryTurnoverPage() {

    return (
        <div className="h-screen max-h-[100dvh] overflow-y-auto flex items-start flex-col gap-6 mx-auto max-w-5xl py-8">
            <div className="w-full">
                <TurnoverForm />
            </div>
            <div className="w-full">
                <TurnoverChart />
            </div>
        </div>
    )
}