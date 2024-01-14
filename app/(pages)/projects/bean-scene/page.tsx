import HeroCard from './_components/HeroCard'
import Navbar from './_components/Navbar'
import Banner from './_sections/Banner'
import Discover from './_sections/Discover'
import Distinction from './_sections/Distinction'
import Selections from './_sections/Selections'

// Design By www.figma.com/@thisuix571

const Page = () => {
  return (
    <div className=' h-[768px] mx-auto max-w-[1416px]'>
      <header
        className='h-full bg-no-repeat bg-cover flex flex-col px-24 gap-28 text-white'
        style={{ backgroundImage: 'url("/assets/Bean Scene/hero.png")' }}
      >
        <Navbar />
        <HeroCard />
      </header>

      <main className='mx-auto'>
        <Discover />
        <Selections />
        <Distinction />
        <Banner />
      </main>
    </div>
  )
}

export default Page
