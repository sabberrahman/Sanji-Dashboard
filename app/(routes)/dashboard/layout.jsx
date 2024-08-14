import DashboardHeader from '@/components/shared/DashboardHeader'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

function layout({children}) {
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block border-r shadow-sm'>
            <Sidebar/>
        </div>

        <div className='md:ml-64'>
            <DashboardHeader/>
             {children}
        </div>
       
        
    </div>
  )
}

export default layout