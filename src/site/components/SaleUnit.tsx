'use client'

import clsx from 'clsx'
import { SalesContext } from '@/contexts/SalesContext'
import { useContextSelector } from 'use-context-selector'
import { Sale } from '@/@types/Sale'

export function SaleUnit({ sale }: { sale: Sale }) {
    const holdSale = useContextSelector(SalesContext, context => context.holdSale)

    return (
        <div className={clsx(
            "flex w-full gap-12 p-4",
            "bg-gray-600 rounded-md",
        )}>
            <div className='flex flex-col justify-center gap-6'>
                <div>
                    <h2 className='text-lg text-gray-100'>{sale.client.name}</h2>
                    <span className='text-sm text-gray-300'>{new Date(sale.purchase).toLocaleDateString('pr-br', { timeZone: 'UTC' })}</span>
                </div>
                {/* <div className='flex items-start gap-8'>
                    <div>
                        <h3 className='text-sm text-gray-300'>Valor Total:</h3>
                        <span className='text-base text-green-300'>R$ {sale.products.reduce()}</span>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300'>Método:</h3>
                        <span className='text-base text-green-300'>Crédito</span>
                    </div>
                </div> */}
            </div>
            <div className="w-[1px] rounded bg-gray-800/40" />
            <div className='grow flex flex-col justify-start gap-1'>
                <h3 className='text-sm text-gray-300'>Produtos na venda:</h3>
                <ul className='[&>li]:text-xs text-gray-100 [&_span]:text-green-300 tracking-wide'>
                    {sale.products.map(product => (
                        <li key={product.id}>
                            {product.name}
                        </li>

                    ))}
                </ul>
            </div>
            <div className='flex flex-col justify-between items-end gap-4'>
                <div className='flex items-center gap-2'>
                    <span className={clsx(
                        'status-indicator',
                        sale.settlement ? 'bg-green-300' : 'bg-yellow-300',
                        sale.settlement ? 'after:bg-green-500' : 'after:bg-yellow-500'
                    )} />
                    <span className={clsx(
                        'uppercase text-xs',
                        sale.settlement ? 'text-green-300' : 'text-yellow-300'
                    )}>
                        {sale.settlement ? 'Pago' : 'Aguardando pagamento'}
                    </span>
                </div>
                <button
                    onClick={() => holdSale(sale)}
                    className='form-submit'>
                    Detalhes
                </button>
            </div>
        </div>
    )
}