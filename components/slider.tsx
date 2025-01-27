import Image from 'next/image'
import React from 'react'
import slide1 from '@/assets/MICROTEK.svg'
import slide2 from '@/assets/NYSC2.svg'
import slide3 from '@/assets/luminoui.svg'
import slide4 from '@/assets/smarten.svg'
import slide5 from '@/assets/shnieder.svg'

const Slider = () => {
  return (
    <div className='flex  items-center justify-center logos gap-[40rem] py-2'>
       <div className='logosSlide flex gap-[5rem] flex-row items-center'>
       <Image src={slide1} alt=''  />
        <Image src={slide2} alt=''  />
        <Image src={slide3} alt=''  />
        <Image src={slide4} alt=''  />
        <Image src={slide5} alt=''  />
       </div>
       <div className='logosSlide flex gap-[5rem] flex-row items-center'>
       <Image src={slide1} alt=''  />
        <Image src={slide2} alt=''  />
        <Image src={slide3} alt=''  />
        <Image src={slide4} alt=''  />
        <Image src={slide5} alt=''  />
       </div>
    </div>
  )
}

export default Slider
