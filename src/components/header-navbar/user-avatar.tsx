import UserInfo from "@/components/header-navbar/user-info";
import { Avatar } from "@mui/material";

export default function UserAvatar() {
  return (
    <div className="group relative mr-[40px] ">
      <Avatar
        className="cursor-pointer w-[2em] z-[10] group-hover:scale-[2.5] group-hover:transform-scale-top group-hover:translate-y-[10px] group-hover:translate-x-[-20px] transition-cartoon"
        alt="Remy Sharp"
        src="/avatar.jpg"
      />
      <UserInfo></UserInfo>
    </div>
  );
}
