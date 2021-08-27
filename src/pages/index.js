import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
      
      <h1 className='text-5xl'>Hi, I'm Aaron 👋</h1>
      <h3 className='text-2xl'>
          Welcome to <a className='text-blue-500 border-b-2 border-blue-500' href="https://aaronbrunet.dev">aaronbrunet.dev!</a>
        </h3>

        <p className='text-xl'>
        I'm a developer based in Orlando, Florida, with a special interest in emerging technologies and the changing face of the web.
        </p>      

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          </a>
      </footer>
</>)}
