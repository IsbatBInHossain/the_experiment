import HeroCard from './_components/HeroCard'
import Navbar from './_components/Navbar'
import Discover from './_sections/Discover'

// Design By www.figma.com/@thisuix571

const Page = () => {
  return (
    <div className=' h-[768px]'>
      <header className=' bg-bean-scene h-full bg-no-repeat bg-cover flex flex-col px-24 gap-28 text-white'>
        <Navbar />
        <HeroCard />
      </header>
      <main className='px-24'>
        <Discover />
      </main>
    </div>
  )
}

export default Page
