import Image from 'next/image'
import React from 'react'

function CardPhotoExpense() {
  return (
    <div className='border  rounded-lg flex flex-col items-center opacity-85'>
        <h2 className='text-xl font-bold z-50 -mb-6'>its a Good day to</h2>
        <Image src="/daliee.jpg" alt='sunny' width={400} height={300}/>
        <h2 className='text-xl font-bold z-50 -mt-6'>Work on your self</h2>
    </div>
  )
}

export default CardPhotoExpense