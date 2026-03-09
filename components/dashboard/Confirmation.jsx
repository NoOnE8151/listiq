import React from 'react'

const Confirmation = ({ setShowConfirmationPopup }) => {
  return (
    <div className='bg-black/60 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className='bg-background px-10 py-5 rounded-xl flex flex-col items-center max-w-[60vw] gap-5'>
            <h1 className='font-bold text-2xl'>
                Confirmation
            </h1>
            <p className='text-lg font-semibold'>Are you sure you want to spend <span className='inline-flex items-center gap-1 font-semibold w-fit   '>10 <img src="/assets/elements/coin.svg" alt="credit" width={22} /></span> to generate a product listing?</p>

            <p className='text-muted-foreground'>This cannot be undone</p>

            <div className='flex justify-between w-full'>
                <button type='button' onClick={() => setShowConfirmationPopup(false)} className='w-1/3 bg-gray-100 px-3 py-3 rounded-lg hover:bg-gray-200 active:bg-gray-100 font-semibold cursor-pointer'>Cancel</button>
                <button type='submit' className='w-1/3 bg-element hover:bg-element-hover active:bg-element-active px-3 py-3 text-white rounded-lg cursor-pointer font-semibold'>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default Confirmation