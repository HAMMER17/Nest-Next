import React from 'react'
import UiButton from './ui-button'
import BlockButton from '@/features/ui/block-button'
import { toggleBlock } from '@/features/auth/model/toggle-bloking'
import { RiDeleteBin2Fill } from "react-icons/ri";

import { formBlockList } from '@/features';
import { useBlockListQuery, useRemoteBlockMutation } from '@/entities/block-llist/querylist';
import { SearchList } from '@/features/blocklist/models/form-search';

const UiBlockList = () => {
  const remoteItem = useRemoteBlockMutation()
  function handleRemote(id: any) {
    remoteItem.mutate(id)
  }
  const { item, q, setQ }: any = SearchList()

  const { isBlock, isLoading, toggleBlocking, isReady }: any = toggleBlock()

  const { HandleSubmit, register } = formBlockList()
  const { data } = useBlockListQuery({})


  if (!isReady) {
    return null
  }
  return (
    <div className=' w-1/2 flex items-center justify-center flex-col'>

      <BlockButton className={isBlock ? 'btn red' : 'btn green'}
        onClick={toggleBlocking}>
        {isBlock ? "Disable Blocking" : "Enable Blocking"}</BlockButton>

      <form className='w-full flex items-center flex-col' onSubmit={HandleSubmit}>
        <div className='flex w-full'>
          <select id="select" className=' p-2 w-1/2  m-1 rounded-md' {...register("type")}>
            <option defaultValue="Website" selected>Website</option>
            <option defaultValue="Keyword" >Keyword</option>
          </select>
          <input {...register("data")} type="Website" placeholder='Add site...' className=' p-2 w-full  m-1 rounded-md' />

        </div>

        <UiButton click='Add Block Item' clname='btn green' />

        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search' className=' p-2 w-full rounded-md' />
        <UiButton click='Send' clname='btn red' />
      </form>

      <div className=' w-full bg-slate-700 p-2 rounded-md'>
        {data?.items.length === 0 && <h1 className=' text-white text-center p-2'>List is Empty...</h1>}

        {q.length === 0 ? (data?.items.map(elem => (
          <div className='flex justify-between p-1 items-center' key={elem.id}>
            <p className=' text-white border-b-2 p-1 border-white m-1 text'>{elem.data}</p>
            <p className=' text-gray-400 font-light text-xs italic'>{elem.type}</p>
            <RiDeleteBin2Fill className='p cursor-pointer' size={30} onClick={() => handleRemote(elem.id)} />

          </div>
        ))) : (item.map((elem: any) => (
          <div className='flex justify-between p-1 items-center' key={elem.id}>
            <p className=' text-white border-b-2 p-1 border-white m-1 text'>{elem.data}</p>
            <p className=' text-gray-400 font-light text-xs italic'>{elem.type}</p>

          </div>
        )))
        }
      </div>
    </div>
  )
}

export default UiBlockList
