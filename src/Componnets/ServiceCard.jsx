import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='px-10 py-10 flex flex-col items-start shadow-3xl sm:w-[350px] sm:h-[300px] rounded-2xl'>
        <div className='w-10 h-10 rounded-full bg-coral-red flex justify-center items-center'>
            <img src={imgURL} alt='imgphoto'/>
        </div>
        <h4 className='mt-5 text-2xl font-palanquin font-bold'>{label}</h4>
        <p className='mt-10 text-lg font-montserrat text-slate-gray '>{subtext}</p>
    </div>
  )
}

export default ServiceCard