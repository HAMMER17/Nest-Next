
import type { AppProps } from 'next/app'
import { Provaider } from './provaider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export function App({ Component, pageProps }: AppProps) {
  return <Provaider>
    <Component {...pageProps} />

  </Provaider>
}