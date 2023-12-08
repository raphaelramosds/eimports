import { CustomersList } from "@/components/CustomersList";
import { NewCustomerForm } from "@/components/Forms/NewCustomerForm";
import { SearchCustomerForm } from "@/components/Forms/SearchCustomerForm";

export default function CustomersPage() {
    return (
        <div className="h-screen">
            <section className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
                <SearchCustomerForm />
            </section>
            <section>
                <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 p-4 lg:pt-12 ">
                    <div className="lg:w-96 w-full">
                        <NewCustomerForm />
                    </div>
                    <div className="lg:w-[30%] w-full">
                        <CustomersList />
                    </div>
                </div>
            </section>
        </div>
    )
}