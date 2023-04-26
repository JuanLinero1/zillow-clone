import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Card from './components/card'
import information from './components/cardInformation'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Products />  
        <Card information={information} />
    </div>
  )
}

export default Home