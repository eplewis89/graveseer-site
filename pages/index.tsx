import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const Page = () => {
  return (
    <>
      <Head>
        <title>Graveseer - San Diego Doom Metal Band</title>
        <meta property="og:title" content="Graveseer - San Diego Doom Metal Band" key="title" />
        <meta name="title" content="Graveseer - San Diego Doom Metal Band"/>
        <meta name="description" content="Graveseer is a doom metal band from San Diego, California"/>
        <meta name="keywords" content="doom metal, metal, san diego, california, band, live music, music, musician, album, stoner metal, stoner, doom, sludge, sludge metal, doommetal, stonermetal, sludgemetal, doom rock, rock"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
      </Head>
      <div className="md:w-full lg:w-1/3">
        <div className="text-center text-md m-4">
          <p className="p-2">
            <Image 
              src="/2024-sep-1-humbleheart.jpg" 
              alt="graveseer at humble heart san diego 1 sep 2024"
              width={800}
              height={500}/>
          </p>
          <p className="p-2">
            Tickets: <Link href='https://www.theheartob.com/event-details-registration/ten-twenty-kill-benthic-eels-and-more' target='_blank'>Humble Heart</Link>
          </p>
        </div>
        <div className="text-center text-md m-4 invisible">
          <p className="p-2 animate-[appear_cubic-bezier(0.4,_0,_0.2,_1)_10000ms_forwards]">
            <Image
              src="/graveseer-skull-dead.png"
              alt="graveseer skull logo"
              width={800}
              height={500}/>
          </p>
        </div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
       {page}
    </Layout>
  )
}


export default Page