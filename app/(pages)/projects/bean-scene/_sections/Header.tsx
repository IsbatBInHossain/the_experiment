import React from 'react'
import Navbar from '../_components/Navbar'
import HeroCard from '../_components/HeroCard'

const Header = () => {
  return (
    <header
      className='h-[768px] bg-no-repeat bg-cover flex flex-col px-24 gap-28 text-white'
      style={{ backgroundImage: 'url("/assets/Bean Scene/hero.png")' }}
    >
      <Navbar />
      <HeroCard />
    </header>
  )
}

export default Header
