import React from 'react'
import { offer } from '../assets/images'
import Button from '../Componnets/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex max-xl:flex-wrap-reverse gap-10 justify-center '>
      <div>
        <img src={offer} alt='offer' width={680} height={773} className='object-contain w-full'/>

      </div>
      <div className='flex flex-col flex-1'>
        
        <h3 className=' mt-10 font-palanquin text-4xl font-bold '>
          <span className='text-coral-red mr-3 inline-block'>Special  </span> 
          Offer
          
           
        </h3>
        <p className='my-5 font-montserrat text-lg text-slate-gray lg:max-w-lg'>
          Ensuring premium comfort and style, 
          our meticulously crafted footwear is designed to elevate your experience, 
          providing you with unmatched quality, 
          innovation, and a touch of elegance.
        </p>
        <p className='my-10 info-text lg:max-w-lg '>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='flex gap-3'>
          <Button iconurl={arrowRight} label={"Shoe more"} />
          <Button label={"learn more"} bgcolor={'bg-transparent border border-slate-gray text-slate-gray'} />

        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer