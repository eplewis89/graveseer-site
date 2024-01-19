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
        <title>Graveseer - Official Website</title>
        <meta property="og:title" content="Graveseer" key="title" />
      </Head>
      <div className="text-center text-md m-4">
        <p className="p-2">
          <Link href="https://fb.me/e/1KLCrfBxe" target='_blank'>
            <Image
              src="/2024-march-30-bancroft.jpg"
              alt="graveseer at the bancroft san diego 30 march 2024"
              width={800}
              height={500}/>
          </Link>
        </p>
        <p className="p-2">March 30, 2024 @ The Bancroft</p>
        <p className="p-2"><Link href="https://fb.me/e/1KLCrfBxe" target='_blank'>Click Here for Event Link</Link></p>
      </div>
      <div className="text-center text-md m-4">
        <p className="p-2">
          <Image
            src="/graveseer-infernal-album.png"
            alt="graveseer infernal album cover"
            width={800}
            height={500}/>
        </p>
        <p className="p-2">&quot;Infernal&quot; now streaming on all major platforms</p>
        <p className="p-2 flex flex-row place-content-center ">
          { /*spotify*/ }
          <Link className="m-2" href="https://open.spotify.com/album/5YFSSW8xurkJAulaz2bHlO" target="_blank">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
          </svg>
          </Link>
          { /*youtube*/ }
          <Link className="m-2" href="https://www.youtube.com/watch?v=EPVw3QKCwBM&list=OLAK5uy_me6X3TB0CkX1DKaXemuwbYNYaCqqqgJRI" target="_blank">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </Link>
          { /*apple music*/ }
          <Link className="m-2" href="https://music.apple.com/us/album/infernal-ep/1702702223" target="_blank">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/>
          </svg>
          </Link>
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