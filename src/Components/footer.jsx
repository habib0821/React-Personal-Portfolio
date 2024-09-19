import React from 'react'

const footer = () => {
  return (
    <footer className='footer relative bottom-24 -z-10'>
      <div className='footerCon flex justify-center relative top-[10rem] gap-[7rem]'>
        <div className="left w-[30rem] flex flex-col gap-5">
          <h1 className='text-5xl text-white font-bold'>Let's start <br/> project together?</h1>
          <p className='text-gray-400 font-semibold'>Contact me for question, collaboration, conservation, or just saying hello. Thank you for stopping by here.</p>
          <div className='contact flex gap-4'>
            <li className='text-lg list-none font-semibold text-white underline'>alhabibservices7@gmail.com</li>
            <li className='text-lg list-none font-semibold text-white underline'>+92 303 4588 486</li>
          </div>
        </div>
        <div className="right">
          <img className='w-[10rem] border-4 border-orange-500 rounded-full' src="/images/footerpage.jpeg" alt="" />
        </div>
      </div>
      <div className="socials flex justify-around relative top-[15rem]">
        <div className="logo text-white text-xl font-bold">
        • Habib Ahmed •
        </div>
        <div className="socialLinks flex gap-10">
          <li className='text-white text-xl list-none font-bold'>Instagram</li>
          <li className='text-white text-xl list-none font-bold'>LinkedIn</li>
          <li className='text-white text-xl list-none font-bold'>Dribbble</li>
          <li className='text-white text-xl list-none font-bold'>Medium</li>
        </div>
      </div>
    </footer>
  )
}

export default footer
