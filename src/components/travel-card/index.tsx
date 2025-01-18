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
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const isTransitionPrevented = false // 标志位，控制是否阻止事件

  // 启动滚动
  const scrollItems = () => {
    if (isScrolling) return

    const scrollContent = scrollContentRef.current!
    const items = Array.from(scrollContent.getElementsByClassName('item')) as HTMLElement[]

    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(scrollContent).gap)
    setIsScrolling(true)
    scrollContent.style.transform = `translateX(-${4 * itemWidth}px)`

    // 在过渡结束时回调
    const onTransitionEnd = () => {
      if (isTransitionPrevented) return

      // 将第一个项目移到最后，恢复初始位置
      items.forEach(item => {
        scrollContent.appendChild(item)
      })
      scrollContent.style.transition = 'none'
      scrollContent.style.transform = `translateX(-${4 * itemWidth}px)`

      console.log('transform已经更改')
      // 确保样式生效后再移除无过渡设置
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollContent.style.transition = 'all 20s linear'
          setIsScrolling(false)
        })
      })
    }

    console.log('鼠标悬空 isTransitionPrevented：', isTransitionPrevented)
    scrollContent.addEventListener('transitionend', onTransitionEnd, { once: true })
  }

  useEffect(() => {
    // 启动自动滚动
    scrollItems()
  }, [isScrolling])

  // 处理鼠标悬停和离开事件
  const handleMouseEnter = (event: React.MouseEvent) => {
    const htmlTarget = event.target
    const currentHtml = event.currentTarget as HTMLElement

    // 设置新的 transform 值，保留 translateX，添加 translateY
    const test = currentHtml.style.transform
    // 检查是否包含 translateY
    if (!test.includes('translateY')) {
      // 如果不包含 translateY，则添加 translateY(0)
      currentHtml.style.transform += 'translateY(1px)'
      console.log('hhh1:', currentHtml.style.transform)
    } else {
      // 如果已经包含 translateY，则不做任何操作
      currentHtml.style.transform = currentHtml.style.transform.replace(/translateY\(\d+px\)/, 'translateY(1px)')
      console.log('hhh2:', currentHtml.style.transform)
    }
    currentHtml.style.background = 'red'
    currentHtml.style.transitionDuration = '5s' // 设置过渡时长为 20 秒
  }

  const handleMouseLeave = (event: React.MouseEvent) => {
    const htmlTarget = event.target
    const currentHtml = event.currentTarget as HTMLElement

    // 使用正则表达式替换 translateY 的值
    const updatedString = currentHtml.style.transform.replace(/translateY\(\d+px\)/, 'translateY(0)')
    console.log('hhh3:', updatedString)
    currentHtml.style.transform = updatedString
    currentHtml.style.background = 'white'
    currentHtml.style.transitionDuration = '20s' // 设置过渡时长为 20 秒
  }

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollContentRef}
        onMouseEnter={event => handleMouseEnter(event)}
        onMouseLeave={event => handleMouseLeave(event)}
        className={'scroll-content flex gap-10 transition-all ease-linear [transition-duration:20s]'}
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
