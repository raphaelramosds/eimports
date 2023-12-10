import { Sale } from '@/@types/Sale'
import { SalesContext } from '@/contexts/SalesContext'
import { UserContext } from '@/contexts/UserContext'
import { WebServer } from '@/services/WebServer'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import { useContextSelector } from 'use-context-selector'

export function ConfirmPaymentDialog({ sale }: { sale: Sale }) {
    const token = useContextSelector(UserContext, context => context.access_token)
    const refresh = useContextSelector(SalesContext, context => context.refresh)
    const holdSale = useContextSelector(SalesContext, context => context.holdSale)
    const ref = useRef<HTMLButtonElement>(null)

    function settleOC() {
        console.log(token, sale.id)
        toast.promise(async () => {
            console.log(token, sale.id)
            let i = await WebServer.SettleOC({ token, sale_id: sale.id! })
            console.log(i)
            refresh(token)
            ref.current?.click()
            holdSale(null)
        }, {
            pending: 'Processando pagamento...',
            success: 'Pagamento confirmado!',
            error: 'Erro ao confirmar pagamento!'
        })
    }

    console.log(sale)

    return (
        <Dialog.Portal>
            <Dialog.Overlay
                className="fixed inset-0 z-20 bg-gray-900/70 grid place-items-center">
                <Dialog.Content className='flex flex-col bg-gray-700 w-full max-w-2xl relative rounded-md'>
                    <Dialog.Title
                        className='text-gray-300 text-xl text-center pt-6'
                    >
                        Deseja confirmar o pagamento dessa compra?
                    </Dialog.Title>
                    <Dialog.Close ref={ref} className='absolute top-2 right-2'>
                        <X size={24} color='var(--gray-300)' />
                    </Dialog.Close>
                    <div className='flex items-center justify-center gap-4 p-6'>
                        <Dialog.Close asChild>
                            <button className='form-submit bg-red-500 hover:bg-red-700'>Cancelar</button>
                        </Dialog.Close>
                        <button onClick={() => settleOC()} className='form-submit'>Confirmar</button>
                    </div>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    )
}