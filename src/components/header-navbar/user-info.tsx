/** @format */

import UserOptionItem from '@/components/header-navbar/user-option-item'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

export default function UserInfo() {
  return (
    <div className={'w-[300px]'}>
      <div className={'mt-[60px] text-center text-[2em] font-bold text-gray-800'}>ascrm</div>
      <div className={'mb-[10px] text-center text-[0.8em] text-gray-500'}>@2339621373@qq.com</div>
      <UserOptionItem>
        <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>个人中心
      </UserOptionItem>
      <UserOptionItem>
        <DescriptionOutlinedIcon></DescriptionOutlinedIcon>我的订单
      </UserOptionItem>
      <UserOptionItem>
        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>我的预定
      </UserOptionItem>
      <UserOptionItem>
        <LogoutOutlinedIcon></LogoutOutlinedIcon>退出登录
      </UserOptionItem>
    </div>
  )
}
