import { DollarSign, PiggyBank, ScrollText, Wallet2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CardInfoDashboard({budgetList}) {
  const [totalBudget,setTotalBudget]=useState(0)
  const [totalSpend,setTotalSpend]=useState(0)
  
  
  useEffect(() => {
    budgetList&&calculateCardInfo()   
  }, [budgetList])
  
  
  const calculateCardInfo=()=>{
   let total_budget=0;
   let total_spend=0;
    budgetList.forEach(element => {
      total_budget= total_budget+ Number(element.amount)
      total_spend=total_spend+Number(element.totalSpend)
    });
    setTotalBudget(total_budget)
    setTotalSpend(total_spend)
  }
  return (
    <>
    {budgetList?.length>0 ?
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className="p-7 border rounded-lg flex justify-between items-center">
            <div>
             <h2 className='text-md font-medium'>total Budget</h2>
             <h2 className='font-semibold text-3xl'>${totalBudget}</h2>
            </div>
            <PiggyBank className='bg-red-300 h-12 w-12 p-3 rounded-full text-red-900'/>
           </div>

           <div className="p-7 border rounded-lg flex justify-between items-center">
            <div>
             <h2 className='text-md font-medium'>total Spend</h2>
             <h2 className='font-semibold text-3xl'>${totalSpend}</h2>
            </div>
            <DollarSign className='bg-red-300 h-12 w-12 p-3 rounded-full text-red-900'/>
           </div>

           <div className="p-7 border rounded-lg flex justify-between items-center">
            <div>
             <h2 className='text-md font-medium'>Number of Budget</h2>
             <h2 className='font-semibold text-3xl'>{budgetList?.length}</h2>
            </div>
            <ScrollText className='bg-red-300 h-12 w-12 p-3 rounded-full text-red-900'/>
           </div>
    </div> :
     <di className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {[1,2,3].map((box,index)=>(
        <div className="h-[110px] w-full bg-slate-300 animate-pulse rounded-lg" key={index}></div>
      ))}
      
    </di>}
    
    </>
    
  )
}

export default CardInfoDashboard