import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../Constants'
import { footerLinks } from '../Constants'

const Footer = () => {
  return (
    <section id='footer' className='flex gap-20 max-lg:flex-wrap'>
      <div className='flex flex-col'>
        <a href='/'>
          <img src={footerLogo} alt='logo' width={150} height={150} />
        </a>
        <p className='font-palanquin text-white-400 leading-7 sm:max-w-sm mt-7'>
          Get shoes ready for the new term at your nearest Nike store.
          Find Your perfect Size In Store. Get Rewards
        </p>
        <div className='flex justify-start gap-4 mt-7'>
          {socialMedia.map((social, index) => (
            <div key={index} className='rounded-full felx justify-center items-center bg-white p-3'>
              <img src={social.src} alt={social.alt} className='object-contain' />
            </div>
          ))}
        </div>
        
      </div>
      <div className='flex justify-between flex-wrap lg:max-w-[70%] gap-10'>
        {footerLinks.map((footer, index) => (
          <div key={index} >
            <h5 className='text-white text-3xl font-semibold'>
              {footer.title}
            </h5>
            <ul className='flex gap-4 flex-col'>
              {footer.links.map((link, index) => (
                <li key={index} className='text-white-400'>
                  <a href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Footer