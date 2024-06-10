import { Html, Head, Main, NextScript } from 'next/document'
import Background from '@/Components/Background'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Background />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
