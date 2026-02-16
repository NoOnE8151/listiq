import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='font-poppins font-medium text-xl md:block hidden'>
            How it works?
        </div>
        <h1 className='font-riot text-3xl'>
            <span className='text-[#3FBBEB]'>List</span><span className='text-[#189BFF]'>IQ</span>
        </h1>

        <div className='flex items-center gap-5'>
            <button className='bg-element text-white px-7 py-2 rounded-full font-semibold cursor-pointer md:block hidden'>SignUp</button>
            <button className='cursor-pointer md:text-foreground text-white md:bg-transparent bg-element md:px-0 px-5 md:py-0 py-1 rounded-full font-semibold'>Login</button>
        </div>
    </div>
  )
}

export default Header