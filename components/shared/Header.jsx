import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export const Header = () => {
  
  return (
    <div className='p-5 flex justify-between items-center border-b shadow-sm'>
        <Image
        src="/next.svg"
        alt='logo'
        width={160}
        height={160}
        />

      <div className='flex w-32 justify-end gap-3'>
      {/* when user is logOut show this */}
      <SignedOut> 
        <Button asChild className='rounded-full' size="lg">
         <Link href={"/sign-in"}>Sign 4 Free</Link>
        </Button>
      </SignedOut>
     {/*when user signed in  */}
    
      <SignedIn>
        <UserButton afterSignOutUrl='/'/>
      </SignedIn>

    </div>
    </div>
  )
}
