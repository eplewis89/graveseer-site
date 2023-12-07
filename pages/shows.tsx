import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'

const Page = () => {
  return (
    <article className="justify-center items-center text-md">
      <span className="text-center max-w-xl">
        <p>Jan 12, 2024 @ Che Cafe</p>
        <br />
        <p>Feb 25, 2024 @ Winston&apos;s OB</p>
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