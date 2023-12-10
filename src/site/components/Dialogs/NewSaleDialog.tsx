import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { NewSaleForm } from '../Forms/NewSaleForm'

export function NewSaleModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay
                className="fixed inset-0 z-20 bg-gray-900/70 grid place-items-center">
                <Dialog.Content className='flex flex-col bg-gray-700 w-full max-w-2xl relative rounded-md'>
                    <Dialog.Title
                        className='text-gray-300 text-xl text-center pt-6'
                    >
                        Cadastrar nova ordem de compra.
                    </Dialog.Title>
                    <Dialog.Close className='absolute top-2 right-2'>
                        <X size={24} color='var(--gray-300)' />
                    </Dialog.Close>
                    <NewSaleForm />
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    )
}