import Image from 'next/image'
import { Inter } from 'next/font/google'
import Subscribe from '@/components/Subscribe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      
      <Subscribe />
    </div>
  )
}
