import Image from 'next/image'
import React from 'react'
import GridPattern from '../magicui/grid-pattern'
import { BorderBeam } from '../magicui/border-beam'
import { cn } from '@/lib/utils'

export const Hero = () => {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32  lg:flex  lg:items-center ">
    <div className="mx-auto max-w-xl text-center">
      <div className="flex flex-col items-center justify-center ">
       <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center'>Real Time Nextjs Dashboard </h2>
       <h2 className='text-2xl md:text-4xl lg:text-4xl font-bold text-center bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent'>Making Management Effectless</h2>
      </div>

      <p className="mt-4 sm:text-xl/relaxed">
        Fast and Secure dashboard that help you stay organized
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-400 sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/dashboard"
        >
         Dashboard
        </a>
      </div>
    </div>
     
  </div>
  <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ","mt-2"
        )}
      />
         
  
      <div className="-m-2  rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl mx-2">
      <Image  
      src="/fsdf.png"
      alt="banner image"
      width={1200}
      height={1200}
      quality={100}
      className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border "/>
      {/* effect✨ */}
      <BorderBeam size={250} duration={12} delay={9}/>
      </div>
        
              
 
</section>
  )
}
