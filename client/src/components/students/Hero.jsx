import React from 'react'
import { assets } from '../../assets/assets'
import SearcheBar from './SearcheBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-centerw-full md:pt-36 pt-20 
    px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md: text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>
        <span className='text-blue-600'>
          Propulsez votre apprentissage avec l'IA
          </span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' />
        </h1>
        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>
          Edemy utilise l'intelligence artificielle pour créer des parcours d'apprentissage personnalisés qui s'adaptent
           à votre rythme et à votre style d'apprentissage, vous permettant d'atteindre vos objectifs plus rapidement.
        </p>

        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
          Edemy utilise l'intelligence artificielle pour créer des parcours d'apprentissage personnalisés qui s'adaptent
           à votre rythme et à votre style d'apprentissage, vous permettant d'atteindre vos objectifs plus rapidement.
        </p>
        <SearcheBar />
    </div>
  )
}

export default Hero
