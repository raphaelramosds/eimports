'use client'

import {
    LogOut, CircleDollarSign,
    ArrowLeftRight,
    PackagePlus,
    UserPlus,
    LineChart,
    PackageSearch,
    ShoppingCart,
    Undo2,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActionPages = [
    {
        text: 'Compras',
        icon: <PackageSearch height={20} width={20} />,
        href: '/sales'
    },
    // {
    //     text: 'Cadastrar Compra',
    //     icon: <ShoppingCart height={20} width={20} />,
    //     href: '/cadastrar_compra'
    // },
    // {
    //     text: 'Registrar Troca',
    //     icon: <ArrowLeftRight height={20} width={20} />,
    //     href: '/registrar_troca'
    // },
    // {
    //     text: 'Registrar Devolução',
    //     icon: <Undo2 height={20} width={20} />,
    //     href: '/registrar_devolucao'
    // },
    {
        text: 'Estoque',
        icon: <PackagePlus height={20} width={20} />,
        href: '/inventory'
    },
    {
        text: 'Clientes',
        icon: <UserPlus height={20} width={20} />,
        href: '/customer'
    },
]

const StatisticPages = [
    {
        text: 'Lucro Mensal',
        icon: <CircleDollarSign height={20} width={20} />,
        href: '/month_profit'
    },
    {
        text: 'Giro de Estoque',
        icon: <LineChart height={20} width={20} />,
        href: '/inventory_turnover'
    },
]

const AccountPages = [
    {
        text: 'Logout',
        icon: <LogOut height={20} width={20} />,
        href: '/login'
    }
]

export function SideMenu() {

    const pathname = usePathname()

    return (
        <aside className='absolute h-full w-16 hover:w-72 transition-all bg-gray-700 border-r border-gray-600 group overflow-hidden'>
            <nav className='flex flex-col gap-8 mt-[83px]'>
                <div>
                    {
                        ActionPages.map((page, index) =>
                            <Link
                                data-active={pathname === page.href}
                                href={page.href}
                                key={index}
                                className="side_menu_item"
                            >
                                {page.icon}
                                <span className='side_menu_item_text'>{page.text}</span>
                            </Link>
                        )
                    }
                </div>
                <div>
                    <div>
                        {
                            StatisticPages.map((page, index) =>
                                <Link
                                    data-active={pathname === page.href}
                                    href={page.href}
                                    key={index}
                                    className='side_menu_item'
                                >
                                    {page.icon}
                                    <span className='side_menu_item_text'>{page.text}</span>
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div>
                        {
                            AccountPages.map((page, index) =>
                                <Link
                                    data-active={pathname === page.href}
                                    href={page.href}
                                    key={index}
                                    className='side_menu_item'
                                >
                                    {page.icon}
                                    <span className='side_menu_item_text'>{page.text}</span>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </aside>
    )
}