import { Montserrat } from 'next/font/google'
import { Main } from '@/components/home/main'
import { Lines } from '@/components/lines/styles'
import Brands from '@/assets/Brands.png'
import Image from 'next/image'
import Head from 'next/head'
import { BrandsContainer } from '@/styles/index.styles'
import { Disruptive } from '@/components/home/disruptive'
import { Features } from '@/components/home/features'
import { Fees } from '@/components/home/fees'
import { Icons } from '@/components/home/icons'
import { Global } from '@/components/home/world'
import { Stream } from '@/components/home/stream'
import { Start } from '@/components/home/start'
import { Footer } from '@/components/footer'
import { useEffect, useRef, useState } from 'react'
import { LoadingScreen } from '@/components/loadingscreen'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
})

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const feesRef = useRef<HTMLDivElement>(null)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [])

  if (!loaded) {
    return <LoadingScreen />
  }

  return (
    <>
      <Head>
        <title>Slatpay</title>
        <meta
          name="description"
          content="Slatpay é uma solução de pagamento inovadora."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Slatpay" />
        <meta
          property="og:description"
          content="Slatpay é uma solução de pagamento inovadora."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://www.slatpay.com" />
        <meta
          name="keywords"
          content="pagamento, serviço de pagamento, slatpay, soluções de pagamento"
        />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={montserrat.className}>
        <Main featuresRef={featuresRef} feesRef={feesRef} />
        <Lines />
        <BrandsContainer>
          <Image src={Brands} alt="Brands" width={1120} height={35} />
        </BrandsContainer>
        <Disruptive />
        <Features featuresRef={featuresRef} />
        <Fees feesRef={feesRef} />
        <Icons />
        <Global />
        <Stream />
        <Start />
        <Footer />
      </main>
    </>
  )
}
