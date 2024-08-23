import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from 'next/link'
import { Button } from '../ui/button'

function PleaseAddData() {
  return (
    <div>
        <div className='h-96 flex flex-col justify-center items-center'>
         <Card className="w-[380px]" >
      <CardHeader>
        <CardTitle>⚠ Warning: Add budget</CardTitle>
        <CardDescription>you must create a budget to use dashboard functions </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Link href="/dashboard/budgets">
       
        <div className=" flex items-center space-x-4 rounded-md border p-4 hover:shadow-lg hover:border-red-400 justify-center bg-gray-900">
         <h1 className='text-xl text-center font-semibold text-gray-200'>Add Budget Now</h1>
          
          
        </div>
        </Link>
        
        </CardContent>
        </Card>
    </div>
    </div>
  )
}

export default PleaseAddData