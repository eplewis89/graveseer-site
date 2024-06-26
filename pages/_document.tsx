import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-main bg-opacity-50 bg-no-repeat bg-cover bg-center bg-fixed flex flex-col min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}