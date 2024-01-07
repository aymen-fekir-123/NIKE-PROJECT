import React from 'react'
import Button from '../Componnets/Button'

const Subscribe = () => {
  return (
    <section className='flex justify-around items-center max-xl:flex-col max-xl:justify-center '>
      
      <h2 className=' mr-2 font-palanquin text-4xl font-bold max-xl:mb-10 '>
        <span className='mr-2'>Sign Up for</span>
        <span className='text-coral-red '>Updates </span> 
        <br/>
        <span>& Newsletter</span>
      </h2>

      <div className='flex items-center border border-slate-gray rounded-full gap-5 max-lg:border-none max-lg:flex-col max-lg:w-full'>
        <input type='text' placeholder='SubscribeNike.com' className='input '/>
        <Button label={'Subscribe'} />
      </div>
     
    </section>
  )
}

export default Subscribe