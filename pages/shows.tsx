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
        <title>Graveseer - Past Shows - San Diego Doom Metal Band</title>
        <meta property="og:title" content="Graveseer - Past Shows - San Diego Doom Metal Band" key="title" />
        <meta name="title" content="Graveseer - Past Shows - San Diego Doom Metal Band"/>
        <meta name="description" content="Graveseer is a doom metal band from San Diego, California"/>
        <meta name="keywords" content="doom metal, metal, san diego, california, band, live music, music, musician, album, stoner metal, stoner, doom, sludge, sludge metal, doommetal, stonermetal, sludgemetal, doom rock, rock"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
      </Head>
      <h1 className="text-center text-4xl m-4">Past Shows</h1>
      <div className="text-center text-md m-4">
        <p className="p-2">
          For booking inquiries, please contact us at <Link href='mailto:booking@graveseerband.com'>booking@graveseerband.com</Link>
        </p>
      </div>
      <div className="text-center text-md m-4">
        <p className="p-2">
          <Image 
            src="/2024-jan-12-checafe.jpg" 
            alt="graveseer at che cafe san diego 12 jan 2024"
            width={800}
            height={500}/>
        </p>
        <p className="p-2">Jan 12, 2024 @ Che Cafe</p>
      </div>
      <hr />
      <div className="text-center text-md m-4">
        <p className="p-2">
          <Image 
            src="/2023-aug-15-bancroft.jpg" 
            alt="graveseer at the bancroft san diego 15 aug 2023"
            width={800}
            height={500}/>
        </p>
        <p className="p-2">August 15, 2023 @ The Bancroft</p>
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