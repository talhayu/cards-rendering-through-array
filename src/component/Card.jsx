import React from 'react'

function Card(props) {
  return (
    <div className='card'>
 
      <img src={props.image} alt='' />
      <h1>{props.heading}</h1>
      <p>{props.para}</p>

    </div>
  )
}

export default Card
