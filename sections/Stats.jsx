import React from 'react'
import Props from '../components/Props'
import styles from '../styles/styles'

const Stats = () => {
  return (
    <div className={`${styles.xPaddings} flex pt-28 lg:px-[10vw] flex-col items-center justify-center text-center`}>
        
        <div className='flex flex-wrap justify-center items-center gap-5 pb-20'>
        <Props title='5K+ Users' content='The AiFy community is exponentially increasing everyday. Join in on the ride and be a part of the future.' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#463853" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
        } />

        <Props title='Data Encryption' content='All the data is encrypted while transferring. No data is mainpulated or leaked during transmission.' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#463853" className="w-10 h-10">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
            </svg>
        }/>

        <Props title='Highly Rated' content="I am one of the highest rated GPT application out there. And there's a reason for it, I am great at my job. " icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#463853" className="w-10 h-10">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
        }/>
        
        </div>
    
    </div>
  )
}

export default Stats