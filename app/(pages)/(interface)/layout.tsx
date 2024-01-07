import React from 'react'
import Navbar from '../../_components/Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' bg-void-landscape bg-no-repeat bg-cover p-16 h-screen flex flex-col'>
      <Navbar />
      <main className='border shadow-neon-orange text-neon-orange background-tint text-orange-400 border-punk-yellow h-full'>
        {children}
      </main>
    </div>
  )
}

export default layout
