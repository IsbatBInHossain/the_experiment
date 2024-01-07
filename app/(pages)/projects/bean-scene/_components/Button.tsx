const Button: React.FC<{ btnName: string; btnClass?: string }> = ({
  btnName,
  btnClass,
}) => {
  return (
    <button
      className={`${
        btnClass || ''
      } bg-[#f9c06a] px-6 py-3 rounded-full text-black shadow-md shadow-[#f9c06a] inline-block w-auto`}
    >
      {btnName}
    </button>
  )
}

export default Button
