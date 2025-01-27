import Image from 'next/image'
import React from 'react'

import logo from '@/assets/logo.svg'

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt='logo' width={100} height={100} />
    </div>
  )
}

export default Logo
