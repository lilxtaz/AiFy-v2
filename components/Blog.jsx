import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div >
        <div className='relative' >
        <div>

            <img src="/blog-test.jpg" />

        </div>

        <div className='flex justify-between items-start backdrop-blur-md absolute bottom-[0%] w-full text-white px-12 h-[20%] pt-7'>

            <div>

                <h1>Olivia Rhye</h1>
                <p className=' py-1 font-light ' >18 March 2023</p>

            </div>

            <h1>Design</h1>

        </div>
        </div>

        <Link href='/' >
        <div className=' py-8' >

            <h1 className=' text-blue-gray-900 text-2xl underline font-semibold pb-5 ' >UX review presentations</h1>
            <p className=' text-blue-gray-800 text-lg opacity-70 tracking-tight pr-20 leading-relaxed mb-8 font-medium' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            <div className=' flex items-center hover:underline '>

            <h1 className=' text-blue-gray-900 text-lg font-semibold pb-2 pr-1' >Read More</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>


            </div>

        </div>
        </Link>


    </div>
  )
}

export default Blog