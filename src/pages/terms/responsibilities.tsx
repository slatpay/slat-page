/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
  TermsAvatar,
  TermsContainer,
  TermsContent,
} from '@/styles/terms.styles'
import Profile from '@/assets/fonseca.jpeg'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

export default function UserResponsibilities() {
  const { t } = useTranslation()

  const router = useRouter()
  const currentLocale = router.locale
  const defaultLocale = router.defaultLocale

  const canonicalURL = `https://slatpay.com/${
    currentLocale === defaultLocale ? '' : currentLocale
  }/terms/responsibilities`

  return (
    <>
      <Head>
        <title>Slatpay - User Responsibilities</title>
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

        <link rel="canonical" href={canonicalURL} />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://slatpay.com/en/terms/responsibilities"
        />
        <link
          rel="alternate"
          href="https://slatpay.com/terms/responsibilities"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://slatpay.com/pt-br/terms/responsibilities"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-808BW18WVQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-808BW18WVQ');
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="-0u8A5IkWt-CC4Ol3tF3HSy392joLUPM3MujlTnIPoYo"
        />
      </Head>
      <Header scrolled />
      <TermsContainer>
        <TermsContent>
          <div />
          <h1>
            <span>{t('responsibilities_title')}</span>
          </h1>
          <p
            style={{ fontSize: '1rem', fontWeight: 400, lineHeight: '1.5rem' }}
            dangerouslySetInnerHTML={{
              __html: t('responsibilities_desc'),
            }}
          />
          <div className="avatarColumns">
            <TermsAvatar
              rounded
              src={Profile.src}
              alt="Profile"
              size="medium"
            />
            <div>
              <h3>Gabriel Fonseca</h3>
              <p>Chief Technology Officer</p>
            </div>
          </div>
        </TermsContent>
      </TermsContainer>
      <Footer />
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
