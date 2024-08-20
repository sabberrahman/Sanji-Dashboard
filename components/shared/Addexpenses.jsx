"use clinet"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { db } from '@/utils/dbConfig'
import { Budgets, Expenses } from '@/utils/schema'
import { toast } from 'sonner'

function Addexpenses({budgetId , user, refreshData}) {
    const[name,setName]=useState()
    const[amount,setAmount]=useState()

    const AddNewExpense=async()=>{
        const result = await db.insert(Expenses).values({
           name:name,
           amount:amount,
           budgetId:budgetId,
           createdAt:user?.primaryEmailAddress?.emailAddress
        }).returning({insertedId:Budgets.id})

        console.log(result);
        if (result) {
            refreshData()
            toast("New Expense Added💸")

        }
    }
  return (
    <div className='p-5 border rounded-lg'>
        <h2 className='font-bold text-lg '>Add & Update Expense</h2>
        <div className="mt-2">
                <h2 className="text-black font-medium my-1">Expense Name</h2>
                <Input placeHolder="e.g Home Decor"
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mt-2">
                <h2 className="text-black font-medium my-1">Expense Amount</h2>
                <Input placeHolder="e.g 200$"
                type="number"
                onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <Button className="mt-4 w-full " disabled={!(name&&amount)} onClick={()=>AddNewExpense()}>Add new Expense</Button>
    </div>
  )
}

export default Addexpenses