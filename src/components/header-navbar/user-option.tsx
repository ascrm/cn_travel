/** @format */

import UserInfo from '@/components/header-navbar/user-info'
import UserSignIn from '@/components/header-navbar/user-sign-in'

export default function UserOption() {
  return (
    <div className="pointer-events-none absolute left-[50%] top-[60px] z-10 ml-[-20px] translate-x-[-50%] rounded-lg bg-white p-[10px] opacity-0 shadow-md transition-cartoon group-hover:pointer-events-auto group-hover:opacity-100">
      <UserInfo></UserInfo>
      {/*<UserSignIn></UserSignIn>*/}
    </div>
  )
}
