"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/dbConfig'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema';
import AreaChartExpense from '@/components/shared/AreaChartExpense'
import ExpenseListTable from '@/components/shared/ExpenseListTable';
import PleaseAddData from '@/components/shared/PleaseAddData';


function page() {
  const {user}=useUser()
  const[budgetList,setBudgetList]=useState([])
  const[expenseList,setExpenseList]=useState([])
  

  useEffect(() => {
  user && getAllExpenses()
  }, [user]);
  
  const getBudgetList=async()=>{
    const result= await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql `sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql `count(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
    .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id))
    setBudgetList(result)  
  }

  const getAllExpenses=async()=>{
    const result = await db.select({
      id:Expenses.id,
      name:Expenses.name,
      amount:Expenses.amount,
      createdAt:Expenses.createdAt
  
    }).from(Budgets)
    .rightJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress.emailAddress))
    .orderBy(desc(Expenses.id))
  
    setExpenseList(result)
    }

  return (
    <div className='mt-8'>
    
      <div className="">
        <AreaChartExpense expenseList={expenseList} />
        <ExpenseListTable expenseList={expenseList} refreshData={()=>getAllExpenses()}/>
      </div>
    
    </div>
  )
}

export default page