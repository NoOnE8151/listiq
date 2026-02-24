import React from 'react'
import Header from '@/components/landing page/header'
import ProductListingForm  from '@/components/dashboard/ProductListing'
import ListingOutput from '@/components/dashboard/ListingOutput'

const ProductListing = () => {
  return (
    <div className='w-screen h-screen'>
      <header className='md:px-16 px-5 py-5 shadow sticky top-0 bg-background flex justify-center'>
        <div className='w-7xl px-6'>
      <Header />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-10 flex gap-12 items-start">
        <section className='w-1/2'>
        <ProductListingForm />
        </section>
        <section className='w-1/2'>
        <ListingOutput />
        </section>
      </main>
    </div>
  )
}

export default ProductListing