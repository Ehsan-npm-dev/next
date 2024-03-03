
"use client"
import React from 'react'
import {cards} from "../../config"
import CardItemMol from '../molcoules/CardItemMol'
function Shop() {
  return (
    <div className='w-[full]  flex justify-center items-center  gap-4'>
      {cards.map((i)=>(

<CardItemMol  {...i}  />
      ))}
    </div>
  )
}

export default Shop
