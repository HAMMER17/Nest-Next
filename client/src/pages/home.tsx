
import { Inter } from 'next/font/google'
import { UiSpinner } from '@/components/ui-spinner'
import UiHeader from '@/components/ui-header'
import UiInputUp from '@/components/ui-formup'
import UiBlockList from '@/components/ui-blocklist'



const inter = Inter({ subsets: ['latin'] })

export function HomePage() {

  return (
    <main className='bg-black overflow-hidden'>
      <UiHeader />
      <div className='flex items-center justify-around image'>
        <UiSpinner />
        <UiBlockList />

      </div>
    </main>
  )
}
