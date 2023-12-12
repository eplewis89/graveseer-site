import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="text-left text-md w-1/3 m-4">
        <p className="p-2">Graveseer is Justin on drums, Erin on vocals and bass, and Theo on guitar.</p>
        <p className="p-2">We started sometime in the summer of 2022, with a goal to write and perform, and have fun doing something we enjoy.</p>
        <p className="p-2"><Link href="https://outlawsofthesun.blogspot.com/2023/08/graveseer-identity-ep-review.html" target="_blank">Check out a review of our album &quot;Infernal&quot;</Link></p>
        <p className="p-2"><Image src="/band.jpg" alt="band photo"/></p>
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