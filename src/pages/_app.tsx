import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { WithApollo } from '@/libs/apollo'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <WithApollo>
      <Component {...pageProps} />
    </WithApollo>
  )
}
