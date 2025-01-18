/** @format */

import { cn } from '@/utils/cn'
import React from 'react'
import { Button } from '@mui/material'

interface CardItemProps {
  children?: React.ReactNode
  className?: string
  image: string
  title: string
}

export default function CardItem({ children, image, title, className }: CardItemProps) {
  return (
    <div>
      <div className={cn('card-item-slow group/item absolute h-[200px] w-[300px] cursor-pointer rounded-lg bg-red-400 shadow-md', className)}>
        {/*<div*/}
        {/*  style={{ backgroundImage: `url(${image})` }}*/}
        {/*  className={'relative h-[200px] w-[100%] rounded-t-lg bg-cover bg-center transition-cartoon-slow'}*/}
        {/*>*/}
        {/*  <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0.4),rgba(0,0,0,0.8))] opacity-0 transition-opacity group-hover/item:opacity-50"></div>*/}

        {/*  <Button*/}
        {/*    sx={{ backgroundColor: 'white', color: 'black', borderRadius: '20px', transition: 'all 0.3s ease-in-out' }}*/}
        {/*    variant="contained"*/}
        {/*    className={*/}
        {/*      'absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[50%] opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100'*/}
        {/*    }*/}
        {/*  >*/}
        {/*    查看详情*/}
        {/*  </Button>*/}
        {/*</div>*/}
        {/*<div className={'p-[10px] text-center text-[1.2em] font-bold'}>{title}</div>*/}
        {/*{children}*/}
      </div>
    </div>
  )
}
