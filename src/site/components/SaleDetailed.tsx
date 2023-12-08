import { Sale } from '@/@types/Sale'
import clsx from 'clsx'
import { ArrowLeftRight, DollarSign, Undo2 } from 'lucide-react'

export function SaleDetailed({ sale }: { sale: Sale }) {
    return (
        <div className={clsx(
            "flex flex-col w-full gap-8 p-4",
            "bg-gray-600 rounded-md",
        )}>
            <header className='flex justify-between items-start gap-6 border-b border-gray-800/40 pb-6'>
                <div>
                    <h2 className='text-lg text-gray-100'>{sale.customer.name}</h2>
                    <span className='text-md text-gray-300'>{sale.date.toLocaleDateString()}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='status-indicator' />
                    <span className='uppercase text-xs text-green-300'>Pago</span>
                </div>
            </header>
            <div className='grow flex flex-col justify-end gap-1'>
                <h3 className='text-sm text-gray-300'>Produtos na venda:</h3>
                <ul className='[&>li]:text-base text-gray-100 [&_span]:text-green-300'>
                    {sale.products.map(product => (
                        <li key={product.id}>
                            {/* <span>{product.quantity}x</span> {product.name} */}
                        </li>

                    ))}
                </ul>
            </div>
            <footer className='flex justify-between items-center border-t border-gray-800/40 pt-6'>
                <div className='flex items-center gap-6'>
                    <div>
                        <h3 className='text-sm text-gray-300'>Valor Total:</h3>
                        <span className='text-base text-green-300'>R$ {sale.total}</span>
                    </div>
                    <div className="h-8 w-[1px] rounded bg-gray-800/40" />
                    <div>
                        <h3 className='text-sm text-gray-300'>Método:</h3>
                        <span className='text-base text-green-300'>Crédito</span>
                    </div>
                    <div className="h-8 w-[1px] rounded bg-gray-800/40" />
                    <div>
                        <h3 className='text-sm text-gray-300'>Parcelas:</h3>
                        <span className='text-base text-green-300'>2</span>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <button className='form-submit flex items-center gap-2'>
                        <DollarSign size={16} />
                        Comprovante
                    </button>
                    <div className="h-8 w-[1px] rounded bg-gray-800/40" />
                    <button className='form-submit flex items-center gap-2'>
                        <Undo2 size={16} />
                        Devolução
                    </button>
                    <button className='form-submit flex items-center gap-2'>
                        <ArrowLeftRight size={16} />
                        Troca
                    </button>
                </div>
            </footer>
        </div>
    )
}