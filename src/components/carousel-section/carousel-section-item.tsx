/** @format */
import Image from 'next/image'
import React from 'react'

interface CarouselItemProps {
  className?: string
  children?: React.ReactNode
  carouselItem: {
    image: string
    description: string
    author: string
  }
}

export default function CarouselSectionItem({ carouselItem }: CarouselItemProps) {
  return (
    <div className="mx-auto grid w-[70%] grid-cols-1 gap-3.5 py-[5em] lg:grid-cols-2">
      <div className={'order-2 py-[1em] lg:order-1'}>
        <div className={'text-[1.5rem] text-gray-900'}>{carouselItem.description}</div>
        <div className={'pt-[2em] text-[0.8rem] text-gray-500'}>{carouselItem.author}</div>
      </div>

      <div className={'relative order-1 aspect-[3/2] w-full rounded-2xl lg:order-2'}>
        <Image className={'rounded-2xl'} layout={'fill'} src={carouselItem.image} alt={'R'}></Image>
      </div>
    </div>
  )
}
