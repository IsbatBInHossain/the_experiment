import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer
      className='bg-no-repeat bg-cover flex flex-col text-left justify-between overflow-y-visible relative items-stretch -z-30 pt-[162px] pb-[72px] px-24'
      style={{
        backgroundImage: 'url("/assets/Bean Scene/footer image.png")',
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-[#442808] to-[#7a480e] -z-10'></div>
      <div className=' flex justify-between items-center gap-[66px] text-white'>
        <div className=' flex flex-col gap-5 text-left'>
          <h2 className=' clicker text-[54px]'>Bean Scene</h2>
          <p className=' text-sm  max-w-[360px] leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className=' flex gap-5'>
            <FaFacebook className=' w-6 h-6' />
            <FaInstagram className=' w-6 h-6' />
            <FaYoutube className=' w-6 h-6' />
            <FaTwitter className=' w-6 h-6' />
          </div>
        </div>
        <div className=' flex flex-col justify-between h-[258px]'>
          <h3 className=' text-[26px] font-bold'>About</h3>
          <ul className=' flex flex-col gap-4 text-lg'>
            <li>Menu</li>
            <li>Features</li>
            <li>News & Blogs</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div className=' flex flex-col justify-between h-[258px]'>
          <h3 className=' text-[26px] font-bold'>Company</h3>
          <ul className=' flex flex-col gap-4 text-lg'>
            <li>How we work</li>
            <li>Terms of service</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className=' flex flex-col justify-between h-[258px]'>
          <h3 className=' text-[26px] font-bold'>Contact Us</h3>
          <ul className=' flex flex-col gap-4 text-lg max-w-[320px]'>
            <li>
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </li>
            <li>+1 202-918-2132</li>
            <li>beanscene@mail.com</li>
            <li>www.beanscene.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
