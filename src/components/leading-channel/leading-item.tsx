/** @format */
import React from 'react'
import { cn } from '@/lib/utils'

interface LeadingItemProps {
  className?: string
  image?: React.ReactNode
  index?: number
  indexClass?: string
  title?: string

  step?: string
  children?: React.ReactNode
}

export default function LeadingItem({ className, image, index, indexClass, title, step, children }: LeadingItemProps) {
  return (
    <div className={cn('flex w-[100%] cursor-pointer flex-col items-center rounded-lg p-[20px] text-center transition-cartoon', className)}>
      <div>{image}</div>
      <div className={'flex-center-box'}>
        <div className={cn('mr-[10px] h-[35px] w-[35px] rounded-[50%] bg-amber-400 leading-[35px] flex-center-box', indexClass)}>{index}</div>
        <div className={'text-[1.5em]'}>{title}</div>
      </div>
      <div className={'p-[20px] text-gray-600'}> {children}</div>
      <div>{step}</div>
    </div>
  )
}
