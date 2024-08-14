import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32  lg:flex  lg:items-center ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       Real Time React Dashboard making
        <strong className="font-extrabold text-red-700 sm:block"> Management Easy</strong>
      </h1>

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
 <Image
  src="/board.webp"
  alt='dashboard img'
  width={1000}
  height={700}
  className='p-4 py-4 border shadow-sm border-red-500 mb-4'
  />
</section>
  )
}
