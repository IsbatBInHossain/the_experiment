import Button from './Button'

const HeroCard = () => {
  return (
    <div className=' flex flex-col font-medium w-1/2 pr-14'>
      <p className=' text-[22px]'>We’ve got your morning covered with</p>
      <h2 className=' clicker text-[220px]'>Coffee</h2>
      <p className=' leading-8 text-base tracking-normal'>
        It is best to start your day with a cup of coffee. Discover the best
        flavours coffee you will ever have. We provide the best for our
        customers.
      </p>
      <Button btnName='Order Now' btnClass=' mt-6 font-bold' />
    </div>
  )
}

export default HeroCard
