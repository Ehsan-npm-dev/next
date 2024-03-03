
"use client"

import React from 'react'
import LinkItemMol from '../molcoules/LinkItemMol'
import {routes} from "../../assets/config"
function Link() {

  return (
    <div className='flex justify-center gap-2 items-center  '>
      {routes.map((i)=>(

        <LinkItemMol icon={i.icon} title={i.title} url={i.url}  />
      ))}
    </div>
  )
}

export default Link