import React from 'react'
import Card from './Card'
import { hero } from './product'

function Hero() {
  return (
    <>
      <h1>this is cards through hero section</h1>
      <div className='main'>
        <Card image={hero[0].img} heading={hero[0].name} para={hero[0].para}/>
        <Card image={hero[1].img} heading={hero[1].name} para={hero[1].para}/>
        <Card image={hero[2].img} heading={hero[2].name} para={hero[2].para}/>
        <Card image={hero[3].img} heading={hero[3].name} para={hero[3].para}/>
        <Card image={hero[4].img} heading={hero[4].name} para={hero[4].para}/>
      </div>
    </>
  )
}

export default Hero
