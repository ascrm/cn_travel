import UserInfoItem from "@/components/header-navbar/user-info-item";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function UserInfo() {
  return (
    <div className="absolute opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-[10px] transition-cartoon rounded-lg top-[60px] left-[50%] ml-[-20px] translate-x-[-50%] w-[300px] border-solid border-2">
      <div className={"text-[2em] font-bold mt-[60px] text-center"}>ascrm</div>
      <div className={"text-center text-[0.8em] mb-[10px] text-gray-500"}>
        @2339621373@qq.com
      </div>
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
  );
}
