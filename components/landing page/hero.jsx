import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div id='hero' className='flex md:flex-row flex-col h-full gap-5 md:pt-[8.5rem] pt-[4rem]'>
        <div className='flex flex-col gap-5 md:w-[60%]'>
            <h2 className='md:text-5xl text-2xl font-semibold leading-normal'>
                Rank Your Amazon/Flipkart Products on Top
            </h2>
            <p className='md:text-2xl text-sm text-muted-foreground'>Enter basic product details and get AI-powered SEO optimized, ready to paste listings in seconds</p>
            <Link href='/sign-up' className='btn-engage text-center md:text-xl text-sm bg-element text-white md:w-1/2 px-7 md:py-4 py-3 cursor-pointer rounded-md font-semibold'>Create 1st Listing - Free</Link>
        </div>

        <div className='w-[40%] md:block hidden'>
            <img src="/assets/home/hero section/hero.png" alt="hero section image" />
        </div>
    </div>
  )
}

export default HeroSection