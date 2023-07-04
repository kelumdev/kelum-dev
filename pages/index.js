import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kelum chathuranga | UI Engineer at amplifyn in Sri Lanka</title>
        <meta name="description" content="Kelum is a UI engineer in Sri Lanka, Front End Lead at amplifyn | React | HTML5 | CSS3 | SASS | BEM | GIT | TAILWIND | jQuery | Wordpress | SEO | Agile | Team Work | Leadership | Project Management | Design Systems" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.kelum.dev" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=FESMCN2FYR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FESMCN2FYR');
        `}
      </Script>

      <main className='text-center flex flex-col items-center justify-center py-[150px] bg-[#141313] w-full h-screen main'>
          <div className='home-container'>
          <h1 className="text-[100px] font-bold text-white main-heading uppercase">
            Coming Soon
          </h1>
          <p className='font-normal text-white'>We will be celebrating the launch of our new site very soon...!</p>
          </div>
      </main>
      </div>
  )
}
