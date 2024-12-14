"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { HiMenuAlt4 } from "react-icons/hi";

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger  className='flex justify-center items-center'>
            <SheetTitle>
                <HiMenuAlt4 className='text-[32px] text-cyan-400 ' />
            </SheetTitle>
        </SheetTrigger>
        {/* <SheetTitle>Nav</SheetTitle> */}
        <SheetContent>
            {/* {logo } */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold text-outline text-cyan-600">Samson</h1>
                </Link>
            </div>
            <SheetDescription>
            <span className="flex flex-col justify-center items-center gap-8 text-white hover:hover">
                {navLinks.map(({name, path}) => (
                    <Link href={path} key={name} className={`${path === pathname && 'active-nav'} nav-link`}>
                        {name}
                    </Link>
                ))}
            </span>
            </SheetDescription>
        </SheetContent>
    </Sheet>

  )
}

export default MobileNav