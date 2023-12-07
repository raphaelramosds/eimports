'use client'
import { WebServer } from "@/services/WebServer"

export default function MonthProfitPage() {

    async function handleGetSellers() {
        try {
            const response = await WebServer.GetSellers()
            console.log(response)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="w-full flex justify-center pt-16 ">
            <button onClick={handleGetSellers} className="form-submit">Get Sellers</button>

        </div>
    )
}