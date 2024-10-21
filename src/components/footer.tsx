import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
        <footer className="bg-[#FFE7BA] w-full h-fit py-8 flex flex-col justify-center gap-4 items-center rounded-t-3xl md:px-32 px-4">
        <div className="bg-[#003459] w-full md:h-24 h-fit py-4 rounded-2xl flex md:flex-row flex-col justify-center items-center gap-4 px-6">
          <div className="md:w-1/2 w-full">
            <p className="text-white font-bold text-2xl">
              Register now so you don't miss our programs
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-white rounded-2xl px-2 py-2 flex md:flex-row flex-col items-center justify-center gap-2">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-12 rounded-xl px-2 ring-1 ring-slate-400 outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-[#003459] px-2 py-1 rounded text-sm font-semibold text-white md:w-fit w-full">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-24 flex md:flex-row flex-col items-center justify-between">
          <div className="">
            <ul className="flex gap-8">
              <li>Home</li>
              <li>Category</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-8">
              <li>
                <IoLogoFacebook />
              </li>
              <li>
                <IoLogoInstagram />
              </li>
              <li>
                <IoLogoTwitter />
              </li>
              <li>
                <IoLogoYoutube />
              </li>
            </ul>
          </div>
        </div>
        {/* <hr className="h-px my-8 bg-gray-600 border-0 dark:bg-gray-700"></hr> */}
        <div className="w-full flex md:flex-row flex-col items-center justify-between">
          <div>
            <p>© 2022 Monito. All rights reserved.</p>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="flex gap-4">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer