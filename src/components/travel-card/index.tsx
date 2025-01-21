/** @format */
'use client'

import CardItem from '@/components/travel-card/card-item'
import { useEffect, useRef, useState } from 'react'

interface CardProps {
  id: number
  image: string
  title: string
  location: string
  time: string
  ticket: string
}
const cards: CardProps[] = [
  {
    id: 1,
    title: '乘船穿越基克拉泽斯群岛',
    image: '/1.jpg',
    location: '锡罗斯岛、帕罗斯岛、纳克索斯岛及其他地区',
    time: '2周或更长时间',
    ticket: 'Eurail 希腊群岛通票',
  },
  { id: 2, title: '追逐北极光', image: '/2.jpg', location: '汉堡、斯德哥尔摩、基律纳等', time: '2周或更长时间', ticket: '欧洲铁路全球通票' },
  {
    id: 3,
    title: '斯洛文尼亚和克罗地亚',
    image: '/3.jpg',
    location: '卢布尔雅那、布莱德湖、斯普利特及其他地区',
    time: '2周或更长时间',
    ticket: '欧洲铁路全球通票',
  },
  { id: 4, title: '罗马周边', image: '/4.jpg', location: '布拉恰诺、维泰博、伊索拉法尔内塞等', time: '2周或更长时间', ticket: 'Eurail 意大利通票' },
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
          className={'flex w-max gap-10 pb-[3px] pl-10 will-change-transform'}
        >
          {cards.map(item => (
            <CardItem key={item.id} cardItem={item}></CardItem>
          ))}
          {cards.map(item => (
            <CardItem aria-hidden={true} key={item.id} cardItem={item}></CardItem>
          ))}
        </div>
      </div>
    </div>
  )
}
