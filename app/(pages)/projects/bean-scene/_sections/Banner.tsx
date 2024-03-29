import Image from 'next/image'
import Button from '../_components/Button'
import { SubtitleText, TitleText } from '../_components/TitleText'

const Banner = () => {
  return (
    <section
      className='bg-no-repeat bg-cover flex justify-between relative items-center -z-20 py-14 mb-20'
      style={{
        backgroundImage: 'url("/assets/Bean Scene/banner background.png")',
      }}
    >
      <div className='absolute inset-0 bg-bean-coffe bg-opacity-70 -z-10'></div>
      <div className=' px-[93px] text-white w-[800px] text-left'>
        <TitleText title='Get a chance to have an Amazing morning' />
        <SubtitleText
          subtitle='We are giving you are one time opportunity to experience a better life
          with coffee.'
        />
        <Button btnName='Order Now' btnClass=' font-bold' />
      </div>
      <Image
        src='/assets/Bean Scene/cup.png'
        width={300}
        height={467}
        alt='Coffe cup'
        className=' mr-[173px]'
      />
      <Image
        src='/assets/Bean Scene/coffee_bean.png'
        width={533}
        height={574}
        alt='Coffe bean'
        className=' absolute bottom-0 right-0 -z-10'
      />
    </section>
  )
}

export default Banner
