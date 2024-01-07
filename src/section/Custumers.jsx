import React from 'react'
import { reviews } from '../Constants'
import CustomerCrad from '../Componnets/CustomerCrad'
const Custumers = () => {
  return (
    <section className='flex flex-col justify-center items-center w-full '>
      <div className='w-full text-center'>
        <h3 className=' mt-10 font-palanquin text-4xl font-bold max-sm:text-lg'>
          <span className=''>What Our  </span>
      
          <span className='text-coral-red mr-3 '>Custumer  </span> 
          Say? 
        </h3>
        <p className='my-10 font-montserrat text-xl text-slate-gray max-sm:info-text'>
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
      </div>
      <div className='flex max-lg:flex-wrap justify-center gap-10 '>
        {reviews.map((rev) => (
          <CustomerCrad key={rev.customerName} {...rev}/>
        ))}
      </div>
    </section>
  )
}

export default Custumers