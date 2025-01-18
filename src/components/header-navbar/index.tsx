/** @format */

'use client'

import UserAvatar from '@/components/header-navbar/user-avatar'
import HeaderItem from '@/components/header-navbar/header-item'
import Search from '@/components/header-navbar/search'
import Image from 'next/image'
import { Badge } from '@mui/material'

export default function headerNavbar() {
  return (
    <div className={'flex h-[70px] items-center justify-around'}>
      <div className={'h-full cursor-pointer flex-center-box'}>
        <Image src="/logo.svg" alt="" width={40} height={40} />
        <div className={'ml-[5px] font-comfortaa text-[2em] font-[1000]'}>CN Travel</div>
      </div>
      <Search></Search>
      <div className={'h-full flex-center-box'}>
        <UserAvatar></UserAvatar>
        <HeaderItem>旅行计划</HeaderItem>
        <Badge badgeContent={4} max={99} color="primary">
          <HeaderItem>团购服务</HeaderItem>
        </Badge>

        <HeaderItem>会员中心</HeaderItem>
        <HeaderItem>历史记录</HeaderItem>
      </div>
    </div>
  )
}
