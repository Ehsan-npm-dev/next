
"use client"

import React from 'react'
import LinkItemMol from '../molcoules/LinkItemMol'
import {routes} from "../../assets/config"
function Link() {

  return (
    <div className='flex justify-center pt-2 w-[full] gap-1 items-center   '>
      {routes.map((i)=>(

        <LinkItemMol {...i} />
      ))}
    </div>
  )
}

export default Link
