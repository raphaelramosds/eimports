
'use client'

import { CustomersContext } from "@/contexts/CustomersContext"
import clsx from "clsx"
import { X } from "lucide-react"
import { useContextSelector } from "use-context-selector"

export function CustomersList() {
    const customers = useContextSelector(CustomersContext, context => context.customers)
    const deleteCustomer = useContextSelector(CustomersContext, context => context.deleteCustomer)

    return (
        <div className="form-wrapper">
            <h2 className="form-title">
                Clientes
            </h2>
            <ul className="flex flex-col rounded overflow-hidden max-h-[600px] overflow-y-auto">
                {customers.length > 0
                    ? customers.map((customer, i) => (
                        <li key={i} className={clsx(
                            "flex p-4 items-center justify-between",
                            "bg-gray-800 hover:bg-gray-900",
                        )}>
                            <div>
                                <h6 className="text-base text-gray-100">{customer.name}</h6>
                                <div className="flex gap-4 ">
                                    <h6 className="text-xs text-green-300 before:content-['Telefone:_'] before:text-gray-300">{customer.phone}</h6>
                                    {/* <h6 className="text-xs text-green-300 before:content-['CPF/CNPJ:_'] before:text-gray-300">{customer.cpf_cnpj}</h6> */}
                                </div>
                            </div>
                            <button
                                className="text-gray-100 hover:text-red-300 hover:transition-colors"
                                onClick={() => { }}>
                                <X size={20} />
                            </button>
                        </li>
                    ))
                    : <span>Sem clientes cadastrados</span>}
            </ul>
        </div>
    )
}