import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Head>
        <title>Graveseer - Past Shows</title>
        <meta property="og:title" content="Graveseer - Shows" key="title" />
      </Head>
      <h1 className="text-center text-4xl m-4">Past Shows</h1>
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