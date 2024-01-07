import React from 'react'
import { star } from '../assets/icons'

const ProdCard = ({imgURL, name, price}) => {
  return (
    <div className='felx flex-col justify-start max-w-[300px]'>
        <div className='rounded-xl bg-cover bg-card'>
            <img src={imgURL} />
        </div>
        <div className='flex gap-2.5 mt-5 '>
            <img src={star} width={24} height={24} className='object-contain'/> 
            <p className='text-slate-gray text-2xl'>(4.5)</p>
        </div>
        
        <h4 className='mt-5 font-montserrat font-semibold text-2xl'>{name}</h4>
        <p className='text-slate-gray text-2xl mt-5'>{price}</p>
        
    </div>
  )
}

export default ProdCard