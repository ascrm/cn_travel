/** @format */

import React from 'react'
import { BillIcon, DateIcon, LocationIcon } from '@/components/icon'
import CardInfoItem from '@/components/travel-card/card-info-item'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface CardItemProps {
  children?: React.ReactNode
  className?: string
  cardItem: {
    id: number
    image: string
    title: string
    location: string
    time: string
    ticket: string
  }
}

export default function CardItem({ cardItem, className }: CardItemProps) {
  return (
    <div>
      <div className={'group relative aspect-[4/3] w-[400px]'}>
        <Image
          className={'absolute cursor-pointer rounded-t-lg transition-cartoon group-hover:brightness-75'}
          src={cardItem.image}
          layout={'fill'}
          alt={'R'}
        ></Image>
        <Button
          variant={'link'}
          className={
            'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-10%] bg-white opacity-0 transition-cartoon group-hover:translate-y-[-50%] group-hover:opacity-100'
          }
        >
          探索更多
        </Button>
      </div>
      <div className={'cursor-default'}>
        <div className={'p-[0.5em] text-[1.5rem] text-gray-900'}>{cardItem.title}</div>
        <CardInfoItem icon={<LocationIcon></LocationIcon>}>{cardItem.location}</CardInfoItem>
        <CardInfoItem icon={<DateIcon></DateIcon>}>{cardItem.time}</CardInfoItem>
        <CardInfoItem icon={<BillIcon></BillIcon>}>{cardItem.ticket}</CardInfoItem>
      </div>
    </div>
  )
}
