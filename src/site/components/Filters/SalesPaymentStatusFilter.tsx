import { SalesContext } from "@/contexts/SalesContext";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { Check } from "lucide-react";
import { useContextSelector } from "use-context-selector";

export function SalesPaymentStatusFilter() {
    const payedFilter = useContextSelector(SalesContext, context => context.payedFilter)
    const pendingFilter = useContextSelector(SalesContext, context => context.pendingFilter)
    const updatePaymentFilter = useContextSelector(SalesContext, context => context.updatePaymentFilter)

    return (
        <div className="flex flex-col p-4 rounded-md bg-gray-700">
            <h4 className="lined-title mb-2">Pagamento</h4>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-800 hover:transition-colors rounded-t">
                <Checkbox.Root
                    id="payment-approved"
                    checked={payedFilter}
                    onCheckedChange={() => updatePaymentFilter('payed', !payedFilter)}
                    className={clsx(
                        "flex h-4 w-4 items-center justify-center rounded",
                        "data-[state=checked]:bg-green-500 data-[state=unchecked]:border data-[state=unchecked]:border-green-500"
                    )}>
                    <Checkbox.Indicator>
                        <Check className="h-3 w-3 self-center text-gray-100" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className="text-sm text-gray-100 grow" htmlFor="payment-approved">Pago</label>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-800 hover:transition-colors  rounded-b">
                <Checkbox.Root
                    id="payment-pending"
                    checked={pendingFilter}
                    onCheckedChange={() => updatePaymentFilter('pending', !pendingFilter)}
                    className={clsx(
                        "flex h-4 w-4 items-center justify-center rounded",
                        "data-[state=checked]:bg-green-500 data-[state=unchecked]:border data-[state=unchecked]:border-green-500"
                    )}>
                    <Checkbox.Indicator>
                        <Check className="h-3 w-3 self-center text-gray-100" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className="text-sm text-gray-100 grow" htmlFor="payment-pending">Pendente</label>
            </div>
        </div>
    )
}