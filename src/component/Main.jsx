import React from 'react'
import Card from './Card'
import { main } from './product'

function Main() {
  return (
    <>  
        <h1>this is cards through map method</h1>
      <div className='main'>
            {
                main.map((a, b)=>{
                    return(
                        <Card image={a.img}  heading={a.name} para={a.para} />
                    )
                })
            }
    </div>
    </>

  )
}

export default Main
