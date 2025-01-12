"use client";

import { Button } from "@/components/ui/button";
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
        <Button variant="ghost">旅行计划</Button>
        <Button variant="ghost" className={"mx-[40px]"}>
          我的预定
        </Button>
        <Button variant="ghost">历史记录</Button>
      </div>
    </div>
  );
}
