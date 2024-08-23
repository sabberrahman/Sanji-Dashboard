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

function PleaseSignIn() {
  return (
    <div>
        <div className='h-96 flex flex-col justify-center items-center'>
         <Card className="w-[380px]" >
      <CardHeader>
        <CardTitle>⚠ Warning</CardTitle>
        <CardDescription>you must sign-in in order to get started </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Link href="/sign-in">
       
        <div className=" flex items-center space-x-4 rounded-md border p-4 hover:shadow-lg hover:border-red-400 justify-center bg-gray-900">
         <h1 className='text-xl text-center font-semibold text-gray-200'>Please Sign In</h1>
          
          
        </div>
        </Link>
        
        </CardContent>
        </Card>
    </div>
    </div>
  )
}

export default PleaseSignIn