/** @format */
'use client'

import '@splidejs/splide/dist/css/splide.min.css'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CarouselSectionItem from '@/components/carousel-section/carousel-section-item'
import Autoplay from 'embla-carousel-autoplay'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const carouselItems = [
  {
    image: '/carousel1.jpg',
    description: '“坐火车旅行不仅仅是从 A 地到 B 地。您的旅程从车站就开始了，其中的体验和邂逅都是无价的。”',
    author: '布拉姆',
  },
  {
    image: '/carousel2.jpg',
    description: '“我可以自由地按照自己的节奏前行，寻找意想不到的冒险，欣赏壮观的风景，发现自然之美。简而言之，这是一次独特而难忘的冒险。”',
    author: '卢卡斯',
  },
  {
    image: '/carousel3.jpg',
    description:
      '“看到不同国家的火车如何运行，以及欧洲铁路网如何相互连接，真是太酷了。我迫不及待地想看到更多的国际列车，希望国际铁路旅行成为新常态！”',
    author: '佛洛里斯',
  },
  {
    image: '/carousel4.jpg',
    description:
      '“我喜欢用我的 Chinese Pass 探索欧洲！它是我留学计划的完美补充，也是宝贵的资源！我能够参观这么多地方，我迫不及待地想回来参观更多地方！”',
    author: '泰勒',
  },
]

export default function CarouselSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [api, setApi] = useState<CarouselApi>()

  return (
    <div className={'my-[200px] bg-orange-50 py-[5em]'}>
      <Carousel
        onMouseEnter={() => (plugin.current.options.stopOnMouseEnter = true)}
        onMouseLeave={() => (plugin.current.options.stopOnMouseEnter = false)}
        plugins={[plugin.current]}
        setApi={setApi}
        opts={{ loop: true }}
        className="mx-auto w-[70%]"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="w-full">
              <CarouselSectionItem carouselItem={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={'left-[-50px] h-[50px] w-[50px]'} />
        <CarouselNext className={'right-[-50px] h-[50px] w-[50px]'} />
      </Carousel>
      <div className={'mt-[4em] gap-4 flex-center-box'}>
        {carouselItems.map((_, index) => (
          <div
            onClick={() => {
              setActiveIndex(index)
              api?.scrollTo(index)
            }}
            key={index}
            className={cn('h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-gray-300', activeIndex == index && 'bg-orange-500')}
          ></div>
        ))}
      </div>
    </div>
  )
}
