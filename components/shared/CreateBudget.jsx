"use client"
import { BadgePoundSterling, CopyPlusIcon, ImagePlus, PlusSquareIcon } from 'lucide-react'
import React, { useState } from 'react'
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
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { toast } from 'sonner'
  

function CreateBudget({refreshData}) {
    const [emojiIcon,setEmojiIcon]=useState("😋")
    const [openEmojiPicker,setOpenEmojiPicker]=useState(false)
    const[name,setName]=useState()
    const[amount,setAmount]=useState()

    const {user}=useUser()

    const onCreateBudget=async()=>{
      const result = await db.insert(Budgets)
      .values({
        name:name,
        amount:amount,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        icon:emojiIcon
      }).returning({insertedId:Budgets.id})

      if(result){
        refreshData();
         toast("New Budget is Created!✨")
      }
    }

  return (
    <div>
        <Dialog>
  <DialogTrigger asChild>
        <div className="flex items-center flex-col p-10 bg-slate-100 rounded-md border-dashed cursor-pointer hover:shadow-md">
            <h2 className='text-3xl'><CopyPlusIcon/></h2>
            <h2>Create New Budget</h2>
        </div>

  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Budget</DialogTitle>
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
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mt-2">
                <h2 className="text-black font-medium my-1">Budget Amount</h2>
                <Input placeHolder="e.g 200$"
                type="number"
                onChange={(e)=>setAmount(e.target.value)}/>
            </div>

            
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
           <Button 
            disabled={!(name && amount)}
            onClick={()=>onCreateBudget()}
            className="mt-2 w-full">Create Budget</Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default CreateBudget