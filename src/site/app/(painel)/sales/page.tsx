'use client'

import { SaleUnit } from "@/components/SaleUnit";
import { SearchSaleForm } from "@/components/Forms/SearchSaleForm";
import clsx from "clsx";
import { useContextSelector } from "use-context-selector";
import { SalesContext } from "@/contexts/SalesContext";
import { SaleDetailed } from "@/components/SaleDetailed";
import { MoveLeft } from "lucide-react";
import { SalesPaymentStatusFilter } from "@/components/Filters/SalesPaymentStatusFilter";

export default function SalesPage() {
    const sales = useContextSelector(SalesContext, context => context.sales)
    const onHoldSale = useContextSelector(SalesContext, context => context.onHoldSale)
    const holdSale = useContextSelector(SalesContext, context => context.holdSale)
    const payedFilter = useContextSelector(SalesContext, context => context.payedFilter)
    const pendingFilter = useContextSelector(SalesContext, context => context.pendingFilter)

    function filteredSales() {
        if (payedFilter && pendingFilter) return sales
        if (payedFilter) return sales.filter(sale => sale.settlement)
        if (pendingFilter) return sales.filter(sale => !sale.settlement)
        return []
    }

    return (
        <div className="h-full flex flex-col-reverse lg:flex-col">
            <section className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
                <SearchSaleForm />
            </section>
            <div className={clsx(
                "w-full lg:max-w-screen-lg h-full max-h-[calc(100%-83px)]",
                "mx-auto px-4 lg:px-0"
            )}>
                {
                    onHoldSale
                        ? <div className="flex flex-col gap-6 mt-6">
                            <div>
                                <button
                                    onClick={() => holdSale(null)}
                                    className="form-submit flex items-center gap-1">
                                    <MoveLeft size={16} />
                                    <span>Voltar</span>
                                </button>
                            </div>
                            <SaleDetailed sale={onHoldSale} />
                        </div>
                        : <div className="flex flex-col lg:flex-row items-start gap-6 mt-6">
                            <section className="flex flex-col min-w-[200px]">
                                <SalesPaymentStatusFilter />
                            </section>
                            <section className={clsx(
                                "grow flex flex-col gap-4",
                                "overflow-y-auto max-h-[calc(100dvh-83px-1.5rem-24px)] pr-4"
                            )}>
                                {
                                    filteredSales().map(sale => (
                                        <SaleUnit sale={sale} key={sale.id} />
                                    ))
                                }
                            </section>
                        </div>
                }
            </div>
        </div >
    )
}