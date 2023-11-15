import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { z } from 'zod'

export function NewSaleModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay
                className="fixed inset-0 z-20 bg-gray-900/50 grid place-items-center"
            >
                <Dialog.Content className='flex flex-col bg-gray-700 w-full max-w-2xl relative rounded-md px-8 py-12'>
                    <Dialog.Title
                        className='text-gray-300 text-xl '
                    >
                        Cadastrar nova ordem de compra.
                    </Dialog.Title>
                    <Dialog.Close className='absolute top-2 right-2'>
                        <X size={24} color='var(--gray-300)'/>
                    </Dialog.Close>
                    <form
                        className="flex flex-col gap-2 mt-8"
                        action=""
                    >
                        <input
                            className="form-input"
                            placeholder="Código da Compra"
                            type="text"
                        />
                        <input
                            className="form-input"
                            placeholder="Código da Compra"
                            type="text"
                        />
                        <input
                            className="form-input"
                            placeholder="Código da Compra"
                            type="text"
                        />
                        <button
                            className="form-submit mt-4"
                        >Cadastrar</button>
                    </form>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    )
}