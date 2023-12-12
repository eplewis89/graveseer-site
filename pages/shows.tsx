import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'

const Page = () => {
  return (
    <>
      <div className="text-center text-md w-1/4 m-4">
        <p className="p-2">Jan 12, 2024 @ Che Cafe (7pm)</p>
        <p className="p-2"><img src="/12Jan24-CheCafe.jpg" alt="graveseer at che cafe san diego 12 jan 2024"/></p>
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