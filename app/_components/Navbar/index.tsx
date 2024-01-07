import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='  font-blade-runner text-3xl  '>
      <ul className=' flex gap-10 text-neon-orange text-[#FFA732] mb-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/project'>Projects</Link>
      </ul>
    </div>
  )
}

export default Navbar
