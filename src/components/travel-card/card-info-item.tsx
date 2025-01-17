/** @format */
import React from 'react'
import { LocationIcon } from '@/components/icon'

interface CardInfoItemProps {
  icon: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export default function CardInfoItem({ icon, className, children }: CardInfoItemProps) {
  return (
    <div className={'flex items-center px-[10px] py-[5px] text-[0.9em] text-gray-500'}>
      {icon}
      <div className={'ml-[3px]'}>{children}</div>
    </div>
  )
}
