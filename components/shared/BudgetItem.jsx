import Link from 'next/link'
import React from 'react'

function BudgetItem({budget}) {

    const progressBarCalculate=()=>{
        const percentage=(budget.totalSpend/budget.amount)*100
        return percentage.toFixed(2)
    }
  return (
    <Link href={"/dashboard/expenses/"+budget?.id} >
        <div className='p-5 border rounded-lg hover:shadow-md cursor-pointer h-[175px]'>
            
      <div className="flex items-center gap-2 justify-between">
        <div className="flex gap-2 items-center">
            <h2 className='text-2xl p-3 px-4 bg-slate-100 rounded-full'>{budget?.icon}</h2>
            <div className="">
                <h2 className='font-bold'>{budget?.name}</h2>
                <div className='text-sm text-muted-foreground text-red-500 flex gap-2'>{budget?.totalItem} <h2 className='text-sm text-muted-foreground'>item</h2></div>
            </div>

        </div>
        <h2 className='font-bold text-red-500 text-lg '>${budget?.amount}</h2>
        </div>

        <div className="mt-5 ">
        <div className="flex justify-between items-center mb-3">
            <h2 className='text-xs text-slate-400'>${budget?.totalSpend?budget?.totalSpend:0} Spend</h2>
            <h2 className='text-xs text-slate-400'>${budget?.amount-budget?.totalSpend} Remianing</h2>
        </div>
            <div className='w-full bg-slate-300 h-2'>
                <div className=" bg-red-400 rounded-full h-2" style={{width:`${progressBarCalculate()}%`}}></div>

            </div>
        </div>

         </div>
    </Link>
  )
}

export default BudgetItem