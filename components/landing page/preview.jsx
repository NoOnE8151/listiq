import React from 'react'

const PreviewSection = () => {
  return (
    <section className='flex items-center flex-col gap-20 pt-[3rem]'>
      <h3 className='text-5xl font-semibold'>Optimize in seconds with AI.</h3>

      <div className='flex items-center gap-10'>

        <div className='flex flex-col gap-5 items-center'>
          <h3 className='text-2xl font-semibold'>Before</h3>
        <img src="/assets/home/preview/before.png" alt="before using list iq" />
        </div>
        
        <div className='flex flex-col gap-5 items-center'>
          <h3 className='text-3xl font-semibold'>After</h3>
        <img src="/assets/home/preview/before.png" alt="after using list iq" />
        </div>

      </div>

      <button className='bg-element text-white font-semibold px-22 py-3 rounded-lg text-xl'>Try for free</button>

    </section>
  )
}

export default PreviewSection