import React from 'react'
import Image from 'next/image'
function DetailMol() {
  return (
    <div className='flex w-[1150px]  flex-row justify-center  items-center pt-6'>


      <div className='flex justify-center items-center'>
      <div className='flex w-[400px] flex-col  justify-center  rounded-md p-2 '>
<p className='text-xl font-mono font-semibold text-black flex flex-row-reverse'>با دیجی‌کالا</p>
<a href="" className='flex flex-row-reverse p-1'>اتاق خبر دیجی کالا</a>
<a href="" className='flex flex-row-reverse p-1'>فروش در دیجی کالا</a>
<a href="" className='flex flex-row-reverse p-1'>فرصت شغلی</a>
<a href="" className='flex flex-row-reverse p-1'>گزارش تخلف</a>
      </div>
      <div className='flex w-[400px]  text-wrap flex-col justify-center  rounded-md p-2 '>
<p className='text-xl font-mono font-semibold text-black  flex flex-row-reverse'>خدمات مشتریان</p>
<a href="" className='flex flex-row-reverse p-1'>اتاق خبر دیجی کالا</a>
<a href="" className='flex flex-row-reverse p-1'>فروش در دیجی کالا</a>
<a href="" className='flex flex-row-reverse p-1'>فرصت شغلی</a>
<a href="" className='flex flex-row-reverse p-1'>گزارش تخلف</a>
      </div>

      <div className='flex w-[400px]  text-wrap flex-col justify-center pb-8  rounded-md p-2 '>
<p className='text-xl  font-mono font-semibold text-black text-center  flex flex-row-reverse'>راهنمای خرید از دیحی کالا</p>
<a href="" className='flex flex-row-reverse p-1'>نحوه ثبت سفارش</a>
<a href="" className='flex flex-row-reverse p-1'>رویه ارسال سفارش</a>
<a href="" className='flex flex-row-reverse p-1'>شیوه های پرداخت</a>

      </div>


      <div className='flex w-[400px]  text-wrap flex-col gap-2  justify-center  p-2 '>
        <p className='text-xl  font-mono font-semibold text-black text-center  flex flex-row-reverse'>!همراه ما باشید</p>
        <div className='flex  gap-5 flex-row-reverse '>
        <Image src="/footer/instagram.png"  alt="icon" width={40} height={40}/>
        <Image src="/footer/linkedin.png"  alt="icon" width={40} height={40}/>
        <Image src="/footer/twitter.png"  alt="icon" width={40} height={40}/>
        <Image src="/footer/apart.png"  alt="icon" width={40} height={40}/>
        </div>
        <div className='flex flex-col justify-center gap-2'>
        
        <p className='flex '>با ثبت ایمیل و از جدیدترین تخفیف ها با خبر شوید </p>
        <div className='flex flex-row-reverse  justify-center gap-4'>
          <input placeholder='ایمیل شما' type='email' className='border px-2 w-full rounded-lg flex-row-reverse text-black'/>
          <button className='border p-2 rounded-lg'>ثبت</button>
        </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default DetailMol
