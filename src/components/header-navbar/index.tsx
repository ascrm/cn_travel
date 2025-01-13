"use client";

import UserAvatar from "@/components/header-navbar/user-avatar";
import HeaderItem from "@/components/header-navbar/header-item";
import Search from "@/components/header-navbar/search";
import Image from "next/image";

export default function headerNavbar() {
  return (
    <div className={"h-[70px] flex justify-around items-center "}>
      <div className={"flex-center-box h-full"}>
        <Image src="/logo.svg" alt="" width={40} height={40} />
        <div className={"text-[2em] ml-[5px] font-comfortaa font-[1000]"}>
          CN Travel
        </div>
      </div>
      <Search></Search>
      <div className="bg-blue-500 text-white p-4 rounded-lg">Hello, World!</div>
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
