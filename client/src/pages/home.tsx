
import { Inter } from 'next/font/google'

import { authControllerGetSession } from '@/shared/api/generate'
import { useQuery } from '@tanstack/react-query'
import { UiSpinner } from '@/components/ui-spinner'
import UiHeader from '@/components/ui-header'



const inter = Inter({ subsets: ['latin'] })

export function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSession()
  })
  return (
    <main className=' h-screen bg-black'>
      <UiHeader />
      <div className='w-full h-1/2  flex items-center justify-center flex-col '>

        <h1 className=' text-white m-10'>{data?.email}</h1>

        <UiSpinner />
      </div>
    </main>
  )
}
