import block from '../images/b.jpeg'
import UiButtonOut from './ui-buttonout'
import Image from 'next/image'
import { useSessionQuery } from '@/entities/session'


export default function UiHeader() {
  const { data } = useSessionQuery()
  return (
    <div className=' w-screen h-20 flex items-center text-white justify-around'>

      <Image src={block} alt='block' width={150} />
      <h1>{data?.email}</h1>
      <UiButtonOut clname='btn red' click='Sign Out' />
    </div>
  )
}
