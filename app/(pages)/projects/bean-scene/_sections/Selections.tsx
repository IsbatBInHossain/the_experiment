import Image from 'next/image'
import CoffeCard from '../_components/CoffeCard'
import { coffes } from '../data'
import { TitleText, SubtitleText } from '../_components/TitleText'

const Selections = () => {
  return (
    <section className=' mt-60 pb-20 flex flex-col justify-center items-center relative px-24'>
      <TitleText title='Enjoy a new bland of Coffe Style' isCoffee />
      <SubtitleText
        subtitle='Explore all flavours of coffee with us. There is always a new cup worth
        experiencing'
        isAsh
      />
      <div className=' flex justify-between w-full mt-8'>
        {coffes.map(coffe => (
          <CoffeCard coffe={coffe} key={coffe.name} />
        ))}
      </div>
      <Image
        src='/assets/Bean Scene/coffee_blast.png'
        alt='coffee blast'
        width={377}
        height={272}
        className='scale-x-[-1] absolute -right-20 -bottom-56 -z-10'
      />
    </section>
  )
}

export default Selections
