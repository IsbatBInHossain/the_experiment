import Button from '../_components/Button'
import DistinctionCard from '../_components/DistinctionCard'
import { distinctions } from '../data'

const Distinction = () => {
  return (
    <div className=' py-20 flex flex-col items-center relative px-24'>
      <h3 className='text-bean-coffe text-[54px] font-bold'>
        Why are we diffrent?
      </h3>
      <p className='text-xl leading-[34px] text-bean-ash'>
        We don’t just make your coffee, we make your day!
      </p>
      <div className=' flex justify-between w-full my-8'>
        {distinctions.map((distinction, idx) => (
          <DistinctionCard distinction={distinction} key={distinction.title} />
        ))}
      </div>
      <p className='text-xl leading-[34px] text-bean-ash'>
        Great ideas start with great coffee, Lets help you achieve that
      </p>
      <h4 className='text-bean-coffe text-[30px] font-bold'>
        Get started today.
      </h4>
      <Button btnName='Join us' btnClass=' font-bold mt-6' />
    </div>
  )
}

export default Distinction
