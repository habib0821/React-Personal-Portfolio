import React from 'react'

const Services = () => {
  return (
    <div className='services relative w-full -top-20 -z-10 rounded-b-[60px]'>
      <div className='relative flex flex-col justify-center items-center gap-10 top-[8rem]'>
        <h1 className='text-white text-center text-5xl font-bold'>What can i do for you</h1>
        <div className="cards flex gap-4 flex-wrap justify-center items-center">
          <div className="card rounded-xl w-[15rem] h-[15rem] bg-white flex flex-col justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_F4iGwkFpaFGIjeEke5pWpun6HhHoo5uFdQ&s" className='rounded-full w-[6rem]' alt="" />
            <h3 className='font-bold text-xl'>Web Design</h3>
            <p className='text-center font-semibold text-gray-500'>Designing interface that are effective and easy to use by users and customers</p>
          </div>
          <div className="card rounded-xl w-[15rem] h-[15rem] bg-white flex flex-col justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_F4iGwkFpaFGIjeEke5pWpun6HhHoo5uFdQ&s" className='rounded-full w-[6rem]' alt="" />
            <h3 className='font-bold text-xl'>Software Design</h3>
            <p className='text-center font-semibold text-gray-500'>Designing interface that are effective and easy to use by users and customers</p>
          </div>
          <div className="card rounded-xl w-[15rem] h-[15rem] bg-white flex flex-col justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_F4iGwkFpaFGIjeEke5pWpun6HhHoo5uFdQ&s" className='rounded-full w-[6rem]' alt="" />
            <h3 className='font-bold text-xl'>Web Development</h3>
            <p className='text-center font-semibold text-gray-500'>Designing interface that are effective and easy to use by users and customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
