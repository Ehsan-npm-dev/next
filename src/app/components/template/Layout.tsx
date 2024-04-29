import React from 'react'
import Header from '../organize/Header'
function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <div className='flex flex-col w-[1300px]  justify-center'>
<Header/>
<div className='border w-[1400px] pt-4 rounded-xl'>
{children}
</div>
      </div>

    </div>
  )
}

export default Layout
