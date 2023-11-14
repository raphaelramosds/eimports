'use client'

import { NewCategoryForm } from "@/components/NewCategoryForm";
import { NewProductForm } from "@/components/NewProductForm";
import { SearchProductForm } from "@/components/SearchProductForm";
import * as Tabs from "@radix-ui/react-tabs";

export default function RegisterProductPage() {
    return (
        <div>
            <div className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
                <SearchProductForm />
            </div>
            <Tabs.Root defaultValue="register">
                <Tabs.List className="flex items-center justify-center">
                    <Tabs.Trigger
                        className="tabs-trigger"
                        key={"tab-trigger-register"}
                        value="register">
                        <span>Cadastros</span>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="tabs-trigger"
                        key={"tab-trigger-inventory"}
                        value="inventory">
                        <span>Estoque</span>
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="register">
                    <div className="w-full flex items-start justify-center gap-16 pt-16">
                        <div className="w-96">
                            <NewProductForm />
                        </div>
                        <div className="w-80">
                            <NewCategoryForm />
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="inventory">
                    <div className="w-full flex items-start justify-center gap-16 pt-16">
                        <h1>Estoque com produtos e respectivas quantidades</h1>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}