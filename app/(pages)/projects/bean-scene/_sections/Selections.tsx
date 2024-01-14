import Image from 'next/image'
import CoffeCard from '../_components/CoffeCard'
import { coffes } from '../data'

const Selections = () => {
  return (
    <div className=' mt-60 pb-20 flex flex-col items-center relative px-24'>
      <h3 className='text-bean-coffe text-[54px] font-bold'>
        Enjoy a new bland of Coffe Style
      </h3>
      <p className='text-xl leading-[34px] text-bean-ash'>
        Explore all flavours of coffee with us. There is always a new cup worth
        experiencing
      </p>
      <div className=' flex justify-between w-full mt-8'>
        {coffes.map(coffe => (
          <CoffeCard coffe={coffe} key={coffe.name} />
        ))}
      </div>
      <Image
        src='/assets/Bean Scene/coffee_blast.png'
        alt='coffe blast'
        width={377}
        height={272}
        className=' absolute  -right-20 -bottom-56 -z-10 scale-x-[-1]'
      />
    </div>
  )
}

export default Selections
