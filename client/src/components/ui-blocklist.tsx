import React from 'react'
import UiButton from './ui-button'
import BlockButton from '@/features/ui/block-button'
import { toggleBlock } from '@/features/auth/model/toggle-bloking'
import { RiDeleteBin2Fill } from "react-icons/ri";

import { formBlockList } from '@/features';
import { useBlockListQuery } from '@/entities/block-llist/querylist';

const UiBlockList = () => {
  const { isBlock, isLoading, toggleBlocking, isReady }: any = toggleBlock()
  const { HandleSubmit, register } = formBlockList()
  const { data } = useBlockListQuery({})
  console.log(data)
  if (!isReady) {
    return null
  }
  return (
    <div className=' w-1/2 flex items-center justify-center flex-col'>

      <BlockButton className={isBlock ? 'btn red' : 'btn green'}
        onClick={toggleBlocking}>
        {isBlock ? "Disable Blocking" : "Enable Blocking"}</BlockButton>
      {/* <button className='btn w-10/12  bg-red-600 rounded-md text-white'>click</button> */}
      <form className='w-full flex items-center flex-col' onSubmit={HandleSubmit}>
        <div className='flex w-full'>
          <select id="select" className=' p-2 w-1/2  m-1 rounded-md' {...register("type")}>
            <option defaultValue="Website" selected>Website</option>
            <option defaultValue="Keyword" >Keyword</option>
          </select>
          {/* <input type="text" placeholder='Website' className=' p-2 w-1/2  m-1 rounded-md' /> */}
          <input {...register("data")} type="Website" placeholder='Add site...' className=' p-2 w-full  m-1 rounded-md' />
          {/* <UiButton click='Send' clname='btn green' /> */}
        </div>
        <h1 className=' text-white'>{data?.items.length}</h1>
        <UiButton click='Add Block Item' clname='btn green' />
      </form>
      <input type="text" placeholder='Search' className=' p-2 w-full rounded-md' />
      {/* <input type="text" placeholder='Search' className=' p-2 w-1/2' /> */}
      <UiButton click='Send' clname='btn red' />
      <div className=' w-full bg-slate-700 p-2 rounded-md'>
        <div className='flex justify-between p-1 items-center'>
          <p className=' text-white border-b-2 p-1 border-white m-1 text'>Google.com</p>
          <RiDeleteBin2Fill className='p cursor-pointer' size={30} />
        </div>
        <div className='flex justify-between p-1 items-center'>
          <p className=' text-white border-b-2 p-1 border-white m-1 text'>YouTude.com</p>
          <RiDeleteBin2Fill className='p cursor-pointer' size={30} />
        </div>

      </div>
    </div>
  )
}

export default UiBlockList
