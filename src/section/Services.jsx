import React from 'react'
import { services } from '../Constants'
import ServiceCard from '../Componnets/ServiceCard'

const Services = () => {
  return (
    <section className='flex justify-center gap-10 flex-wrap'>
      
      {services.map((serv) =>(
        <ServiceCard key={serv.label} {...serv}/>
      ))}
    
    </section>
  )
}

export default Services