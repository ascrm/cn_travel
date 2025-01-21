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
    <div
      className={cn('aspect-[4/3] w-[400px] cursor-pointer rounded-lg bg-red-400 shadow-md', className)}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title}
    </div>
  )
}
