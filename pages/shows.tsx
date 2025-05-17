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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
      </Head>
      
      <div className="md:w-full lg:w-1/2">
        <div className="text-center text-md m-4">
          <p className="p-2">For booking inquiries, please contact us at <Link href='mailto:graveseerband@gmail.com'>graveseerband@gmail.com</Link></p>
        </div>
        <h1 className="text-center text-4xl m-4">Past Shows</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2025-may-6-spacebar.jpg" 
                alt="graveseer space bar may 6 2025"
                width={800}
                height={500}/>
            </p>
          </div>
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2025-apr-6-til-two-club.jpg" 
                alt="graveseer at til two club san diego 6 apr 2025"
                width={800}
                height={500}/>
            </p>
          </div>
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2024-dec-15-checafe.jpg" 
                alt="graveseer at che cafe san diego 15 dec 2024"
                width={800}
                height={500}/>
            </p>
          </div>
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2024-nov-14-checafe.jpg" 
                alt="graveseer at che cafe san diego 14 nov 2024"
                width={800}
                height={500}/>
            </p>
          </div>
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2024-oct-28-til-two-club.jpg" 
                alt="graveseer at til two club san diego 28 oct 2024"
                width={800}
                height={500}/>
            </p>
          </div>
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2024-sep-12-kensingtonclub.jpg" 
                alt="graveseer at kensington club san diego 12 sep 2024"
                width={800}
                height={500}/>
            </p>
          </div>
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2024-sep-1-humbleheart.jpg" 
                alt="graveseer at humble heart san diego 1 sep 2024"
                width={800}
                height={500}/>
            </p>
          </div>
          <div className="text-center text m-4">
            <p className="p-2">
              <Image 
                src="/2024-jun-7-bancroft.jpg" 
                alt="graveseer at the bancroft san diego june 7 2024"
                width={800}
                height={500}/>
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
          </div>
          <div className="text-center text-md m-4">
            <p className="p-2">
              <Image 
                src="/2023-aug-15-bancroft.jpg" 
                alt="graveseer at the bancroft san diego 15 aug 2023"
                width={800}
                height={500}/>
            </p>
          </div>
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