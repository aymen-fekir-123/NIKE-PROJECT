import React from 'react'
import Button from '../Componnets/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SupperQuality = () => {
  return (
    <section className='mt-10 flex sm:justify-between flex-wrap-reverse items-center w-full min-h-screen'>
      <div className='flex flex-col justify-center max-xl:padding-x pt-28 xl:w-2/5 items-start'>
        
        <h2 className=' mt-10 font-palanquin text-4xl font-bold'>
          <span >We Provide You </span>
          <br/>
          <span className='text-coral-red mr-3 inline-block'>Super Quality  </span> 
           Shoes
        </h2>
        <p className='my-10 font-montserrat text-xl text-slate-gray '>
          Ensuring premium comfort and style, 
          our meticulously crafted footwear is designed to elevate your experience,
          providing you with unmatched quality, 
          innovation, and a touch of elegance.
        </p>
        <p className='my-10 font-montserrat text-xl text-slate-gray '>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button iconurl={arrowRight} label={"Shoe more"} />
        
      </div>
      <div className='flex flex-1 justify-center items-center max-xl:w-full'>
        <img src={shoe8} width={500} height={450} className='object-contain'/>
      </div>
    </section>
  )
}

export default SupperQuality