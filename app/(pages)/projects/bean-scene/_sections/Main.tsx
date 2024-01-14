import React from 'react'
import Discover from './Discover'
import Selections from './Selections'
import Distinction from './Distinction'
import Banner from './Banner'
import Feedback from './Feedback'
import Subscribe from './Subscribe'

const Main = () => {
  return (
    <main className='overflow-x-clip'>
      <Discover />
      <Selections />
      <Distinction />
      <Banner />
      <Feedback />
      <Subscribe />
    </main>
  )
}

export default Main
