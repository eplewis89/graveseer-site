import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Head>
        <title>Graveseer - Shows</title>
        <meta property="og:title" content="Graveseer - Shows" key="title" />
      </Head>
      <div className="text-center text-md w-1/4 m-4">
        <p className="p-2">Jan 12, 2024 @ Che Cafe (7pm)</p>
        <p className="p-2">
          <Image 
            src="/12Jan24-CheCafe.jpg" 
            alt="graveseer at che cafe san diego 12 jan 2024"
            width={500}
            height={500}/>
        </p>
      </div>
      <div className="text-center text-md w-1/4 m-4">
        <p className="p-2">Feb 25, 2024 @ Winston&apos;s OB</p>
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