/** @format */
import Image from 'next/image'
import { FaceBookIcon, GitHubIcon, QQIcon, TwitterIcon, WeiChatIcon } from '@/components/icon'
import { MailCheck, UserRoundPen } from 'lucide-react'

const icons = [
  {
    icon: <GitHubIcon className={'absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]'}></GitHubIcon>,
  },
  {
    icon: <FaceBookIcon className={'absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]'}></FaceBookIcon>,
  },
  {
    icon: <TwitterIcon className={'absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]'}></TwitterIcon>,
  },
  {
    icon: <QQIcon className={'absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]'}></QQIcon>,
  },
  {
    icon: <WeiChatIcon className={'absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]'}></WeiChatIcon>,
  },
]

export default function FooterSection() {
  return (
    <div className={'bg-gray-800 pb-[4em] pt-[2em] text-white'}>
      <div className={'mx-auto grid w-[80%] grid-cols-[1fr_2fr_1fr]'}>
        <div className={'flex-center-box'}>
          <Image width={64} height={64} src={'/logo.svg'} alt={'R'} />
          <div className={'cursor-default px-[14px] font-comfortaa text-[2em] font-bold'}>CN Travel</div>
        </div>
        <div className={'flex items-center'}>
          {icons.map((item, index) => (
            <div key={index} className={'relative mx-[10px] h-[48px] w-[48px] rounded-[50%] border-2 border-solid border-gray-100'}>
              {item.icon}
            </div>
          ))}
        </div>
        <div>
          <div className={'flex items-center gap-[10px]'}>
            <UserRoundPen />
            <div className={'font-comfortaa text-[1.2em]'}>ascrm</div>
          </div>
          <div className={'mt-[5px] flex items-center gap-2.5'}>
            <MailCheck />
            <div>2339621373@qq.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}
