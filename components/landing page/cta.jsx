import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className='flex flex-col items-center'>
        <h3 className='text-5xl font-semibold text-center'>Supports popular marketplaces</h3>

        <div className='flex items-center gap-5'>
            <img src="/assets/home/logo/marketplace logos.png" alt="amazon logo" />
        </div>

        <ul className='self-start pl-[7rem] text-3xl list-disc flex flex-col gap-3'>
            <li>Built for marketplace sellers</li>
            <li>No data stored from marketplaces</li>
            <li>Platform-safe conten</li>
        </ul>

        <div className='py-20 flex items-center flex-col gap-14'>
            <h4 className='text-4xl font-semibold'>Boost sales with <span className='font-riot'><span className='text-[#3FBBEB]'>List</span><span className='text-[#189BFF]'>IQ</span>.</span> Zero risk, instant results</h4>

            <Link href='/sign-up' className='text-3xl bg-element font-semibold text-white px-20 cursor-pointer py-3 rounded-xl'>Start For Free</Link>
        </div>
    </section>
  )
}

export default CallToAction