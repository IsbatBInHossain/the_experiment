import Image from 'next/image'
import { SubtitleText, TitleText } from '../_components/TitleText'

const Subscribe = () => {
  return (
    <section
      className='bg-no-repeat bg-cover flex flex-col text-center justify-between overflow-y-visible relative items-center -z-20 py-20'
      style={{
        backgroundImage: 'url("/assets/Bean Scene/banner background.png")',
      }}
    >
      <div className='absolute inset-0 bg-bean-coffe bg-opacity-70 -z-10'></div>
      <TitleText title='Subscribe to get the Latest News' />
      <SubtitleText subtitle='Don’t miss out on our latest news, updates, tips and special offers' />
      <div className='flex items-center relative mt-7'>
        <input
          type='text'
          className='w-[642px] py-4 border rounded-l px-4'
          placeholder='Enter your email'
        />
        <button className='bg-bean-buttercream font-bold text-bean-coffe px-4 py-[17px] rounded-r absolute right-0'>
          Subscribe
        </button>
      </div>
      <Image
        src='/assets/Bean Scene/pngwing 1.png'
        alt='coffee splash'
        width={297}
        height={358}
        className='scale-x-[-1] absolute -right-0 top-28 z-10'
      />
      <Image
        src='/assets/Bean Scene/pngwing 1.png'
        alt='coffee splash'
        width={297}
        height={358}
        className=' absolute left-0 top-28 z-10'
      />
    </section>
  )
}

export default Subscribe
