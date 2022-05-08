import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [cool, setCool] = useState(1)

  return (
    <div>
        <button onClick= {()=>{setCool(cool+1)}}>
        </button>
        <h1>{cool}</h1>
    </div>
  )
}

export default Home