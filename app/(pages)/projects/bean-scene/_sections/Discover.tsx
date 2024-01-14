import Image from 'next/image'
import Button from '../_components/Button'
import { TitleText } from '../_components/TitleText'

const Discover = () => {
  return (
    <section className=' flex justify-between items-center  my-20 gap-16 relative px-24'>
      <div className=' flex flex-col gap-[30px]'>
        <TitleText title='Discover the best coffee' isCoffee />
        <p className=' text-xl leading-[34px] text-bean-ash'>
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <Button btnName='Learn More' btnClass='font-bold' />
      </div>
      <Image
        src='/assets/Bean Scene/stylized-cup-coffee.png'
        alt='stylized cup coffee image'
        width={500}
        height={484}
      />
      <Image
        src='/assets/Bean Scene/coffee_blast.png'
        alt='coffe blast'
        width={377}
        height={272}
        className=' absolute  -left-20 -bottom-64 -z-10 '
      />
    </section>
  )
}

export default Discover
