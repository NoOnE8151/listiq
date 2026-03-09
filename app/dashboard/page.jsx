'use client'
import React, { useState } from 'react'
import Header from '@/components/landing page/header'
import ProductListingForm  from '@/components/dashboard/ProductListing'
import ListingOutput from '@/components/dashboard/ListingOutput'

const ProductListing = () => {
  const [generatedOutput, setGeneratedOutput] = useState({}) // this will store the generated listing output that is created in product listing form component.
  return (
    <div className='w-screen h-screen'>
      <header className='md:px-16 px-1 py-5 shadow sticky top-0 bg-background flex justify-center'>
        <div className='w-7xl px-6'>
      <Header />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-10 flex md:flex-row flex-col gap-12 items-start">
        <section className='md:w-1/2 w-[90vw]'>
        <ProductListingForm setGeneratedOutput={setGeneratedOutput} />
        </section>
        <section className='md:w-1/2 w-[90vw]'>
        <ListingOutput generatedOutput={generatedOutput} />
        </section>
      </main>
    </div>
  )
}

export default ProductListing