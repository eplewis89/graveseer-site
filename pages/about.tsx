import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'

const Page = () => {
  return (
    <article className="justify-center items-center text-md">
      <span className="text-center max-w-xl">
        <img src="/band.jpg" alt="band photo"/>
        <p>Graveseer is Justin on drums, Erin on vocals and bass, and Theo on guitar.</p>
        <p>We started sometime in the summer of 2022, with a goal to write and perform, and have fun doing something we enjoy.</p>
      </span>
    </article>
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