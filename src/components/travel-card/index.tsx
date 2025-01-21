/** @format */
import CardItem from '@/components/travel-card/card-item'

const cards = [
  { id: 1, title: '巴黎', image: '/1.jpg' },
  { id: 2, title: '东京', image: '/2.jpg' },
  { id: 3, title: '纽约', image: '/3.jpg' },
  { id: 4, title: '悉尼', image: '/4.jpg' },
]

export default function TravelCard() {
  return (
    <div>
      <div className={'mb-[50px] text-center text-[2.5em]'}>选择您最爱的旅游景点</div>
      <div className={'overflow-hidden'}>
        <div className={'card-scroll-track flex w-max gap-10 pl-10'}>
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
