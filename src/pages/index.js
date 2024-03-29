import Head from 'next/head'
import Image from 'next/image'
import { HeroLink } from '../components/HeroLink'
import { Br2 } from '../components/Br2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { Project } from '../components/Project'

import NextLogo from '../assets/next.svg'
import GatsbyLogo from '../assets/gatsby.svg'
import TailwindLogo from '../assets/tailwind.svg'
import SassLogo from '../assets/sass.svg'


export default function Home() {
  
  return (
    <>
    <Head>
        <title>Aaron Brunet</title>
        <meta name="description" content="Aaron Brunet's portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='flex flex-row h-[4px] w-screen'>
          <div className='top-border bg-blue-600'></div>
          <div className='top-border bg-yellow-600'></div>
          <div className='top-border bg-green-600'></div>
          <div className='top-border bg-red-600'></div>
        </div>
      <main className='min-h-screen p-4 md:p-8 bg-gradient-to-b from-white to-gray-100 w-screen'>
        
        <div className='flex flex-row'>
          <div className='justify-center self-center align-middle'>
            <h1 className='p-0 title-subfont'>Hi, I'm</h1>
            <span className='w-full'><h1 className='pb-8 title-font inline-block'>Aaron</h1><span className='no-select title-font inline-block cursor-pointer hover:animate-wiggle'>👋</span></span>
            <p className='text-xl w-full md:w-3/5 mb-8'>
            <span className='text-2xl mb-8'>I'm a <strong>fullstack developer</strong> based in Orlando, Florida, with a special interest in user-first design, emerging technologies and the changing face of the web.
            </span>
            <Br2 />
            You can connect with me on <HeroLink href='https://www.linkedin.com/in/aaronwbrunet/' classes='border-[#0a66c2]'>LinkedIn</HeroLink>, or check out my <HeroLink href='https://github.com/aaronbrunet' classes='border-yellow-600'>GitHub</HeroLink> to see what I've been working on.
            <br/>
            I'm currently working for <HeroLink href='https://www.servicenow.com/' classes='border-[#81b5a1]'>ServiceNow</HeroLink> as a <span className='font-semibold'>Senior Performance Engineer</span>.
            <Br2 />
            Think I should join your team? Shoot me an <HeroLink href='mailto:contact@aaronbru.net' classes='border-red-600'>email</HeroLink>!</p>
                
          </div>
          {/* <div className=''>Right Column</div>  */}
          </div>
        <div className='py-8 grid '>
            <h3 className='subtitle-font pb-6'>🔨 Tools & Technologies</h3>
            <h4 className='sub-subtitle-font pb-2'>Services & Platforms</h4>
              <div className='w-full flex flex-row pb-4'>
                <div className='tt-item'>AEM</div>
                <div className='tt-item'>ServiceNow</div>
              </div>
            <h4 className='sub-subtitle-font pb-2'>Languages & Frameworks</h4>
              <div className='w-full md:w-2/3 flex flex-row flex-wrap pb-4'>
                <div className='tt-item tag tag-html'>HTML5 <FontAwesomeIcon icon={faHtml5}/></div>
                <div className='tt-item tag tag-css'>CSS3 <FontAwesomeIcon icon={faCss3}/></div>
                <div className='tt-item tag tag-js'>Javascript <FontAwesomeIcon icon={faJs}/></div>
                <div className='tt-item tag tag-react'>React <FontAwesomeIcon icon={faReact}/></div>
                <div className='tt-item tag tag-next'>NextJS <NextLogo fill='currentColor'/></div>
                <div className='tt-item tag tag-gatsby'>GatsbyJS <GatsbyLogo fill='currentColor'/></div>
                <div className='tt-item tag tag-tailwind'>TailwindCSS <TailwindLogo fill='currentColor'/></div>
                <div className='tt-item tag tag-styled'>styled-components 💅</div>
                <div className='tt-item tag tag-sass'>SASS</div>
              </div>
              
          </div>
        <div className='py-8 grid'>
            <h3 className='subtitle-font pb-8'>💻 Projects</h3>
              <div className='w-full grid gap-6 md:grid-cols-2 grid-cols-1'>
                <Project 
                  title='Levi Merchant Financial Consulting'
                  linkHref='https://levimerchant.com/'
                  linkTitle='levimerchant.com'
                  tags={[{title:'React',value:'react'},{title:'GatsbyJS',value:'gatsby'},{title:'TailwindCSS',value:'tailwind'}]}
                  border='border-blue-400'
                  color='blue-400'
                >
                  <div>LeviMerchant.com was created for Levi Merchant Financial Services, a client looking to establish an online presence. The website is in a multi-phase launch; initial launch consists only of a landing page that provides links to the client's Calendly service and social media, as well as information and testimonials. Future features will include blogging and analytics, so while a simple project at first, LeviMerchant.com was created using GatsbyJS to provide plenty of breathing room for future enhancements.</div>
                </Project>
                <Project 
                  title='Portfolio Site'
                  linkHref='https://aaronbrunet.dev/'
                  linkTitle='aaronbru.net / aaronbrunet.dev'
                  gitHubHref='https://github.com/aaronbrunet/aaronbrunetdev-nextjs'
                  tags={[{title:'React',value:'react'},{title:'NextJS',value:'next'},{title:'TailwindCSS',value:'tailwind'}]}
                  border='border-yellow-600'
                  color='yellow-600'
                >
                  <div>
                    This portfolio site was created for multiple purposes; first, to serve as an online resume and project presentation site. Second, to practice the usage of NextJS, React, and TailwindCSS. Third, to serve as a future home for all projects, blogs, applications, and more. Fourthly, to serve as a testbed for any future technologies to play with. Finally, to get me hired.
                  </div>
                </Project>
                <Project 
                  title='Write Like The Wind!'
                  linkHref='https://aaronbrunet.dev/write-sprinter/'
                  linkTitle='aaronbrunet.dev/write-sprinter'
                  gitHubHref='https://github.com/aaronbrunet/write-sprinter'
                  tags={[{title:'React',value:'react'},{title:'TailwindCSS',value:'tailwind'}]}
                  border='border-[#b94666]'
                  color='[#b94666]'
                >
                  <div>Write Like The Wind was written to facilitate writing sprints, such as for a creative writing class, blogging, journaling, or a competition like NaNoWriMo - in fact, the impetus for the project was the sad attempts at manual timekeeping and word-tracking for a NaNoWriMo writing group. Choose the length of time, click 'Start', and get writing! Future enhancements will allow you to race against your friends.</div>
                </Project>
                <Project 
                  title='R&ller: Prepare to Die'
                  linkHref='https://aaronbrunet.dev/prepare-to-die/'
                  linkTitle='aaronbrunet.dev/prepare-to-die/'
                  gitHubHref='https://github.com/aaronbrunet/prepare-to-die'
                  tags={[{title:'React',value:'react'},{title:'styled-components',value:'styled'}]}
                  border='border-[#2EA9BD]'
                  color='[#2EA9BD]'
                >
                  <div>R&ller was an introductory experiment into the world of React. Built to act as a dice roller for a tabletop game like D&D, R&ller aimed to provide every kind of dice used, as well as modifiers.</div>
                </Project>
                <Project 
                  title='A Friendly Tip'
                  linkHref='https://aaronbrunet.dev/friendly-tip/'
                  linkTitle='aaronbrunet.dev/friendly-tip/'
                  gitHubHref='https://github.com/aaronbrunet/friendly-tip'
                  tags={[{title:'React',value:'react'},{title:'styled-components',value:'styled'},{title:'SASS',value:'sass'}]}
                  border='border-[#feb1b1]'
                  color='[#feb1b1]'
                >
                  <div><b>Best viewed on mobile!</b><br/>Tired of fumbling for the Calculator app at the end of a meal and working out .2 x subtotal, I wrote 'A Friendly Tip' as a practice of design using AdobeXD, and to make settling up after dinner a little bit easier.</div>
                </Project>
                
                
              </div>
          </div>
        <footer className='w-full justify-center flex mt-10'>
          <a
            href="https://aaronbru.net"
            target="_blank"
            rel="noopener noreferrer"
          >          
            Aaron Brunet © {new Date().getFullYear()}
          </a>
      </footer>
      </main>

      
</>)}
