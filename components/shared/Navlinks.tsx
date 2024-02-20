import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Navlinks = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {navLinks.map((link, index) => {
        const isActive = link.route === pathname

        return (
          <li
            key={index}
            className={`p-18 flex whitespace-nowrap text-dark-700  ${isActive && 'gradient-text'}`}
          >
            <Link
              className='p-16-semibold flex size-full cursor-pointer gap-4 p-4'
              href={link.route}
            >
              <Image src={link.icon} width={24} height={24} alt={link.label} />
              {link.label}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default Navlinks
