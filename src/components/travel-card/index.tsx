/** @format */
import { BillIcon, DateIcon, LocationIcon } from '@/components/icon'
import CardItem from '@/components/travel-card/card-item'
import CardInfoItem from '@/components/travel-card/card-info-item'

export default function TravelCard() {
  const cards = [
    { id: 1, title: '巴黎', image: '/1.jpg' },
    { id: 2, title: '东京', image: '/2.jpg' },
    { id: 3, title: '纽约', image: '/3.jpg' },
    { id: 4, title: '悉尼', image: '/4.jpg' },
    { id: 6, title: '旧金山', image: '/6.jpg' },
  ]

  return (
    <div>
      <div className={'mb-[50px] text-center text-[2.5em]'}>选择您最爱的旅游景点</div>
      <div className={'group relative mb-[500px] h-[370px] overflow-hidden'}>
        <CardItem className={'card-item1'} image={cards[0].image} title={'乘船穿越基克拉泽斯群岛'}>
          <CardInfoItem icon={<LocationIcon></LocationIcon>}>锡罗斯岛、帕罗斯岛</CardInfoItem>
          <CardInfoItem icon={<DateIcon></DateIcon>}>2周或更长时间</CardInfoItem>
          <CardInfoItem icon={<BillIcon></BillIcon>}>中国铁路通票</CardInfoItem>
        </CardItem>
        <CardItem className={'card-item2'} image={cards[1].image} title={'追逐北极光'}>
          <CardInfoItem icon={<LocationIcon></LocationIcon>}>汉堡、斯德哥摩尔、基律纳</CardInfoItem>
          <CardInfoItem icon={<DateIcon></DateIcon>}>2周或更长时间</CardInfoItem>
          <CardInfoItem icon={<BillIcon></BillIcon>}>中国铁路通票</CardInfoItem>
        </CardItem>
        <CardItem className={'card-item3'} image={cards[2].image} title={'斯洛文尼亚和克罗地亚列车'}>
          <CardInfoItem icon={<LocationIcon></LocationIcon>}>卢布尔雅那、布莱德湖</CardInfoItem>
          <CardInfoItem icon={<DateIcon></DateIcon>}>2周或更长时间</CardInfoItem>
          <CardInfoItem icon={<BillIcon></BillIcon>}>中国铁路通票</CardInfoItem>
        </CardItem>
        <CardItem className={'card-item4'} image={cards[3].image} title={'罗马及周边地区'}>
          <CardInfoItem icon={<LocationIcon></LocationIcon>}>布拉恰诺、维泰博、伊索拉法尔内塞等</CardInfoItem>
          <CardInfoItem icon={<DateIcon></DateIcon>}>2周或更长时间</CardInfoItem>
          <CardInfoItem icon={<BillIcon></BillIcon>}>中国铁路通票</CardInfoItem>
        </CardItem>
        <CardItem className={'card-item5'} image={cards[2].image} title={'斯洛文尼亚和克罗地亚列车2'}>
          <CardInfoItem icon={<LocationIcon></LocationIcon>}>卢布尔雅那、布莱德湖</CardInfoItem>
          <CardInfoItem icon={<DateIcon></DateIcon>}>2周或更长时间</CardInfoItem>
          <CardInfoItem icon={<BillIcon></BillIcon>}>中国铁路通票</CardInfoItem>
        </CardItem>
        <CardItem className={'card-item6'} image={cards[3].image} title={'罗马及周边地区'}>
          <CardInfoItem icon={<LocationIcon></LocationIcon>}>布拉恰诺、维泰博、伊索拉法尔内塞等</CardInfoItem>
          <CardInfoItem icon={<DateIcon></DateIcon>}>2周或更长时间</CardInfoItem>
          <CardInfoItem icon={<BillIcon></BillIcon>}>中国铁路通票</CardInfoItem>
        </CardItem>
      </div>
    </div>
  )
}
