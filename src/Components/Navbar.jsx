import React from 'react'

const Navbar = () => {
  return (
    <nav className='navBar w-full h-auto flex justify-center items-center bg-white'>
      <div className='nav list-none m-5 flex gap-20 justify-center items-center rounded-[50px] px-8 text-lg py-8 bg-black text-gray-300 font-semibold'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Service</li>
        <div className='heroLogo font-bold text-2xl cursor-pointer text-white'>• Habib Ahmed •</div>
        <div className='liBt flex gap-20'>
        <li className='cursor-pointer'>Resume</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Contact</li>
        </div>
      </div>
        <div className="hambarger relative hidden -left-[10vw] flex-col gap-1">
          <div className="line h-1 w-6 bg-white"></div>
          <div className="line h-1 w-6 bg-white"></div>
          <div className="line h-1 w-6 bg-white"></div>
        </div>
    </nav>
  )
}

export default Navbar
