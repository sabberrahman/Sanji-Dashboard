"use client"
import Addexpenses from '@/components/shared/Addexpenses'
import BudgetItem from '@/components/shared/BudgetItem'
import ExpenseListTable from '@/components/shared/ExpenseListTable'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/dbConfig'
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { ArrowLeft, PenBoxIcon, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import EditBudget from '@/components/shared/EditBudget'


function ExpensesBoard({params}) {
  const[budgetInfo,setBudgetInfo]=useState()
  const [expenseList,setExpenseList]=useState([])
  const {user}= useUser()
  const route=useRouter()

  useEffect(() => {
   user && getBudgetInfo()
  }, [user])

  const getBudgetInfo = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .where(eq(Budgets.id, params.id))
      .groupBy(Budgets.id);

      setBudgetInfo(result[0]);
      getExpenseList()
   
  };

  const getExpenseList=async()=>{
    const result= await db.select().from(Expenses)
    .where(eq(Expenses.budgetId,params.id))
    .orderBy(desc(Expenses.id))

    setExpenseList(result)
    
  }

  const deleteBudget=async()=>{
    const result= await db.delete(Expenses)
    .where(eq(Expenses.budgetId, params.id))
    .returning()

    if (result) {
      const res= await db.delete(Budgets)
      .where(eq(Budgets.id,params.id))
      .returning()
    }
    toast("Budget is deleted🤠")
    route.replace("/dashboard/budgets")
  }

  const lastPage=()=>{
   route.back()
  }

  return (
    <div className='p-10 '>
        <div className=' flex justify-between items-center flex-col md:flex-row gap-2'>
         <div className='text-2xl font-bold flex gap-2 items-center'> <ArrowLeft onClick={lastPage} className=''/><h2>Budget & Expenses</h2></div>
         <div className="flex items-center gap-2">
           
          <EditBudget budgetInfo={budgetInfo}
          refreshData={()=>getBudgetInfo()}/>
          <AlertDialog>
  <AlertDialogTrigger asChild>
     <Button className="flex gap-2" variant="destructive"><Trash2/> Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete this Budget and all its expense list
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>deleteBudget()}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
          </AlertDialog>
         </div>
          

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-5">
          {budgetInfo?
          <BudgetItem
            budget={budgetInfo}
            /> 
            :
             <div className='h-[150px] w-full bg-slate-200 rounded-lg animate-pulse'></div>
              }    
          <Addexpenses budgetId={params.id} user={user} refreshData={()=>getBudgetInfo()}/> 
        </div>

        <div className="mt-4">
          
          <ExpenseListTable expenseList={expenseList} 
          refreshData={()=>getBudgetInfo()}/>
        </div>
      
    </div>
  )
}

export default ExpensesBoard