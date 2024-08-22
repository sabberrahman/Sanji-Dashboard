"use client"
import React, { useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { menuList } from './Sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const handleSheetTrigger = () => setIsOpen(!isOpen);

 
  return (
    <div className='md:hidden'>
       <Sheet className="gap-5" open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger><MenuIcon className='w-8 h-8'/> </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader className="">
      <Image src="/next.svg" alt='logo' width={200} height={200} className='mb-6'/>

      <div className="mt-20">
            {menuList.map((menu,index)=>(
                <Link href={menu.path} key={index} className='gap-8' onClick={handleSheetTrigger}>
                        <h2 key={index} className={`flex  gap-2 items-center text-gray-500 font-medium p-5 rounded-md mb-2 cursor-pointer hover:text-red-600 hover:bg-red-200 ${path==menu.path && "text-red-600 bg-red-200"}`}>
                            <menu.icon/>
                            {menu.name}
                        </h2>
               </Link>
            ))}
        </div>
    </SheetHeader>
    <SheetFooter>
              <SheetClose asChild>
                <Button className="w-full ">Close</Button>
              </SheetClose>
            </SheetFooter>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default MobileNavBar