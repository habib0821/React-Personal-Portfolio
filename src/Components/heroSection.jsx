import React from 'react'

const heroSection = () => {
  return (
    <div className='heroSection w-full relative rounded-b-[60px] pb-8 bg-white flex flex-col gap-8 justify-center items-center'>
      <p className='pUpper text-xl text-gray-600 font-semibold'>Hello👋, i'm Habib Ahmed and i'm a </p>
      <div className='heroMain flex justify-center gap-x-0 -my-12 items-center'>
        <img className='relative rounded-full left-[3rem] -top-[3rem] w-[16rem]' src="/images/heropage.png" alt="" />
        <h1 className='text-7xl border-black font-bold'>Web Designer <br />based in Pakistan</h1>
      </div>
      <p className='text-xl text-center text-gray-600 w-1/2 font-semibold'>I love designing websites and user interfaces, doing freelance work and focusing on designing products that are easy on users and customers.</p>
      <div className='heroButton flex gap-4'>
        <button className='project px-4 py-2 bg-orange-500 text-white font-bold border-2 border-white rounded-3xl'>Check my projects</button>
        <button className='email px-4 py-2 bg-white-500 text-orange-500 font-bold border-2 border-orange-500 rounded-3xl'>Email me</button>
      </div>
    </div>
  )
}

export default heroSection
