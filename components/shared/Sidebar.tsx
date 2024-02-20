'use client'

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import Logo from './Logo'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className='hidden h-screen w-72 bg-indigo-50 p-5 shadow-md shadow-purple-200/50 lg:flex'>
      <div className='flex size-full flex-col gap-4'>
        <Logo />
        

        <nav className='h-full flex-col justify-between md:flex md:gap-4'>
          <SignedIn>
            <ul className='hidden w-full flex-col items-start gap-2 md:flex'>
              {navLinks.slice(0, 6).map((link, index) => {
                const isActive = link.route === pathname

                return (
                  <li
                    key={index}
                    className={`flex-center p-16-semibold group w-full whitespace-nowrap rounded-full bg-cover text-gray-700 transition-all hover:bg-purple-100 hover:shadow-inner ${isActive && 'bg-purple-gradient text-white'}`}
                  >
                    <Link
                      className='p-16-semibold flex size-full gap-4 p-4'
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt={link.label}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6).map((link, index) => {
                const isActive = link.route === pathname

                return (
                  <li
                    key={index}
                    className={`flex-center p-16-semibold group w-full whitespace-nowrap rounded-full bg-cover text-gray-700 transition-all hover:bg-purple-100 hover:shadow-inner ${isActive && 'bg-purple-gradient text-white'}`}
                  >
                    <Link
                      className='p-16-semibold flex size-full gap-4 p-4'
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt={link.label}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className='flex-center cursor-pointer gap-2 p-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
