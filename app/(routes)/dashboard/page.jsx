"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/dbConfig'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema'
import CardInfoDashboard from '@/components/shared/CardInfoDashboard';
import BarChartDash from '@/components/shared/BarChartDash';
import BudgetItem from '../../../components/shared/BudgetItem';
import ExpenseListTable from '@/components/shared/ExpenseListTable';
import PleaseSignIn from '@/components/shared/PleaseSignIn';
import PleaseAddData from '@/components/shared/PleaseAddData';

 const Dashboard = () => {
  const {user}=useUser()
  const[budgetList,setBudgetList]=useState([])
  const[expenseList,setExpenseList]=useState([])
  

  useEffect(() => {
  user && getBudgetList()
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
    getAllExpenses()
    
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
    
      <div className="p-8">
        <div className="flex gap-2">
          <h2 className='font-bold text-xl md:text-2xl'>Welcome, </h2>
          <h2  className='font-bold text-xl text-red-600 flex items-center md:text-2xl'>{user?.fullName} <span>🤠</span> </h2>
        </div>
        <p className='text-lg text-muted-foreground mt-2'>Here whats happening...</p>

        {!user&& <div>
          <PleaseSignIn/>
        </div>}

        {user&& budgetList.length<1 && (<div>
          <PleaseAddData/>
        </div>)}

        <CardInfoDashboard budgetList={budgetList}/>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-6">
              <div className="md:col-span-2 ">
                <BarChartDash budgetList={budgetList} />
                <ExpenseListTable expenseList={expenseList} refreshData={()=>getBudgetList()}/>
              </div>
              <div className="gap-2">
                <h2 className='font-bold text-lg mt-2'>Latest Budgets</h2>
               {budgetList.map((budget,index)=>(
                <BudgetItem budget={budget} key={index}/>
               ))}
              </div>
        </div>
      </div>
   
  )
}

export default Dashboard;
