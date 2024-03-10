

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Order() {
  return (
    <div className='flex w-full h-[300px] justify-center items-center  '>
        <div className=' flex bg-red-400 w-[1050px] rounded-xl h-[270px] mb-4 justify-center gap-2 p-2  '>
          

<div className='bg-white w-[200px] rounded-md flex flex-col items-center gap-2  justify-center'>
<Image src="/sell/K750.jpg" width={100} alt='pic'
 height={20} className='size-36'/>
 <div className='flex justify-around items-center gap-6'>

<p> تومان 2,459,000 </p>
<small className='bg-red-400 p-2 text-white rounded-lg'>5%</small>
 </div>

 <p className='text-gray-300 items-center  flex justify-center mr-24'>4,095,000</p> 

</div>
<div className='bg-white w-[200px] rounded-md flex flex-col items-center gap-2  justify-center'>
<Image src="/sell/gt.jpg" width={100} alt='pic'
 height={20} className='size-36'/>
 <div className='flex justify-around items-center  gap-6'>

<p> تومان 2,459,000 </p>
<small className='bg-red-400 p-2 text-white rounded-lg'>5%</small>
 </div>

 <p className='text-gray-300 items-center  flex justify-center mr-24'>4,095,000</p> 

</div>
<div className='bg-white w-[200px] rounded-md flex flex-col items-center gap-2  justify-center'>
<Image src="/sell/K750.jpg" width={100} alt='pic'
 height={20} className='size-36'/>
 <div className='flex justify-around items-center gap-6'>

<p> تومان 2,459,000 </p>
<small className='bg-red-400 p-2 text-white rounded-lg'>5%</small>
 </div>

 <p className='text-gray-300 items-center  flex justify-center mr-24'>4,095,000</p> 

</div>
<div className='bg-white w-[200px] rounded-md flex flex-col items-center gap-2  justify-center'>
<Image src="/sell/gt.jpg" width={100} alt='pic'
 height={20} className='size-36'/>
 <div className='flex justify-around items-center gap-6'>

<p> تومان 2,459,000 </p>
<small className='bg-red-400 p-2 text-white rounded-lg'>5%</small>
 </div>

 <p className='text-gray-300 items-center  flex justify-center mr-24'>4,095,000</p> 

</div><div className='flex flex-col w-[200px] rounded-lg bg-red-300 justify-center items-center'>
<h3 className='p-2 text-white justify-center items-center font-bold text-2xl w-[75px]'>پیشنهاد شگفت انگیز</h3>
<Image src="/menu/Box.png" width={100} height={25} alt='pic'/>
<Link href="">

<h2 className='text-md text-white font-bold '> مشاهده همه</h2>
</Link>
</div>




        </div>
      
    </div>
  )
}

export default Order
