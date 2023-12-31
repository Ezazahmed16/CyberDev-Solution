import SiteNavBar from '@/components/SiteNavbar';
import './globals.css'
import NextTopLoader from 'nextjs-toploader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'CyberDev Solution - Digital IT Services',
  description: 'Empowering businesses with innovative digital IT solutions at CyberDev.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#F55F1D"
          initialPosition={0.08}
          crawlSpeed={100}
          height={3}
          showSpinner={true}
          easing="ease"
          speed={200}
          zIndex={1600}
        />
        <SiteNavBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
