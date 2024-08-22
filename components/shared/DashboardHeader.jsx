"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import MobileNavBar from './MobileNavBar'
import SparklesText from "@/components/magicui/sparkles-text";

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex items-center justify-between'>
        <div className='flex justify-center items-center gap-2'><MobileNavBar/>
        <h2 className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-bold text-2xl md:text-3xl">Shei Dashboard</h2>
        </div>
        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader