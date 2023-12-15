'use client'

import { TurnoverContext } from "@/contexts/TurnoverContext";
import { BarChart, EventProps } from "@tremor/react";
import { useState } from "react";
import { useContextSelector } from "use-context-selector";

export function TurnoverChart() {
    const turnover = useContextSelector(TurnoverContext, context => context.turnover)
    const product = useContextSelector(TurnoverContext, context => context.product)
    const [highlightData, setHighlightData] = useState<EventProps | null>(null)

    const chartData = turnover?.map((item) => ({
        monthYear: new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(item.month_year)),
        "Vendas no mês": item.qt,
        "Nome do produto": product?.name,
        "Percentual das vendas": (Number(item.ratio) * 100).toFixed(2)
    })) || []

    return (
        <div className="flex flex-col gap-6">
            <div className="form-wrapper">
                <div className="flex justify-between items-start">
                    {
                        highlightData
                            ? <>
                                <div className="flex flex-col text-lg">
                                    <h1 className="text-green-300 pr-6">
                                        {highlightData["Nome do produto"]}
                                    </h1>
                                    <h2 className="text-lg tracking-wider text-end">
                                        {highlightData.monthYear}
                                    </h2>
                                </div>
                                <div className="flex gap-12">
                                    <div className="flex flex-col text-sm">
                                        <h3>Total de</h3>
                                        <h3 className="text-3xl text-green-300">{highlightData["Vendas no mês"]}</h3>
                                        <h3>unidades vendidas</h3>
                                    </div>
                                    <div className="flex flex-col text-sm">
                                        <h3>Representa</h3>
                                        <h3 className="text-3xl text-green-300">{highlightData["Percentual das vendas"]}%</h3>
                                        <h3>das vendas do mês</h3>
                                    </div>
                                </div>
                            </>
                            : <h1 className="text-base">Nenhum mês selecionado</h1>
                    }
                </div>
            </div>
            <div className="form-wrapper">
                <h2 className="text-green-300 text-lg">{product?.name}</h2>
                <BarChart
                    className="mt-6 bg-gray-700"
                    data={chartData}
                    index="monthYear"
                    categories={["Vendas no mês"]}
                    colors={["emerald", "lime"]}
                    showAnimation={true}
                    yAxisWidth={48}
                    onValueChange={(v) => setHighlightData(v)}
                />
            </div>
        </div>
    )
}