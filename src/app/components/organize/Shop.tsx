
"use client"
import React from 'react'
import {cards} from "../../config"
import CardItemMol from '../molcoules/CardItemMol'
function Shop() {
  return (
    <div className='  h-[110px] flex justify-center items-center gap-2'>
      {cards.map((i)=>(

<CardItemMol  {...i}  />
      ))}
    </div>
  )
}

export default Shop
