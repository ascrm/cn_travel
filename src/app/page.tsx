/** @format */
import HeaderNavbar from '@/components/header-navbar'
import HomeImage from '@/components/home-image'
import FeatureSection from '@/components/feature-section'
import LeadingChannel from '@/components/leading-channel'
import TravelCard from '@/components/travel-card'

export default function Page() {
  return (
    <div>
      <HeaderNavbar></HeaderNavbar>
      <HomeImage></HomeImage>
      <FeatureSection></FeatureSection>
      <LeadingChannel></LeadingChannel>
      <TravelCard></TravelCard>
    </div>
  )
}
