import Discover from './_sections/Discover'
import Header from './_sections/Header'

// Design By www.figma.com/@thisuix571

const Page = () => {
  return (
    <div>
      <header className=' h-[768px]'>
        <Header />
        <Discover />
      </header>
    </div>
  )
}

export default Page
