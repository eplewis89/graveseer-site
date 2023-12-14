import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Head>
        <title>Graveseer - Shows</title>
        <meta property="og:title" content="Graveseer - Shows" key="title" />
      </Head>
      <div className="text-center text-2xl m-4">
        <h1>Upcoming Shows</h1>
      </div>
      <div className="text-center text-md m-4">
        <p className="p-2">Jan 12, 2024 @ Che Cafe (7pm)</p>
        <p className="p-2"><Link href="https://chedoom.bpt.me">Click Here for Presale Tickets - $10</Link></p>
        <p className="p-2">
          <Image 
            src="/12Jan24-CheCafe.jpg" 
            alt="graveseer at che cafe san diego 12 jan 2024"
            width={500}
            height={500}/>
        </p>
      </div>
      <div className="text-center text-md m-4">
        <p className="p-2">Feb 25, 2024 @ Winston&apos;s OB</p>
        <p className="p-2">More info coming soon</p>
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