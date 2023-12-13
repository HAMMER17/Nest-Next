
import { UiSpinner } from '@/components/ui-spinner'
import UiHeader from '@/components/ui-header'
import UiBlockList from '@/components/ui-blocklist'


export function HomePage() {

  return (
    <main className='bg-black overflow-hidden'>
      <UiHeader />
      <div className='flex items-center justify-around image'>
        {/* <UiSpinner /> */}
        <UiBlockList />

      </div>
    </main>
  )
}
