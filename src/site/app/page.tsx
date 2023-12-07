import { SideMenu } from "@/components/SideMenu"
import { redirect } from 'next/navigation'

export default function Login() {

  redirect('/sales')

  return (
    <>
      <SideMenu />
      <main>
        <h1>Hello WOrld</h1>
      </main>
    </>
  )
}
