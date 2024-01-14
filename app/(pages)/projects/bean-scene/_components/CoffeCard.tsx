import Image from 'next/image'
import Button from './Button'

interface Coffee {
  name: string
  coffePercent: number
  milkPercent: number
  price: string
  image: string
}

const CoffeCard = ({ coffe }: { coffe: Coffee }) => {
  return (
    <div className=' flex flex-col items-center w-fit'>
      <Image src={coffe.image} width={280} height={222} alt={coffe.name} />
      <h4 className=' text-bean-coffe text-[22px] capitalize font-bold mt-4'>
        {coffe.name}
      </h4>
      <p>
        Coffe {coffe.coffePercent}% | Milk {coffe.milkPercent}%
      </p>
      <p className=' text-bean-coffe text-lg font-bold'>${coffe.price}</p>
      <Button btnName='Order Now' btnClass='font-bold mt-[18px]' />
    </div>
  )
}

export default CoffeCard
