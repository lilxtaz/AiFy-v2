import { Poppins } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Features from '../../sections/Features'
import Hero from '../../sections/Hero'
import Properties from '../../sections/Properties'
import History from '../../sections/History'
import '../../styles/globals.css'
import Stats from '../../sections/Stats'
import Download from '../../sections/Download'
import FAQ from '../../sections/FAQ'
import Footer from '../../sections/Footer'
import ScrollToTop from '../../components/ScrollToTop'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '800'] })

export default function Home() {
  return (
    <main className={poppins.className}>

      <ScrollToTop />

      <div className="bg-[url('../public/bg-header.png')] bg-cover relative after:content-[''] after:absolute after:bg-white after:h-[220px] after:bottom-[-100px] after:left-0 after:right-0 after:-skew-y-6">
          <Navbar />
          <Hero />
      </div>

      <div className='relative'>
        <Features />
      </div>

      <div>

      <Properties />

      </div>
      <div>

        <History />

      </div>
      <div >

        <Stats />

      </div>

      <div>

        <Download />

      </div>

      <div>

        <FAQ />

      </div>

      <div>

        <Footer />

      </div>
 
    </main>
  )
}
