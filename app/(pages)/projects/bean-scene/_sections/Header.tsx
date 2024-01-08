import HeroCard from '../_components/HeroCard'
import Navbar from '../_components/Navbar'

const Header = () => {
  return (
    <div className=' bg-bean-scene h-full bg-no-repeat bg-cover px-24 flex flex-col gap-28 text-white'>
      <Navbar />
      <HeroCard />
    </div>
  )
}

export default Header
