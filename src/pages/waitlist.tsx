import {
  MiddleGradient,
  WaitListContainer,
  WaitListContent,
  WaitListDraws,
  WaitListSecondDraws,
} from '@/styles/waitlist.styles'
import Image from 'next/image'
import { ArrowRight, Envelope, Password, User } from 'phosphor-react'
import IconLogo from '@/assets/iconLogo.png'
import * as z from 'zod'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useRouter } from 'next/router'

const signup = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
})

type Signup = z.infer<typeof signup>

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $name: String!
    $email: String!
    $password: String!
    $currency: String!
    $ipAddress: String!
    $location: String!
    $referredByCode: String
  ) {
    signup(
      data: {
        name: $name
        email: $email
        password: $password
        currency: $currency
        ipAddress: $ipAddress
        location: $location
        referredByCode: $referredByCode
      }
    ) {
      status
      token
    }
  }
`

export default function WaitList() {
  const [signupMutation] = useMutation(SIGNUP_MUTATION)
  const [signupForm, setSignupForm] = useState<Signup>({
    name: '',
    email: '',
    password: '',
  })

  const router = useRouter()
  const referredByCode = router.query.ref || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setSignupForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      signup.parse(signupForm)

      await toast.promise(
        signupMutation({
          variables: {
            ...signupForm,
            currency: 'BRL',
            ipAddress: '0.0.0.0',
            location: 'Brazil',
            referredByCode,
          },
        }),
        {
          pending: 'Loading...',
          success: t('join_waitlist_success'),
          error: t('join_waitlist_failed'),
        },
        {
          theme: 'dark',
        },
      )
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.issues[0].message
        toast.error(message, {
          theme: 'dark',
        })
      }
    }
  }

  const { t } = useTranslation()

  const currentLocale = router.locale
  const defaultLocale = router.defaultLocale

  const canonicalURL = `https://slatpay.com/${
    currentLocale === defaultLocale ? '' : currentLocale
  }/waitlist`

  return (
    <>
      <Head>
        <title>Slatpay - Waitlist</title>
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
          href="https://slatpay.com/waitlist"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://slatpay.com/en/waitlist"
        />
        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://slatpay.com/pt-br/waitlist"
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

      <WaitListContainer>
        <WaitListContent>
          <Image
            src={IconLogo}
            alt="Logo"
            width={90}
            height={125}
            objectFit="contain"
          />

          <div className="middleBorder">
            <div />
            <p>slatpay</p>
            <div />
          </div>

          <h1 dangerouslySetInnerHTML={{ __html: t('waitlist_title') }} />

          <form onSubmit={handleSubmit}>
            <div className="input">
              <User size={20} />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={signupForm.name}
                placeholder="Enter your name"
              />
            </div>
            <div className="input">
              <Envelope size={20} />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={signupForm.email}
                placeholder="Enter your email"
              />
            </div>
            <div className="input">
              <Password size={20} />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={signupForm.password}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit">
              {t('join_waitlist')} <ArrowRight size={20} weight="bold" />
            </button>
          </form>

          <WaitListDraws>
            <div className="draw" />
            <div className="draw2" />
          </WaitListDraws>
          <WaitListSecondDraws>
            <div className="draw" />
            <div className="draw2" />
          </WaitListSecondDraws>
          <MiddleGradient />
        </WaitListContent>
        <ToastContainer />
      </WaitListContainer>
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
