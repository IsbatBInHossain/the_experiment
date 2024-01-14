export const TitleText = ({
  title,
  isCoffee = false,
}: {
  title: string
  isCoffee?: boolean
}) => {
  return (
    <h3
      className={` ${
        isCoffee ? 'text-bean-coffe' : 'text-white'
      } font-bold text-[54px]`}
    >
      {title}
    </h3>
  )
}

export const SubtitleText = ({
  subtitle,
  isAsh = false,
}: {
  subtitle: string
  isAsh?: boolean
}) => {
  return (
    <p
      className={`text-xl leading-[34px]  ${
        isAsh ? 'text-bean-ash' : 'text-white'
      }`}
    >
      {subtitle}
    </p>
  )
}
