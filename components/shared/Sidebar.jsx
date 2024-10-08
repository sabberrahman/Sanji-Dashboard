"use client"
import { UserButton } from '@clerk/nextjs'
import { FileJson2Icon, LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const menuList=[{
    id:1,
    name:"Dashboard",
    icon:LayoutGrid,
    path:"/dashboard"
},
{
    id:2,
    name:"Budgets",
    icon:PiggyBank,
    path:"/dashboard/budgets"
},
{
    id:3,
    name:"Expenses",
    icon:ReceiptText,
    path:"/dashboard/expenses"
},
{
    id:4,
    name:"Repository",
    icon:FileJson2Icon,
    path:"/dashboard/upgrade"
}

]

function Sidebar() {
  
const path=usePathname()
  return (
    <div className='h-screen'>
        <Link href="/">
        <Image src="/next.svg" alt='logo' width={160} height={100} className='ml-2 mt-10'/>
        </Link>
       
        <div className="mt-20">
            {menuList.map((menu,index)=>(
                <Link href={menu.path} key={index}>
                        <h2 key={index} className={`flex  gap-2 items-center text-gray-500 font-medium p-5 rounded-md mb-2 cursor-pointer hover:text-red-600 hover:bg-red-200 ${path==menu.path && "text-red-600 bg-red-200"}`}>
                            <menu.icon/>
                            {menu.name}
                        </h2>
               </Link>
            ))}
        </div>

        <div className='fixed bottom-10 gap-2 flex items-center p-5 '>
            <UserButton/>
            User Profile
        </div>

    </div>
  )
}

export default Sidebar