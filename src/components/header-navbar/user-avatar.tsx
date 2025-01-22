/** @format */

import UserInfo from '@/components/header-navbar/user-info'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function UserAvatar() {
  return (
    <div className="group relative">
      <Avatar className="z-20 h-[3em] w-[3em] cursor-pointer transition-cartoon group-hover:origin-top group-hover:translate-x-[-20px] group-hover:translate-y-[10px] group-hover:scale-[2.5]">
        <AvatarImage src="/avatar.jpg" alt="ASCRM" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <UserInfo></UserInfo>
    </div>
  )
}
