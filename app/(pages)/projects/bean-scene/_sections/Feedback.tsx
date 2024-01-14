import Image from 'next/image'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Feedback = () => {
  return (
    <section className=' flex flex-col items-center text-center relative'>
      <div className=' flex flex-col gap-4'>
        <h3 className=' text-bean-coffe font-bold text-[54px] '>
          Our coffee perfection feedback
        </h3>
        <p className=' text-bean-ash text-xl leading-[34px]'>
          Our customers has amazing things to say about us
        </p>
      </div>
      <Image
        src='/assets/Bean Scene/coffee_blast.png'
        alt='coffee blast'
        width={377}
        height={272}
        className='scale-x-[-1] absolute -right-0 top-28 z-10'
      />
      <div className='bg-bean-rosetint relative text-center my-24 w-[980px] pt-14 pb-[100px] px-8 border border-bean-buttercream'>
        <div className='text-bean-coffe font-bold text-[220px] leading-[112px] text-left'>
          “
        </div>
        <div className='absolute p-10 bg-bean-buttercream rounded-2xl -left-10 top-1/2 transform -translate-y-1/2'>
          <FaArrowLeft />
        </div>
        <div className='absolute p-10 bg-bean-buttercream rounded-2xl -right-10 top-1/2 transform -translate-y-1/2'>
          <FaArrowRight />
        </div>

        <p className='font-semibold text-bean-ash text-lg max-w-[780px] mx-auto'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset.....
        </p>
        <h4 className=' text-bean-coffe font-bold text-[32px] mt-7'>
          Jonny Thomas
        </h4>
        <p className=' text-bean-ash text-xl'>Product Manager</p>
        <Image
          src='/assets/Bean Scene/johnny thomas.png'
          alt='Johnny Thomas'
          width={112}
          height={112}
          className='rounded-2xl absolute left-1/2 transform -translate-x-1/2 -bottom-16'
        />
      </div>
      <Image
        src='/assets/Bean Scene/coffee_blast.png'
        alt='coffee blast'
        width={377}
        height={272}
        className='scale-y-[-1] absolute left-0 bottom-0 z-10'
      />
    </section>
  )
}

export default Feedback
