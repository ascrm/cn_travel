/** @format */
'use client'

import { useEffect } from 'react'
import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Image from 'next/image'

const CarouselSection = () => {
  useEffect(() => {
    // 初始化 Splide
    new Splide('#image-carousel', {
      type: 'loop',
      heightRatio: 0.5,
      autoplay: true,
      interval: 3000,
      arrows: true,
      pagination: true,
      rewind: true,
      rewindByDrag: true,
    }).mount()
  }, [])

  return (
    <div className="splide mx-auto h-[400px] w-[80%]" id="image-carousel">
      <div className="splide__track">
        <div className="splide__list">
          <Image className={'splide__slide'} src="/1.jpg" alt="Slide 1" height={100} width={100} />

          <Image className={'splide__slide'} src="/2.jpg" alt="Slide 2" height={100} width={100} />

          <Image className={'splide__slide'} src="/3.jpg" alt="Slide 3" height={200} width={200} />
        </div>
      </div>
    </div>
  )
}

export default CarouselSection
