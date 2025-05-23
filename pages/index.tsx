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
        <div className="text-center text-md m-4 invisible">
          <p className="p-2">-</p>
        </div>
        <div className="text-center text-md m-4">
          <p className="p-2">
            <Image 
              src="/infernalcover.jpg" 
              alt="graveseer infernal single"
              width={800}
              height={500}/>
          </p>
          <p className="m-4 p-2">
            <Link href='https://recordu.lnk.to/WnEn4e'>Listen to our new single Infernal</Link>
          </p>
        </div>
        <div className="text-center text-md m-4 invisible">
          <p className="p-2">-</p>
        </div>
        <div className="text-center text-md m-4">
          <p className="p-2">
            <Image 
              src="/2025-jul-6-humbleheart.jpg" 
              alt="graveseer humble heart jul 6 2025"
              width={800}
              height={500}/>
          </p>
          <p className="m-4 p-2 invisible">
            <Link href='https://www.theheartob.com'>Pre-Sale Tickets Here</Link>
          </p>
        </div>
        <div className="text-center text-md m-4 invisible">
          <p className="p-2">-</p>
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