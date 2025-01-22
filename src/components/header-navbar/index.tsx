/** @format */
'use client'

import UserAvatar from '@/components/header-navbar/user-avatar'
import HeaderItem from '@/components/header-navbar/header-item'
import Image from 'next/image'
import { Badge } from '@mui/material'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

export default function HeaderNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 判断滚动的距离
      if (window.scrollY > 1) {
        setScrolled(true) // 滚动超过 50px 改变样式
      } else {
        setScrolled(false) // 恢复默认样式
      }
    }

    // 绑定滚动事件
    window.addEventListener('scroll', handleScroll)

    // 清理事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        'sticky top-0 z-10 flex h-[70px] items-center justify-around bg-white shadow-md transition-cartoon',
        scrolled && 'bg-gray-700 text-white',
      )}
    >
      <div className={'h-full cursor-pointer flex-center-box'}>
        <Image src="/logo.svg" alt="" width={40} height={40} />
        <div className={'ml-[5px] font-comfortaa text-[2em] font-[1000]'}>CN Travel</div>
      </div>
      <Input
        className={cn('w-[400px] focus-visible:ring-2 focus-visible:ring-blue-500', scrolled && 'placeholder:text-gray-400')}
        type={'search'}
        placeholder="Search"
      />
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
