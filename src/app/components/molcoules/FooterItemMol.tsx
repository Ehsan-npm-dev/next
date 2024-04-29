import React from 'react'
type Props = {
    img:any,
    title:String,
    url:any
}
function FooterItemMol({img , title , url}:Props) {
  return (
   
    <div className='flex flex-col justify-center items-center gap-2 '>
      <h3>{img}</h3>
      <p>{title}</p>
    </div>
   
  )
}

export default FooterItemMol
