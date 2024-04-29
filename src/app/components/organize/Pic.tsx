import React from 'react'
import Image from 'next/image'
function Pic() {
  return (
    <div className='flex w-[1400px] px-10 justify-between gap-10 h-[300px] mb-2  items-center '>
      <Image src="/img/pic2.jpg" width={100} height={50} alt='pic' className='size-60 border rounded-lg shadow-2xl'/>
      <Image src="/img/pic2.jpg" width={200} height={50} alt='pic' className='size-60 border rounded-lg shadow-2xl'/>
      <Image src="/img/pic2.jpg" width={200} height={50} alt='pic'className='size-60 border rounded-lg shadow-2xl'/>
      <Image src="/img/pic2.jpg" width={200} height={50} alt='pic'className='size-60 border rounded-lg shadow-2xl'/>
    </div>
  )
}

export default Pic
