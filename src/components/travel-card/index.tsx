/** @format */
'use client'

import CardItem from '@/components/travel-card/card-item'
import { useEffect, useRef, useState } from 'react'

const cards = [
  { id: 1, title: '巴黎', image: '/1.jpg' },
  { id: 2, title: '东京', image: '/2.jpg' },
  { id: 3, title: '纽约', image: '/3.jpg' },
  { id: 4, title: '悉尼', image: '/4.jpg' },
]

export default function TravelCard() {
  const [transformX, setTransformX] = useState(0)
  const [isHovered, setIsHovered] = useState(false) // 控制 hover 状态
  const scrollTrackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let animationFrameId: any
    const updatePosition = () => {
      setTransformX(prev => {
        const nextValue = prev - (isHovered ? 0.16 : 0.64) // 根据 hover 状态调整速度
        if (nextValue <= -scrollTrackRef.current!.scrollWidth / 2) {
          return 0
        }
        return nextValue
      })

      // 在下一个动画帧继续执行
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    // 启动动画
    updatePosition()

    // 清理动画帧
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered])

  return (
    <div>
      <div className={'mb-[50px] text-center text-[2.5em]'}>选择您最爱的旅游景点</div>
      <div className={'overflow-hidden'}>
        <div
          ref={scrollTrackRef}
          onMouseEnter={() => setIsHovered(true)} // 当鼠标进入时，设置 hover 状态
          onMouseLeave={() => setIsHovered(false)} // 当鼠标离开时，恢复正常状态
          style={{ transform: `matrix(1, 0, 0, 1, ${transformX}, 0)` }}
          className={'flex w-max gap-10 pl-10 will-change-transform'}
        >
          {cards.map(item => (
            <CardItem key={item.id} image={item.image} title={item.title}></CardItem>
          ))}
          {cards.map(item => (
            <CardItem aria-hidden={true} key={item.id} image={item.image} title={item.title}></CardItem>
          ))}
        </div>
      </div>
    </div>
  )
}
