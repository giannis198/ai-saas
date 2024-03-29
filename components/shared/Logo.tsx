import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <Link href='/' className='flex items-center gap-2 md:py-2'>
        <Image
          src='/assets/images/logo-text.svg'
          alt='logo'
          width={180}
          height={28}
        />
      </Link>
    </>
  )
}

export default Logo
