import React from 'react'
import { products } from '../Constants'
import ProdCard from '../Componnets/ProdCard'

const Populairproduct = () => {
  return (
    <section className='mt-10'>
      <div className='max-w-[50%]'>
        <h1 className='font-palanquin text-4xl font-bold'>
          <span className=''>Our </span>
          
          <span className='text-coral-red  '> Poplair  </span> 
          product
        </h1>
        <p className='my-10 font-montserrat text-xl text-slate-gray '>
          Experience top-notch quality and style with our sought-after selections.
          Discover a world of comfort, design, and value
        </p>
      </div>
      <div className='grid xl:grid-cols-4 base:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:justify-center justify-start items-center gap-6'>
        {products.map((prod) => (
          <ProdCard key={prod.price} {...prod}/>
        ))}
      </div>
    </section>
  )
}

export default Populairproduct