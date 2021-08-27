import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  
  return (
    <>
    <Head>
        <title>Aaron Brunet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    {/* <div className='grid place-items-center min-h-screen'>
          <div className='p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6'>
          <div className="h-16 shadow xs:h-auto square">Grid</div>
          <div className="h-16 shadow xs:h-auto square">Grid</div>
          <div className="h-16 shadow xs:h-auto square">Grid</div>
          <div className="h-16 shadow xs:h-auto square">Grid</div>
          </div>

        </div> */}
 <main className='min-h-screen p-12'>
      
      <h1 className='text-5xl pb-8'>Hi, I'm Aaron 👋</h1>
      <h3 className='text-2xl'>
          Welcome to <a className='text-blue-500 border-b-2 border-blue-500' href="https://aaronbrunet.dev">aaronbrunet.dev!</a>
        </h3>

        <p className='text-xl'>
        I'm a developer based in Orlando, Florida, with a special interest in emerging technologies and the changing face of the web.
        </p>      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://aaronbru.net"
          target="_blank"
          rel="noopener noreferrer"
        >          
          Aaron Brunet © {new Date().getFullYear()}
        </a>
      </footer>
</>)}
