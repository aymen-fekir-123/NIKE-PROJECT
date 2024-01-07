import React from 'react'
import {Hero, Populairproduct, SpecialOffer, Subscribe, SupperQuality, Services,  Custumers, Footer} from './section'
import Navbar from './Componnets/Navbar'
const App = () => {
  return (
    <main className='relative'>
      <Navbar/>
      <section className='wide:padding-r xl:padding-l padding-b '><Hero/></section>
      <section className='padding'><Populairproduct/></section>
      <section className='padding'><SupperQuality/></section>
      <section className='padding'><Services/></section>
      <section className='padding'><SpecialOffer/></section>
      <section className='bg-pale-blue  padding'><Custumers/></section>
      <section className='padding-x sm:py-32 py-16 w-full'><Subscribe/></section>
      <section className='bg-black padding'><Footer/></section>
      
     

     
    </main>
  )
}

export default App