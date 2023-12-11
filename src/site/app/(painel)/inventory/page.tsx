'use client'

import { CategoriesList } from "@/components/Lists/CategoriesList";
import { NewCategoryForm } from "@/components/Forms/NewCategoryForm";
import { NewProductForm } from "@/components/Forms/NewProductForm";
import { SearchProductForm } from "@/components/Forms/SearchProductForm";
import { ProductsList } from "@/components/Lists/ProductsList";
import * as Tabs from "@radix-ui/react-tabs";

export default function InventoryPage() {
    return (
        <div className="h-screen overflow-y-auto">
            <section className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
                <SearchProductForm />
            </section>
            <Tabs.Root defaultValue="products">
                <Tabs.List className="flex items-center justify-center">
                    <Tabs.Trigger
                        className="tabs-trigger"
                        key={"tab-trigger-products"}
                        value="products">
                        <span>Produtos</span>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="tabs-trigger"
                        key={"tab-trigger-categories"}
                        value="categories">
                        <span>Categorias</span>
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="products">
                    <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 p-4 lg:pt-8 ">
                        <div className="lg:w-96 w-full">
                            <NewProductForm />
                        </div>
                        <div className="lg:w-[30%] w-full">
                            <ProductsList />
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="categories">
                    <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 p-4 lg:pt-8 ">
                        <div className="lg:w-96 w-full">
                            <NewCategoryForm />
                        </div>
                        <div className="lg:w-[30%] w-full">
                            <CategoriesList />
                        </div>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}