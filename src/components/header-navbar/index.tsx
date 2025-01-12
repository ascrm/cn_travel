"use client";

import UserAvatar from "@/components/header-navbar/user-avatar";
import { Button } from "@mui/material";
import HeaderItem from "@/components/header-navbar/header-item";

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
        <HeaderItem>旅行计划</HeaderItem>
        <HeaderItem>团购服务</HeaderItem>
        <HeaderItem>会员中心</HeaderItem>
        <HeaderItem>历史记录</HeaderItem>
      </div>
    </div>
  );
}
