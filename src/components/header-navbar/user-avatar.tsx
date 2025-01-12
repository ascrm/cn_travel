import UserInfo from "@/components/header-navbar/user-info";

export default function UserAvatar() {
  return (
    <div className="relative mr-[40px]">
      <div
        className="cursor-pointer"
        // onMouseEnter={(e) => {
        //   const dropdown = e.currentTarget.nextElementSibling as HTMLElement;
        //   if (dropdown) dropdown.style.opacity = "1";
        // }}
        // onMouseLeave={(e) => {
        //   const dropdown = e.currentTarget.nextElementSibling as HTMLElement;
        //   if (dropdown) dropdown.style.opacity = "0";
        // }}
      >
        <img
          className="rounded-full w-[2em] z-[10] hover:scale-[2.5] hover:transform-scale-top hover:translate-y-[10px] transition-cartoon"
          src="/avatar.jpg"
          alt="Avatar"
        />
      </div>
      <UserInfo></UserInfo>
    </div>
  );
}
