'use client'

import { UserContext } from '@/contexts/UserContext';
import clsx from 'clsx';
import {
    LogOut, CircleDollarSign,
    PackagePlus,
    UserPlus,
    LineChart,
    PackageSearch,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContextSelector } from 'use-context-selector';

const ActionPages = [
    {
        text: 'Vendas',
        icon: <PackageSearch height={20} width={20} />,
        href: '/sales'
    },
    {
        text: 'Estoque',
        icon: <PackagePlus height={20} width={20} />,
        href: '/inventory'
    },
    {
        text: 'Clientes',
        icon: <UserPlus height={20} width={20} />,
        href: '/customers'
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
    const name = useContextSelector(UserContext, context => context.name)

    return (
        <aside className={clsx(
            'absolute z-20 h-full w-16 hover:w-72 transition-all group overflow-hidden',
            'bg-gray-700 border-r border-gray-600',
            'flex flex-col lg:flex-col-reverse'
        )}>
            <nav className='grow flex flex-col-reverse lg:flex-col justify-start gap-6 mb-[166px] lg:mb-0'>
                <div className='flex flex-col-reverse lg:flex-col'>
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
                <div className='side_menu_divider' />
                <div className='flex flex-col-reverse lg:flex-col'>

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
                <div className='side_menu_divider' />
                <div className='flex flex-col-reverse lg:flex-col'>
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
            </nav>
            <div className='relative h-[83px] flex items-center pl-[22px]'>
                <div className="invisible group-hover:visible absolute flex items-center">
                    <h3 className="text-xs text-gray-100 leading-[1px]">Olá,<br />
                        <span className="text-green-300 text-right pl-2 text-lg">{name}</span>
                    </h3>
                    <span className="diamond grow" />
                </div>
                <span className="diamond group-hover:invisible absolute self-center" />
            </div>
        </aside>
    )
}