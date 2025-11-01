import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='glass sticky top-0 z-50'>
        <nav className='flex flex-row justify-between mx-auto container sm:px-10 px-5 py-4'>
            <Link href='/' className='flex flex-row items-center gap-2'>
                <Image alt='logo' src='/gear-logo.png' width={24} height={24}/>

                <p className='text-xl font-bold italic max-sm:hidden'>Tool kind</p>
            </Link>
            <ul className='flex flex-row items-center gap-6'>
                <Link href='/'>Home</Link>
                <Link href='/'>Tools</Link>
                <Link href='/'>Create Tool</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar