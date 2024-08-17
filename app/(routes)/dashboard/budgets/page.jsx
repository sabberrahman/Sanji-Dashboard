import BudgetList from '@/components/shared/BudgetList'
import React from 'react'

function Budgets() {
  return (
    <div className='pt-10'>
      <h2 className='font-bold text-3xl'>My Budget</h2>
      <BudgetList/>
    </div>
  )
}

export default Budgets