/** @format */

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
    <div className={cn('cursor-pointer rounded-lg bg-red-400 shadow-md', className)}>
      <div style={{ backgroundImage: `url(${image})` }} className={'aspect-[4/3] w-[400px]'}>
        hello world
      </div>
    </div>
  )
}
