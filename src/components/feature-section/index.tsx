/** @format */
import FeatureItem from '@/components/feature-section/feature-item'
import { CorrectIcon, LocationIcon, MessageIcon, UsersIcon } from '@/components/icon'

export default function FeatureSection() {
  return (
    <div className={'mx-auto flex w-[90%] justify-between py-[40px] lg:w-[60%]'}>
      <FeatureItem icon={<CorrectIcon></CorrectIcon>}>比较火车票和巴士票的便宜价格</FeatureItem>
      <FeatureItem icon={<LocationIcon></LocationIcon>}>游历 45 个国家/地区的数千个目的地</FeatureItem>
      <FeatureItem icon={<UsersIcon></UsersIcon>}>加入每天使用我们服务的数百万用户</FeatureItem>
      <FeatureItem icon={<MessageIcon></MessageIcon>}>全程提供客户服务</FeatureItem>
    </div>
  )
}
