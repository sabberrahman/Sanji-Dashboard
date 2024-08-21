import { db } from '@/utils/dbConfig'
import { Expenses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

function ExpenseListTable({expenseList,refreshData}) {
     
    const deleteExpense=async({ex})=>{
        
       const result = await db.delete(Expenses)
       .where(eq(Expenses.id, ex?.id))
       .returning()

       if (result) {
        
        toast("Expense is deleted 🌞")
        refreshData()
       }
    }
  return (
    <div className='mt-3'>
        <div className="grid grid-cols-4 bg-slate-200 p-2">
            <h2 className='font-bold'>Name</h2>
            <h2 className='font-bold'>Amount</h2>
            <h2 className='font-bold'>Date</h2>
            <h2 className='font-bold'>Action</h2>
        </div>
        {expenseList.map((ex,index)=>(
             <div className="grid grid-cols-4 bg-slate-50 p-2 border-b" key={index}>
             <h2>{ex.name}</h2>
             <h2>{ex.amount}</h2>
             <h2>{ex.createdAt}</h2>
             <h2><Trash className='text-red-600 cursor-pointer' onClick={()=>deleteExpense({ex})}/></h2>
         </div>
        ))}
    </div>
  )
}

export default ExpenseListTable