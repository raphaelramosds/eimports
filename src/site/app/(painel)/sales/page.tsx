import { SaleUnit } from "@/components/SaleUnit";
import { SearchSaleForm } from "@/components/SearchSaleForm";

export default function SalesPage() {
    return (
        <div>
            <div className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
                <SearchSaleForm />
            </div>
            <div className="flex flex-col gap-6 items-center justify-center p-6 pt-96 w-full max-w-screen-lg ml-auto mr-auto max-h-[calc(100vh-120px)] overflow-y-auto">
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
                <SaleUnit />
            </div>
        </div>
    )
}