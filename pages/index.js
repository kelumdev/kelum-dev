import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kelum chathuranga | UI Engineer in Sri Lanka</title>
        <meta name="description" content="Kelum is a UI engineer in Sri Lanka, Front End Lead at Amplifyn | React | HTML5 | CSS3 | SASS | BEM | GIT | TAILWIND | jQuery | Wordpress | SEO | Agile | Team Work | Leadership | Project Management | Design Systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-center flex flex-col items-center justify-center py-[150px]'>
        <Image
          src="/kelum-chathuranga.jpeg"
          alt="kelum Chathuranga - UI Engineer"
          width={200}
          height={200}
          class="max-w-full h-auto rounded-full"
        />
        <h1 className='text-3xl font-bold mb-[18px] mt-[32px]'>
          Kelum Chathuranga - UI Engineer
        </h1>
        <h5 className='mb-[12px] font-semibold'>React | HTML5 | CSS3 | SASS | BEM | GIT | TAILWIND | jQuery | Wordpress | SEO | Agile | Team Work | Leadership | Project Management | Design Systems</h5>
        <p className='mb-[32px]'>I am a UI/UX Engineer with 5+ years (and counting) of well-rounded experience in the web development industry. I love to craft awesome web sites, and Web Applications using the latest web standards and integrate usability, Cutting edge technologies, and User experience design. I always prefer clean and elegant coding, and It makes me feel sad to see bad designs.</p>
        <Link href="https://www.linkedin.com/in/kelum-chathuranga-liyanage/" target="_blank"><span className='text-cyan-600 underline cursor-pointer'>Visit profile</span></Link>
      </main>
      <span className='text-xs bg-orange-200 p-4'>This site is under construction, Please note this is only an introduction. We will be live soon.</span>
      <p>What are the skills of a UI developer?
UI developers need certain skills and personality traits to be successful in the job and create websites and applications that are incredibly functional. UI developers employ both hard and soft skills to collaborate with designers, engineers, and managers. They use various hard skills, such as proficiency in several programming languages and design software. Knowing your present skill set will enable you to decide which new abilities you need to acquire or develop in order to become a better UI developer.</p>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-242800124-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-242800124-1');
        `}
      </Script>
    </div>
  )
}
