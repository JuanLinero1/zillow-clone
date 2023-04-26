import React from 'react'

const Products = () => {
  return (
    <section className='home__products'>
      <div className="home__products--info">
        <h2 className='home__products--info-title'>Get Home Recommendations</h2>
        <h5 className='home__products--info-subtitle'>Sign in for more personalized experience</h5>
        <button className='home__products--info-button'>Sign in</button>
      </div>
      <figure className="home__products--images">
        <img src="/public/assets/images/home/GatedCarousel_Desktop.webp" alt="" />
      </figure>
    </section>
  )
}

export default Products