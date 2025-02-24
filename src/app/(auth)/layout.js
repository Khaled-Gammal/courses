import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { hasCookie } from "cookies-next"


function AuthLayout({children}) {
   
  return (
    <main className="flex items-center justify-center text-gray-400 flex-col h-screen w-full gap-8">
      {children}
      </main>
  )
}

export default AuthLayout