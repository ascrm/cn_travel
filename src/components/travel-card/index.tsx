/** @format */
'use client'

import CardItem from '@/components/travel-card/card-item'
import { useEffect, useRef, useState } from 'react'

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
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

  // 启动滚动
  const scrollItems = () => {
    if (isScrolling) return

    console.log('数据')

    const scrollContent = scrollContentRef.current!
    const items = Array.from(scrollContent.getElementsByClassName('item')) as HTMLElement[]

    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(scrollContent).gap)
    setIsScrolling(true)
    scrollContent.style.transform = `translateX(-${4 * itemWidth}px)`

    // 在过渡结束时回调
    const onTransitionEnd = () => {
      // 将第一个项目移到最后，恢复初始位置
      items.forEach(item => {
        scrollContent.appendChild(item)
      })
      scrollContent.style.transition = 'none'
      scrollContent.style.transform = 'translateX(0)'

      // 确保样式生效后再移除无过渡设置
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollContent.style.transition = 'transform 10s linear'
          setIsScrolling(false)
        })
      })
    }

    scrollContent.addEventListener('transitionend', onTransitionEnd, { once: true })
  }

  useEffect(() => {
    console.log('进来了吗')
    // 启动自动滚动
    scrollItems()
  }, [isScrolling])

  // 添加鼠标悬停事件监听器
  const handleMouseEnter = () => {
    // if (timeoutId) clearTimeout(timeoutId)
  }

  const handleMouseLeave = () => {
    // setTimeoutId(setTimeout(scrollItems, 2000))
  }

  return (
    <div className="overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div ref={scrollContentRef} className={'scroll-content flex gap-10 transition-all ease-linear [transition-duration:10s]'}>
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
