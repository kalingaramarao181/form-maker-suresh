import React from 'react'
import './Home.css'
const Home = () => {
  return (

    <div className='containerhome'>
      <div className='home-content'>
      <h1 className='home-main-heading'> STREAMLINED <span className='home-span'>FORMS</span> & ELEMENTS FOR DIVERSE CATEGORIES</h1>
      <p className='home-main-para'>we meticulously craft diverse form designs and elements tailored for various sectors, including education, employee management, sports, and more. Each category receives specialized attention, ensuring intuitive and efficient user experiences across the board."</p>
      <input type='text' placeholder='Enter Your Email' className='home-input' />
      <button className='home-button'> submit</button>
    </div>
    <div>
      <img className='main-image' src='https://www.zohowebstatic.com/sites/default/files/workdrive/workdrve-mockup--1-.png' alt='homemainimage'/>
    
</div>

    </div>
  )
}

export default Home