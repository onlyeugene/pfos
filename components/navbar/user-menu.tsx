'use client'

import { routes } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const UserMenu = () => {
    const path = usePathname()
  return (
    <div className='sm:flex hidden space-x-10 text-[13px]'>
      {routes.map((item) => (
        <div key={item.path}>
            <Link href={item.path} className={`${item.path === path ? 'text-yellow' : 'text-white' }`}>
                {item.title}
            </Link>
        </div>
      ))}
    </div>
  )
}

export default UserMenu
