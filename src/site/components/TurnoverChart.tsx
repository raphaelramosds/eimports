'use client'

import { TurnoverContext } from "@/contexts/TurnoverContext";
import { BarChart, Card, EventProps, Title } from "@tremor/react";
import { useState } from "react";
import { useContextSelector } from "use-context-selector";

export function TurnoverChart() {
    const turnover = useContextSelector(TurnoverContext, context => context.turnover)
    const product = useContextSelector(TurnoverContext, context => context.product)
    const [highlightData, setHighlightData] = useState<EventProps | null>(null)

    const chartData = turnover?.map((item) => ({
        monthYear: new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(item.month_year)),
        "Vendas no mês": item.qt,
        "Percentual das vendas": (Number(item.ratio) * 100).toFixed(2)
    })) || []

    console.log(highlightData)

    return (
        <div className="flex flex-col gap-6">
            <div className="form-wrapper">
                <div className="flex justify-between">
                    {
                        highlightData
                            ? <>
                                <div>
                                    <h1 className="text-lg"><span className="text-green-300">{product?.name}</span> - {highlightData.monthYear}</h1>
                                    <p className="text-base text-gray-100"><span className="text-green-300">{highlightData["Vendas no mês"]}</span> unidades vendidas</p>
                                </div>
                                <div className="flex flex-col text-sm">
                                    <span>Representa</span>
                                    <span className="text-3xl text-green-300">{highlightData["Percentual das vendas"]}%</span>
                                    <span>das vendas do mês</span>
                                </div>
                            </>
                            : <h1 className="text-lg">Nenhum mês selecionado</h1>
                    }
                </div>
            </div>
            <Card className="bg-gray-700">
                <Title>Giro de Estoque</Title>
                <BarChart
                    className="mt-6 bg-gray-700"
                    data={chartData}
                    index="monthYear"
                    categories={["Vendas no mês", "Percentual das vendas"]}
                    colors={["emerald", "lime"]}
                    // valueFormatter={valueFormatter}
                    yAxisWidth={48}
                    onValueChange={(v) => setHighlightData(v)}
                />
            </Card>
        </div>
    )
}