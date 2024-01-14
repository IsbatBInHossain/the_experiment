const Button: React.FC<{ btnName: string; btnClass?: string }> = ({
  btnName,
  btnClass,
}) => {
  return (
    <button
      className={`${
        btnClass || ''
      } bg-bean-buttercream hover:bg-bean-butter hover:shadow-bean-butter hover:shadow-lg px-6 py-3 rounded-full text-black shadow-md shadow-bean-buttercream w-fit`}
    >
      {btnName}
    </button>
  )
}

export default Button
