import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { WithApollo } from '@/libs/apollo'
import 'react-toastify/dist/ReactToastify.css'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>(
      'video[autoplay][muted]',
    )

    const playVideo = function (this: HTMLVideoElement) {
      this.play().catch((error: unknown) => {
        console.error('Falha no autoplay:', error)
      })
    }

    videos.forEach((video) => {
      video.addEventListener('canplay', playVideo)
    })

    return () => {
      videos.forEach((video) => {
        video.removeEventListener('canplay', playVideo)
      })
    }
  }, [])

  return (
    <WithApollo>
      <Component {...pageProps} />
    </WithApollo>
  )
}

export default appWithTranslation(App)
