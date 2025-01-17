/** @format */

import Image from 'next/image'
import { cn } from '@/utils/cn'
import React from 'react'

interface CardItemProps {
  children?: React.ReactNode
  className?: string
  image: string
  title: string
}

export default function CardItem({ children, image, title, className }: CardItemProps) {
  return (
    <div
      className={cn(
        'card-item absolute right-[100%] w-[300px] cursor-pointer rounded-lg shadow-md group-hover:[animation-play-state:paused]',
        className,
      )}
    >
      <Image className={'aspect-[10/7] rounded-t-lg object-cover object-center'} src={image} alt="" width={500} height={350} />
      <div className={'p-[10px] text-center text-[1.2em] font-bold'}>{title}</div>
      {children}
    </div>
  )
}
