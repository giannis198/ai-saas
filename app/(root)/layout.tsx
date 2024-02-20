// import MobileNav from '@/components/shared/MobileNav'
// import Sidebar from '@/components/shared/Sidebar'
// import { Toaster } from '@/components/ui/toaster'

import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex min-h-screen w-full flex-col bg-white lg:flex-row'>
      <Sidebar />
      <MobileNav />

      <div className='mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10'>
        <div className='text-dark-400 p-16-regular mx-auto w-full max-w-5xl px-5 md:px-10'>
          {children}
        </div>
      </div>

      {/* <Toaster /> */}
    </main>
  )
}

export default Layout
