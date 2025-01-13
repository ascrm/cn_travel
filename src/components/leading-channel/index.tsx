/** @format */
import LeadingItem from '@/components/leading-channel/leading-item'
import Image from 'next/image'

export default function LeadingChannel() {
  return (
    <div className={'mx-auto mb-[200px] w-[60%]'}>
      <div className={'mb-[50px] text-center text-[2.5em]'}>只需 4 步简单，即可开启您的 China 冒险之旅</div>
      <div className={'grid grid-cols-1 gap-14 lg:grid-cols-2'}>
        <LeadingItem
          className={'bg-amber-200 hover:bg-amber-300'}
          image={<Image src="/1-Planyourroute.svg" alt="" width={128} height={128} />}
          index={1}
          indexClass={'bg-amber-400'}
          title={'规划路线'}
          step={'开始规划'}
        >
          计划您要去的地方以及哪些火车可以带您到达那里。
        </LeadingItem>
        <LeadingItem
          className={'bg-pink-200 hover:bg-pink-300'}
          image={<Image src="/2-FindyourPass.svg" alt="" width={128} height={128} />}
          index={2}
          indexClass={'bg-pink-400'}
          title={'查找您的车票'}
          step={'探索通行证'}
        >
          使用全国通票通票旅行 - 由您决定。
        </LeadingItem>
        <LeadingItem
          className={'bg-green-200 hover:bg-green-300'}
          image={<Image src="/3-Reserveyourseats.svg" alt="" width={128} height={128} />}
          index={3}
          indexClass={'bg-green-400'}
          title={'预留座位'}
          step={'查看预定'}
        >
          你们的火车需要预订座位吗？尽早预订吧！
        </LeadingItem>
        <LeadingItem
          className={'bg-blue-200 hover:bg-blue-300'}
          image={<Image src="/4-ActivateyourPass.svg" alt="" width={128} height={128} />}
          index={4}
          indexClass={'bg-blue-400'}
          title={'激活您的通票'}
          step={'了解方法'}
        >
          将您的通票添加到应用程序，激活它，然后乘坐火车！
        </LeadingItem>
      </div>
    </div>
  )
}
