/** @format */

import UserInfoItem from '@/components/header-navbar/user-info-item'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

export default function UserInfo() {
  return (
    <div className="pointer-events-none absolute left-[50%] top-[60px] z-10 ml-[-20px] w-[300px] translate-x-[-50%] rounded-lg border-2 border-solid bg-white p-[10px] opacity-0 transition-cartoon group-hover:pointer-events-auto group-hover:opacity-100">
      <div className={'mt-[60px] text-center text-[2em] font-bold'}>ascrm</div>
      <div className={'mb-[10px] text-center text-[0.8em] text-gray-500'}>@2339621373@qq.com</div>
      <UserInfoItem>
        <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>个人中心
      </UserInfoItem>
      <UserInfoItem>
        <DescriptionOutlinedIcon></DescriptionOutlinedIcon>我的订单
      </UserInfoItem>
      <UserInfoItem>
        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>我的预定
      </UserInfoItem>
      <UserInfoItem>
        <LogoutOutlinedIcon></LogoutOutlinedIcon>退出登录
      </UserInfoItem>
    </div>
  )
}
