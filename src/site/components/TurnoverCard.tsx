'use client'

import { TurnoverContext } from "@/contexts/TurnoverContext";
import { useContextSelector } from "use-context-selector";

export function TurnoverCard() {
    const turnover = useContextSelector(TurnoverContext, context => context.turnover)
    const product = useContextSelector(TurnoverContext, context => context.product)

    console.log(turnover)

    return (
        <div className="form-wrapper">
            <div className="flex justify-between">
                {
                    turnover
                        ? <>
                            <div>
                                <h1 className="text-lg"><span className="text-green-300">{product?.name}</span> - Giro de Estoque</h1>
                                <p className="text-base text-gray-100"><span className="text-green-300">{turnover.qt}</span> unidades vendidas</p>
                            </div>
                            <div className="flex flex-col text-sm">
                                <span>Representa</span>
                                <span className="text-3xl text-green-300">{Number(turnover?.ratio) * 100}%</span>
                                <span>das vendas do mês</span>
                            </div>
                        </>
                        : <h1 className="text-lg">Nenhum produto selecionado</h1>
                }
            </div>
        </div>

    );
}