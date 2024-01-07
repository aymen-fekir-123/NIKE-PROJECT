import React from 'react'

const Button = ({iconurl, label, bgcolor}) => {
  return (
    <button className={`flex px-7 py-4 justify-center items-center rounded-full text-lg leading-normal border ${!bgcolor && `bg-coral-red border-coral-red text-white`} ${bgcolor} font-palanquin text-lg gap-2  max-w-[200px]`}>
        {label}
        {iconurl && <img src={iconurl} alt='icon'  className='w-5 h-5 rounded-full'/>}
    </button>
  )
}

export default Button