import DashboardHeader from '@/components/shared/DashboardHeader'
import Sidebar from '@/components/shared/Sidebar'
import { db } from '@/utils/dbConfig'
import React from 'react'

function layout({children}) {
  const checkUserBudgets=async ()=>{
    const result =await db 
  }
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block border-r shadow-sm p-4'>
            <Sidebar/>
        </div>

        <div className='md:ml-64 p-8'>
            <DashboardHeader/>
             {children}
        </div>
       
        
    </div>
  )
}

export default layout