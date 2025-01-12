"use client";

import UserAvatar from "@/components/header-navbar/user-avatar";

export default function headerNavbar() {
  return (
    <div className={"h-[70px] flex-between-box px-[10%]"}>
      <div className={"flex-center-box h-full"}>
        <img className={"h-[1.8em]"} src="/logo.svg" alt="" />
        <div className={"text-[2em] ml-[5px] font-comfortaa font-[1000]"}>
          CN Travel
        </div>
      </div>
      <div className={"flex-center-box h-full"}>
        <UserAvatar></UserAvatar>
        <div>旅行计划</div>
        <div className={"mx-[40px]"}>我的预定</div>
        <div>历史记录</div>
      </div>
    </div>
  );
}
