import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'

const Page = () => {
  return (
      <div className="flex justify-center items-center text-md">
        <span className="text-center max-w-xl">
          <img src="/graveseer-infernal-album.png" alt="graveseer infernal album cover"/>
          <p className="mt-4">&quot;Infernal&quot; streaming on all major platforms</p>
        </span>
      </div>
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