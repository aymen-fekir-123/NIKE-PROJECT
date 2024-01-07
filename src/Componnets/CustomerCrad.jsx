import React from 'react'
import { star } from '../assets/icons'

const CustomerCrad = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        
        <img src={imgURL} alt='photo1 ' className='rounded-full ' width={75} height={75}/>
       
        <p className='text-slate-gray text-xl max-lg:text-lg max-lg:leading-normal mt-5 text-center'>{feedback}</p>
        <div className='flex mt-4 gap-2'>
            <img src={star} width={24} height={24}/>
            <p className='text-xl text-slate-gray '>({rating})</p>
        </div>
        <h5 className='font-palanquin text-xl font-bold max-lg:text-lg  mt-5'>{customerName}</h5>
    </div>
  )
}

export default CustomerCrad