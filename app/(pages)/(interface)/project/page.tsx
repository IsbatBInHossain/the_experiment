import Link from 'next/link'

const Projects = () => {
  return (
    <div className=' h-full font-cyberpunk text-center flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-5xl'>Projects</h1>
      <ul className=' flex flex-col gap-4 text-xl'>
        <Link href='/projects/bean-scene'>Bean Scene</Link>
      </ul>
    </div>
  )
}

export default Projects
