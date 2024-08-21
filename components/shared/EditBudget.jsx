"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import EmojiPicker from 'emoji-picker-react'
import { Input } from '../ui/input'
import { PenBoxIcon } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { toast } from 'sonner'

function EditBudget({budgetInfo,refreshData}) {
    const [emojiIcon,setEmojiIcon]=useState(budgetInfo?.icon)
    const [openEmojiPicker,setOpenEmojiPicker]=useState(false)
    const[name,setName]=useState(budgetInfo?.name)
    const[amount,setAmount]=useState(budgetInfo?.amount)
    const {user}=useUser()

    const onUpdateBudget=async()=>{
      const result = await db.update(Budgets).set({
        name:name,
        amount:amount,
        icon:emojiIcon
      }).where(eq(Budgets.id,budgetInfo.id)).returning()

      if (result) {
        refreshData()
        toast("Budget is Updated🤭")
      }
    }

   

  return (
    <div>
         <Dialog>
  <DialogTrigger asChild>
        
  <Button><PenBoxIcon/> Edit</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Update Budget</DialogTitle>
      <DialogDescription>
        <div className="mt-5">
            <Button variant="outline"  className="text-lg"
            onClick={()=>setOpenEmojiPicker(!openEmojiPicker)}
            >{emojiIcon}</Button>

            <span className='ml-2'> Choose a Emoji</span>
            <div className="absolute z-20">
                <EmojiPicker
                open={openEmojiPicker}
                onEmojiClick={(e)=>{
                    setEmojiIcon(e.emoji)
                    setOpenEmojiPicker(false)
                }}
                />
            </div>

            <div className="mt-2">
                <h2 className="text-black font-medium my-1">Budget Name</h2>
                <Input placeHolder="e.g Home Decor"
                defaultValue={budgetInfo?.name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mt-2">
                <h2 className="text-black font-medium my-1">Budget Amount</h2>
                <Input placeHolder="e.g 200$"
                type="number"
                defaultValue={budgetInfo?.amount}
                onChange={(e)=>setAmount(e.target.value)}/>
            </div>

            
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
           <Button 
            disabled={!(name  || emojiIcon || amount)}
            onClick={()=>onUpdateBudget()}
            className="mt-2 w-full">Update Budget</Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default EditBudget