import Image from 'next/image'
import Button from '../_components/Button'

const Discover = () => {
  return (
    <div className=' flex justify-between items-center px-24 mt-20 gap-16'>
      <div className=' flex flex-col gap-[30px]'>
        <h3 className=' text-bean-coffe text-[54px] font-bold'>
          Discover the best coffee
        </h3>
        <p className=' text-xl leading-[34px] text-bean-ash'>
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <Button btnName='Learn More' btnClass=' font-bold' />
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
        width={498}
        height={272}
        className=' absolute'
      />
    </div>
  )
}

export default Discover
