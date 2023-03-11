import React from 'react'
import Crossboard from '../components/Crossboard'
import styles from '../styles/styles'

const History = () => {
  return (
    <div className={`${styles.xPaddings} flex pt-28 lg:px-[10%] sm:px-0 flex-col items-center justify-center text-center`}>

        <Crossboard title="History" img="/phone.png" content="I store all the messages on your local storage discarding the worry of data privacy being compromised. You can rollback to your previous responses with just a click." icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#463853" className="w-11 h-11 hover:bounceOrig transition-all duration-1000">
            <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
            <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z" clipRule="evenodd" />
            <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
            </svg>


        } />

    </div>
  )
}

export default History