/** @format */

import UserInfo from '@/components/header-navbar/user-info'
import { Avatar } from '@mui/material'

export default function UserAvatar() {
  return (
    <div className="group relative">
      <Avatar
        className="group-hover:transform-scale-top z-[10] w-[2em] cursor-pointer transition-cartoon group-hover:translate-x-[-20px] group-hover:translate-y-[10px] group-hover:scale-[2.5]"
        alt="Remy Sharp"
        src="/avatar.jpg"
      />
      <UserInfo></UserInfo>
    </div>
  )
}
