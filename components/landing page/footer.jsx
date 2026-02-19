import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#333A52] text-white flex flex-col'>
    <div className='flex justify-around py-10'>
        <div className='flex flex-col gap-5'>
            <h4 className='text-2xl font-semibold'>Quick Link</h4>
            <Link href='#hero' className='text-lg'>Home</Link>
            <Link href='#features' className='text-lg'>Features</Link>
            <Link href='#' className='text-lg'>Login</Link>
            <Link href='#' className='text-lg'>How it wroks?</Link>
        </div>
        <div className='flex flex-col gap-5'>
            <h4 className='text-2xl font-semibold'>Legal</h4>
            <Link href='#' className='text-lg'>Privacy Policy</Link>
            <Link href='#' className='text-lg'>Terms of Service</Link>
        </div>
        <div className='flex flex-col gap-5'>
            <h4 className='text-2xl font-semibold'>Business</h4>
            <Link href='#' className='text-lg'>About <span>ListIQ</span></Link>
            <Link href='#' className='text-lg'>Contact Us</Link>
        </div>
    </div>
    <div className='text-center text-2xl pb-5'>
        &copy; <span className='font-riot'>ListIQ</span>
    </div>
    </div>
  )
}

export default Footer