'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import Logo from './Logo'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Navlinks from './Navlinks'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <header className='flex-between fixed h-16 w-full border-b-4 border-purple-100 bg-white p-5 lg:hidden'>
      <Logo />
      <nav className='flex gap-2'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          <Sheet>
            <SheetTrigger>
              <Image
                src='/assets/icons/menu.svg'
                alt='menu'
                width={32}
                height={32}
                className='cursor-pointer'
              />
            </SheetTrigger>
            <SheetContent className='sm:w-64'>
              <>
                {' '}
                <Image
                  src='/assets/images/logo-text.svg'
                  alt='logo'
                  width={152}
                  height={23}
                />
                <ul className='mt-8 flex w-full flex-col items-start gap-5'>
                  <Navlinks pathname={pathname} />
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className='button bg-purple-gradient bg-cover'>
            <Link href='/sign-in'>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav
