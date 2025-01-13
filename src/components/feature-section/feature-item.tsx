/** @format */
import React from 'react'

export default function FeatureItem({ icon, children }: { icon: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className={'flex w-[18%] flex-col items-center text-center'}>
      <div>{icon}</div>
      <div className={'py-[5px]'}>{children}</div>
    </div>
  )
}
