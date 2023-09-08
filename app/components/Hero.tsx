"use client";
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {
    const nextSection = document.getElementById("discover")

    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
    }
    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Busca el mueble que más te guste!
        </h1>

        <p className="hero__subtitle">
          Encuentra lo que estás buscando y el estilo que más se amolde a tu espacio
        </p>

        <CustomButton
          title="Busca tu mueble"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/mueble2.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero