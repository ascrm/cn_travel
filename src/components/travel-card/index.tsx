/** @format */
'use client'

import CardItem from '@/components/travel-card/card-item'
import React, { useEffect, useRef, useState } from 'react'

// export default function TravelCard() {
//   const cards = [
//     { id: 1, title: '巴黎', image: '/1.jpg' },
//     { id: 2, title: '东京', image: '/2.jpg' },
//     { id: 3, title: '纽约', image: '/3.jpg' },
//     { id: 4, title: '悉尼', image: '/4.jpg' },
//   ]
//
//   return (
//     <div>
//       <div className={'mb-[50px] text-center text-[2.5em]'}>选择您最爱的旅游景点</div>
//       <div className={'overflow-hidden'}>
//         <div className={'card-scroll-track flex w-max gap-10 pl-10'}>
//           {cards.map(item => (
//             <CardItem key={item.id} image={item.image} title={item.title}></CardItem>
//           ))}
//           {cards.map(item => (
//             <CardItem aria-hidden={true} key={item.id} image={item.image} title={item.title}></CardItem>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

export default function TravelCard() {
  const cards = [
    { id: 1, title: '巴黎', image: '/1.jpg' },
    { id: 2, title: '东京', image: '/2.jpg' },
    { id: 3, title: '纽约', image: '/3.jpg' },
    { id: 4, title: '悉尼', image: '/4.jpg' },
  ]
  const scrollContentRef = useRef<HTMLDivElement | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // 启动滚动
  const scrollItems = () => {
    if (isScrolling) return
    console.log('是否滚动1：', isScrolling)

    const scrollContent = scrollContentRef.current!
    const items = Array.from(scrollContent.getElementsByClassName('item')) as HTMLElement[]

    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(scrollContent).gap)
    setIsScrolling(true)
    console.log('是否滚动2：', isScrolling)
    scrollContent.style.transform = `translateX(-${4 * itemWidth}px)`

    // 在过度结束时回调
    const onTransitionEnd = () => {
      // 将第一个项目移到最后，恢复初始位置
      items.forEach(item => scrollContent.appendChild(item))
      scrollContent.style.transition = 'none'
      scrollContent.style.transform = 'translateX(0)'

      console.log('监听之间之后')
      // 确保样式生效后再移除无过度设置
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollContent.style.transition = 'all 10s linear'
          setIsScrolling(false)
        })
      })
    }

    console.log('监听事件之前')
    scrollContent.addEventListener('transitionend', onTransitionEnd, { once: true })
  }

  useEffect(() => {
    // 启动自动滚动
    scrollItems()
  }, [isScrolling])

  // 处理鼠标悬停和离开事件
  const handleMouseEnter = (event: React.MouseEvent) => {
    const currentHtml = event.currentTarget as HTMLElement

    // 设置新的 transform 值，保留 translateX，添加 translateY
    const test = currentHtml.style.transform
    // 如果不包含 translateY，则添加 translateY
    if (!test.includes('translateY')) {
      currentHtml.style.transform += 'translateY(1px)'
    }
    console.log('hhh1:', currentHtml.style.transform)
    currentHtml.style.background = 'red'
    currentHtml.style.transitionDuration = '5s'
  }

  const handleMouseLeave = (event: React.MouseEvent) => {
    const currentHtml = event.currentTarget as HTMLElement

    const test2 = currentHtml.style.transform
    // 如果包含 translateY，则移除它
    if (test2.includes('translateY')) {
      currentHtml.style.transform = currentHtml.style.transform.replace(/translateY\(\d+px\)/, '')
    }
    console.log('hhh2:', currentHtml.style.transform)
    currentHtml.style.background = 'white'
    currentHtml.style.transitionDuration = '10s'
  }

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollContentRef}
        onMouseEnter={event => handleMouseEnter(event)}
        onMouseLeave={event => handleMouseLeave(event)}
        className={'scroll-content flex gap-10 transition-all ease-linear [transition-duration:10s]'}
      >
        {cards.map(item => (
          <CardItem className="item" key={item.id} image={item.image} title={item.title}></CardItem>
        ))}
        {cards.map(item => (
          <CardItem className="item" aria-hidden={true} key={item.id} image={item.image} title={item.title}></CardItem>
        ))}
      </div>
    </div>
  )
}
