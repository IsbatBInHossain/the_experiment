import Button from '../_components/Button'
import DistinctionCard from '../_components/DistinctionCard'
import { TitleText, SubtitleText } from '../_components/TitleText'
import { distinctions } from '../data'

const Distinction = () => {
  return (
    <section className=' py-20 flex flex-col items-center relative px-24'>
      <TitleText title='Why are we diffrent?' isCoffee />
      <SubtitleText
        subtitle='We don’t just make your coffee, we make your day!'
        isAsh
      />
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
    </section>
  )
}

export default Distinction
