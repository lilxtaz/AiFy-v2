import { Poppins } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Features from '../../sections/Features'
import Hero from '../../sections/Hero'
import '../../styles/globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '800'] })

export default function Home() {
  return (
    <main className={poppins.className}>
      
      <div className=" gradient relative after:content-[''] after:absolute after:bg-white after:h-[220px] after:bottom-[-100px] after:left-0 after:right-0 after:-skew-y-6">

        <Navbar />
        <Hero />
      </div>

      <div className='relative'>
        <Features />
      </div>

    </main>
  )
}
