import React from 'react'
import UiButton from './ui-button'

const UiBlockList = () => {
  return (
    <div className=' w-1/2 flex items-center justify-center flex-col'>
      <button className='btn w-10/12  bg-red-600 rounded-md text-white'>click</button>
      <div className='flex w-full'>
        <input type="text" placeholder='Search' className=' p-2 w-1/2  m-1' />
        <input type="text" placeholder='Search' className=' p-2 w-full  m-1' />
        {/* <UiButton click='Send' clname='btn green' /> */}
      </div>
      <UiButton click='Send' clname='btn green' />
      <input type="text" placeholder='Search' className=' p-2 w-full' />
      {/* <input type="text" placeholder='Search' className=' p-2 w-1/2' /> */}
      <UiButton click='Send' clname='btn red' />
      <p className=' text-white border-b-2 border-white'>Google.com</p>
      <p className=' text-white border-b-2 border-white'>YouTude.com</p>

    </div>
  )
}

export default UiBlockList
