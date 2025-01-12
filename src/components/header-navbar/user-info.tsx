export default function UserInfo() {
  return (
    <div className="absolute p-[10px] transition-cartoon rounded-lg top-[60px] left-[50%] translate-x-[-50%] h-[400px] w-[300px] border-solid border-2">
      <div className={"text-[2em] font-bold mt-[60px] text-center"}>ascrm</div>
      <div className={"text-center text-[0.8em] text-gray-500"}>
        @2339621373@qq.com
      </div>

      <div className={"user-info-item"}>我的订单</div>
      <div className={"user-info-item"}>我的预定</div>
      <div className={"user-info-item"}>退出登录</div>
    </div>
  );
}
