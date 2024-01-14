import Image from 'next/image'

interface DistinctionCardProps {
  title: string
  desc: string
  icon: string
}

const DistinctionCard = ({
  distinction,
  className,
}: {
  distinction: DistinctionCardProps
  className?: string
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center w-fit p-9 text-center hover:bg-[#ffeed8] cursor-pointer`}
    >
      <Image
        src={distinction.icon}
        width={88}
        height={88}
        alt={distinction.icon}
      />
      <h4 className=' font-bold text-[28px] text-bean-coffe mt-5 mb-2'>
        {distinction.title}
      </h4>
      <p className=' text-bean-ash text-xl'>{distinction.desc}</p>
    </div>
  )
}

export default DistinctionCard
