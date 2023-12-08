'use client'

import { SaleUnit } from "@/components/SaleUnit";
import { SearchSaleForm } from "@/components/Forms/SearchSaleForm";
import clsx from "clsx";
import { useContextSelector } from "use-context-selector";
import { SalesContext } from "@/contexts/SalesContext";
import { SaleDetailed } from "@/components/SaleDetailed";
import { MoveLeft } from "lucide-react";

export default function SalesPage() {
    const sales = useContextSelector(SalesContext, context => context.sales)
    const onHoldSale = useContextSelector(SalesContext, context => context.onHoldSale)
    const holdSale = useContextSelector(SalesContext, context => context.holdSale)

    return (
        <div className="h-full flex flex-col-reverse lg:flex-col">
            {/* <section className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
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
                                <div className="bg-gray-600 rounded-md px-4 py-6">
                                    Filtros
                                </div>
                            </section>
                            <section className={clsx(
                                "grow flex flex-col gap-6",
                                "overflow-y-auto h-full pr-4"
                            )}>
                                {
                                    sales.map(sale => (
                                        <SaleUnit sale={sale} key={sale.id} />
                                    ))
                                }
                            </section>
                        </div>
                }
            </div> */}
            volta já
        </div >
    )
}