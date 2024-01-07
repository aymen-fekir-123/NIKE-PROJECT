import React, { useState } from 'react'
import Button from '../Componnets/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../Constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Componnets/ShoeCard'
import { shoes } from '../Constants'

const Hero = () => {

  const [backgroundImg, setbackground] = useState(bigShoe1)


  return ( 
    <section id='home' className='flex w-full min-h-screen items-center xl:flex-row flex-col gap-16'>
      <div className='flex flex-col justify-center relative max-xl:padding-x pt-28 xl:w-2/5 items-start'>
        <p className='text-xl text-coral-red  font-montserrat w-full'> Our Summer Collections </p>
        <h1 className=' mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82]'>
          <span className='xl:whitespace-nowrap xl:bg-white relative z-10 pr-10'>The New Arrival </span>
          <br/>
          <span className='text-coral-red mt-3 inline-block'>Nike  </span> 
           Shoes
        </h1>
        <p className='my-10 font-montserrat text-xl text-slate-gray '>Discover Stylish Nike Arrivals, quality 
          confort, and innvation for you active life.
        </p>
        <Button iconurl={arrowRight} label={"Shoe more"} />
        <div className='flex justify-start gap-16 w-full flex-wrap'>
           {statistics.map((stat, index) => (
              <div key={index}>
                <p className='font-Palnquin text-4xl font-bold '>{stat.value}</p>
                <p className='font-montserrat text-slate-gray leading-7'>{stat.label}</p>
              </div>
           ))}
        </div>
      </div>
      <div className='xl:bg-primary xl:min-h-screen xl:py-40 flex flex-1 flex-col items-center relative justify-between w-full'>
        <img src={backgroundImg} alt='photo' width={640} height={500}/>
        <div className='flex absolute -bottom-[5%] gap-2'>
          {shoes.map((shoe, index) => (
            <ShoeCard key={index} imgurl={shoe} backgroundimg={backgroundImg} changeImg={(shoe) => (setbackground(shoe))}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero