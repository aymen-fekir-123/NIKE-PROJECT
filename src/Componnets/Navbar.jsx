import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../Constants'
import { hamburger } from '../assets/icons'

const Navbar = () => {
  return (
    <header className='padding-x py-16 z-10 w-full absolute '>
        <nav className='flex justify-evenly items-center max-container'>
          <a href='/'>
            <img src={headerLogo} alt='logo'
            width={140}
            height={60}/>
          </a>
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((link) => (
              <li key={link.label}><a href={link.href} className='font-montserrat text-slate-gray text-xl'>{link.label}</a></li>
            ))}
          </ul>
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt='photo' width={30} height={30}/>
          </div>

        </nav>
    </header>
  )
}

export default Navbar