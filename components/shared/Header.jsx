import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export const Header = () => {
  
  return (
    <div className='p-5 flex justify-between items-center  mx-auto max-w-screen-xl px-4 bg-gray-50  sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50 '>
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
         <Link href={"/sign-in"}>Try for Free</Link>
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
