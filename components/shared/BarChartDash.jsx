import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDash({budgetList}) {
  return (
    <div className='border p-5 rounded-lg'>
        <h2 className="font-bold text-lg">Activity</h2>
        <ResponsiveContainer width="80%" height={300}>
            <BarChart data={budgetList} 
        margin={{
            top:5,
            right:2,
            left:2,
            bottom:2
        }}
        >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name"/>
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="totalSpend" fill="#af3131" stackId="a"/>
  <Bar dataKey="amount" fill="#ffbebe" stackId="a"/>
</BarChart>
        </ResponsiveContainer>
      
    </div>
  )
}

function XAxiss({ dataKey = 'name', ...rest }) {
    return <XAxis dataKey={dataKey} {...rest} />;
  }
 

export default BarChartDash