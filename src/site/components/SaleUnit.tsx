import xiaomi from '@/assets/xiaomi.webp'
import Image from 'next/image'

export function SaleUnit() {
    return (
        <div className="bg-gray-600 p-4 rounded-md w-full">
            <header>
                <div>
                    <h2 className='text-lg text-gray-300'>Xiaomi 12 PRO</h2>
                    <span className='text-sm text-gray-400'>Celulares</span>
                    <Image 
                    className='rounded-md mt-4'
                    src={xiaomi} width={120} height={120} alt='produto'/>
                </div>
            </header>
        </div>
    )
}