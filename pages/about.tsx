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
        <title>Graveseer - About Us</title>
        <meta property="og:title" content="Graveseer - About Us" key="title" />
      </Head>
      <div className="text-left text-md m-4">
        <p className="p-2">Graveseer is Justin on drums, Erin on vocals and bass, and Theo on guitar.</p>
        <p className="p-2">We started sometime in the summer of 2022, with a goal to write and perform, and have fun doing something we enjoy.</p>
        <p className="p-2"><Link href="https://outlawsofthesun.blogspot.com/2023/08/graveseer-identity-ep-review.html" target="_blank">Check out a review of our album &quot;Infernal&quot;</Link></p>
        <p className="p-2">
          <Image
            src="/band.jpg"
            alt="band photo"
            width={800}
            height={500}/>
        </p>
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