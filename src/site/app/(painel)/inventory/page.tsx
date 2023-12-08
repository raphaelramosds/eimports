'use client'

import { CategoriesList } from "@/components/CategoriesList";
import { NewCategoryForm } from "@/components/Forms/NewCategoryForm";
import { NewProductForm } from "@/components/Forms/NewProductForm";
import { SearchProductForm } from "@/components/Forms/SearchProductForm";
import { ProductsList } from "@/components/ProductsList";
import { CategoriesContext } from "@/contexts/CategoriesContext";
import { ProductsContext } from "@/contexts/ProductsContext";
import { UserContext } from "@/contexts/UserContext";
import { WebServer } from "@/services/WebServer";
import * as Tabs from "@radix-ui/react-tabs";
import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";

export default function InventoryPage() {
    const token = useContextSelector(UserContext, context => context.access_token)
    const fetchCategories = useContextSelector(CategoriesContext, context => context.fetchCategories)
    const fetchProducts = useContextSelector(ProductsContext, context => context.fetchProducts)

    useEffect(() => {
        async function getProducts() {
            try {
                const productsData = await WebServer.GetProducts({ token })
                fetchProducts(productsData)
                console.log('Fetch Products: ', productsData)
            } catch (e) {
                console.log(e)
            }
        }
        async function getCategories() {
            try {
                const categoriesData = await WebServer.GetCategories({ token })
                fetchCategories(categoriesData)
                console.log('Fetch Categories: ', categoriesData)
            } catch (e) {
                console.log(e)
            }
        }
        if (token) {
            getCategories()
            getProducts()
        }
    }, [fetchCategories, fetchProducts, token])

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
                        <div className="w-96">
                            <NewProductForm />
                        </div>
                        <div className="w-96">
                            <ProductsList />
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="categories">
                    <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 p-4 lg:pt-8 ">
                        <div className="w-96">
                            <NewCategoryForm />
                        </div>
                        <div className="w-96">
                            <CategoriesList />
                        </div>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}