import UserInfoItem from "@/components/header-navbar/user-info-item";

export default function UserInfo() {
  return (
    <div className="absolute opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-[10px] transition-cartoon rounded-lg top-[60px] left-[50%] translate-x-[-50%] w-[300px] border-solid border-2">
      <div className={"text-[2em] font-bold mt-[60px] text-center"}>ascrm</div>
      <div className={"text-center text-[0.8em] mb-[10px] text-gray-500"}>
        @2339621373@qq.com
      </div>
      <UserInfoItem content={"我的订单"}></UserInfoItem>
      <UserInfoItem content={"我的预定"}></UserInfoItem>
      <UserInfoItem content={"退出登录"}></UserInfoItem>
    </div>
  );
}
