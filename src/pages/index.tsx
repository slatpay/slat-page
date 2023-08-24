import { Montserrat } from 'next/font/google'
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
import { useRef } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Header } from '@/components/header'
import {
  DashboardImage,
  MainContainer,
  MainContent,
  MiddleContent,
  OpenAccountButton,
} from '@/components/home/main/styles'
import { ArrowRight } from 'phosphor-react'
import Dashboard from '@/assets/Dashboard.svg'
import Cursor from '@/assets/Cursors.png'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
})

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const feesRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <>
      <Head>
        <title>{t('website_name')}</title>
        {/* Metatags padrão */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content={t('website_desc')} />
        <link rel="icon" href="/icon.ico" />
        {/* Open Graph Metatags (para o Facebook) */}
        <meta property="og:title" content={t('website_name')} />
        <meta property="og:description" content={t('website_desc')} />
        <meta property="og:image" content="/favicon.png" />
        {/* Imagem que você deseja mostrar quando compartilhada */}
        <meta property="og:url" content="https://slatpay.com" />
        {/* URL do site */}
        <meta property="og:type" content="website" />
        {/* Metatags Twitter (para o Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('website_name')} />
        <meta name="twitter:description" content={t('website_desc')} />
        <meta name="twitter:image" content="/favicon.png" />
        {/* Imagem que você deseja mostrar quando compartilhada */}
        <meta name="twitter:site" content="@slatpay" />
        {/* Seu identificador do Twitter */}
        <meta name="twitter:creator" content="@slatpay" />
        {/* Seu identificador do Twitter */}
        <meta name="keywords" content={t('website_tags')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://slatpay.com/en" />

        <link rel="alternate" hrefLang="en" href="https://slatpay.com/en" />
        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://slatpay.com/pt-br"
        />

        <meta
          name="google-site-verification"
          content="-0u8A5IkWt-CC4Ol3tF3HSy392joLUPM3MujlTnIPoYo"
        />
      </Head>
      <main
        style={{
          overflow: 'hidden',
          maxWidth: '100vw',
        }}
        className={montserrat.className}
      >
        <Header mainRef={mainRef} featuresRef={featuresRef} feesRef={feesRef} />
        <MainContainer>
          <MainContent ref={mainRef}>
            <MiddleContent>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <h1 dangerouslySetInnerHTML={{ __html: t('main_title') }} />

                <p dangerouslySetInnerHTML={{ __html: t('main_desc') }} />
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <OpenAccountButton href="/waitlist">
                  {t('open_account', { ns: 'common' })}{' '}
                  <ArrowRight weight="bold" size={24} />
                </OpenAccountButton>
              </div>

              {!isMobile && (
                <DashboardImage>
                  <Image
                    style={{
                      objectFit: 'contain',
                    }}
                    quality={60}
                    src={Cursor}
                    alt="Cursor"
                    priority={true}
                    width={1120}
                    height={100}
                  />
                  <Image
                    style={{
                      objectFit: 'contain',
                    }}
                    quality={60}
                    src={Dashboard}
                    alt="Dashboard"
                    priority={true}
                    width={1200}
                    height={1120}
                  />
                </DashboardImage>
              )}
            </MiddleContent>
          </MainContent>
        </MainContainer>

        <BrandsContainer>
          <Image src={Brands} alt="Brands" width={925} height={35} />
        </BrandsContainer>
        <Disruptive />
        <Features featuresRef={featuresRef} />
        <Fees feesRef={feesRef} />
        <Icons />
        <Global />
        <Stream />
        <Lines />
        <Start />
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
