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
        <title>Graveseer - About Us - San Diego Doom Metal Band</title>
        <meta property="og:title" content="Graveseer - About Us - San Diego Doom Metal Band" key="title" />
        <meta name="title" content="Graveseer - About Us - San Diego Doom Metal Band"/>
        <meta name="description" content="Graveseer is a doom metal band from San Diego, California"/>
        <meta name="keywords" content="doom metal, metal, san diego, california, band, live music, music, musician, album, stoner metal, stoner, doom, sludge, sludge metal, doommetal, stonermetal, sludgemetal, doom rock, rock"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
      </Head>
      <div className="text-left text-md m-4">
        <p className="p-2">
          <Image
            src="/band.jpg"
            alt="band photo"
            width={800}
            height={500}/>
        </p>
        <p className="p-2">Hailing from San Diego, California, Graveseer is a progressive doom metal band with Erin on vocals and bass, and Theo on guitar.</p>
        <p className="p-2">We started in the summer of 2022 with a goal to write and perform, and have fun doing something we enjoy. Please <Link href='mailto:booking@graveseerband.com' target="_blank">contact us</Link> if you want to book us at your venue, we&apos;d love to play a show with you!</p>
        <p className="p-2"><Link href="https://outlawsofthesun.blogspot.com/2023/08/graveseer-identity-ep-review.html" target="_blank">Check out a review of our album &quot;Infernal&quot;</Link></p>
      </div>
      <div className="text-center text-md m-4">
        <p className="p-2">
          For booking inquiries, please contact us at <Link href='mailto:booking@graveseerband.com'>booking@graveseerband.com</Link>
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