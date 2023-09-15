import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { WithApollo } from '@/libs/apollo'
import 'react-toastify/dist/ReactToastify.css'
import { appWithTranslation } from 'next-i18next'
import '@/styles/global.css'

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <WithApollo>
      <Component {...pageProps} />
    </WithApollo>
  )
}

export default appWithTranslation(App)
