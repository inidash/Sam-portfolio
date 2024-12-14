
import React from 'react'
import Link from 'next/link'
import { HiOutlineCodeBracket } from "react-icons/hi2";
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex items-center justify-between flex-row">
            <Link href="/">
                <h1 className='text-2xl font-semibold text-outline text-cyan-600'>Samson</h1>
                
            </Link>
            {/* {desktop nav } */}
            <div className="hidden xl:flex gap-6 items-center">
              <Nav />
            </div>
            {/* {mobile nav } */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header