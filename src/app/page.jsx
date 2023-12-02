import Image from 'next/image'
import { Inter } from 'next/font/google'
import Subscribe from '@/components/Subscribe'
import HeroSection from '@/components/HeroSection'
import StatList from '@/components/StatList'
import BrandList from '@/components/BrandList'
import WorkList from '@/components/WorkList'
import FeaturedProjects from '@/components/FeaturedProjects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandList />
      <WorkList />
      <StatList />
      <FeaturedProjects />
      <Subscribe />
    </div>
  )
}
