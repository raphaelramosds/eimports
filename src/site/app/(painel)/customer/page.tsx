import { SearchCustomerForm } from "@/components/Forms/SearchCustomerForm";

export default function RegisterCustomerPage() {
    return (
        <div>
            <section className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
                <SearchCustomerForm />
            </section>
        </div>
    )
}