"use client"
import { navLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Nav = () => {
    const pathname = usePathname();
  return (
   <nav className=' flex flex-row gap-6 items-center text-white hover:hover'>
    {navLinks.map(({name, path})=> (
        <Link href={path} key={name} className={`${path ===pathname && "active-nav"} nav-link`}>{name}</Link>
    ))}
   </nav>
  )
}

export default Nav