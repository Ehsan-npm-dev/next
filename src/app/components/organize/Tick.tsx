import React from 'react'
import Image from 'next/image'
function Tick() {
  return (
    <div className='flex p-2 w-[1300px]  justify-center mt-10 '>
      
      <div className='flex w-[1300px] h-[200px] justify-center gap-20 items-center  '>
        <Image alt='pic' src="/img/فروشگاه اینترنتی دیجی_کالا_files/37ce25c52253e48da176eff45090ab2638a4592c_1709988487.jpg" width={250} height={100}  className=' h-full border rounded-lg shadow-lg'/>
        <Image alt='pic' src="/sell/d7d23a5b.jpg" width={250} height={100} className=' h-full border rounded-lg shadow-lg'/>
        <Image alt='pic' src="/sell/d7d23a5b.jpg" width={250} height={100} className=' h-full border rounded-lg shadow-lg'/> 
         <Image alt='pic' src="/sell/d7d23a5b.jpg" width={250} height={100} className=' h-full border rounded-lg shadow-lg'/>

      </div>
    </div>
  )
}

export default Tick
