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
    }, 450)
  }, [])

  if (!loaded) {
    return <LoadingScreen />
  }

  return (
    <>
      <Head>
        <title>SlatPay - Your Reliable Payment Solution</title>
        {/* Metatags padrão */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="description"
          content="SlatPay offers seamless payment solutions for your business. Secure, reliable, and user-friendly."
        />
        <meta
          name="keywords"
          content="payment, online payment, payment gateway, secure payment, business payment"
        />
        <link rel="icon" href="/icon.ico" />
        {/* Open Graph Metatags (para o Facebook) */}
        <meta
          property="og:title"
          content="SlatPay - Your Reliable Payment Solution"
        />
        <meta
          property="og:description"
          content="SlatPay offers seamless payment solutions for your business. Secure, reliable, and user-friendly."
        />
        <meta property="og:image" content="/favicon.png" />
        {/* Imagem que você deseja mostrar quando compartilhada */}
        <meta property="og:url" content="https://slatpay.com" />
        {/* URL do site */}
        <meta property="og:type" content="website" />
        {/* Metatags Twitter (para o Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SlatPay - Your Reliable Payment Solution"
        />
        <meta
          name="twitter:description"
          content="SlatPay offers seamless payment solutions for your business. Secure, reliable, and user-friendly."
        />
        <meta name="twitter:image" content="/favicon.png" />
        {/* Imagem que você deseja mostrar quando compartilhada */}
        <meta name="twitter:site" content="@slatpay" />
        {/* Seu identificador do Twitter */}
        <meta name="twitter:creator" content="@slatpay" />
        {/* Seu identificador do Twitter */}
        <meta
          name="keywords"
          content="pagamento, serviço de pagamento, slatpay, soluções de pagamento"
        />
        <meta name="robots" content="index, follow" />
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
