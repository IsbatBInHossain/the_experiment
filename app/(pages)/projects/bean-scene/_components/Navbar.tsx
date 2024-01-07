import Button from './Button'

const Navbar = () => {
  return (
    <div className='   pt-5 flex justify-between items-center'>
      <h1 className=' clicker text-4xl'>Bean Scene</h1>
      <ul className=' flex font-medium gap-[60px]'>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className='flex gap-14'>
        <button>Sign Up</button>
        <Button btnName='Sign In' />
      </div>
    </div>
  )
}

export default Navbar
