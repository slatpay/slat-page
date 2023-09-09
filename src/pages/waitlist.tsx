import {
  MiddleGradient,
  WaitListContainer,
  WaitListContent,
  WaitListDraws,
  WaitListSecondDraws,
} from '@/styles/waitlist.styles'
import Image from 'next/image'
import {
  ArrowRight,
  Envelope,
  Password,
  TextAlignLeft,
  User,
} from 'phosphor-react'
import IconLogo from '@/assets/iconLogo.png'
import * as z from 'zod'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import { WaitlistModal } from '@/components/waitlist'
import Cookie from 'js-cookie'
import { Button } from '@slat-ui/react'

const signup = z.object({
  name: z
    .string()
    .min(3, { message: 'Nome tem que ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'Senha tem quer ter pelo menos 6 caracteres' }),
  wantUsePlataform: z
    .string()
    .min(10, { message: 'Resposta tem que ter no minimo 10 caracteres' }),
})

type Signup = z.infer<typeof signup>

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $name: String!
    $email: String!
    $password: String!
    $referredByCode: String
    $wantUsePlataform: String!
  ) {
    signup(
      data: {
        name: $name
        email: $email
        password: $password
        referredByCode: $referredByCode
        wantUsePlataform: $wantUsePlataform
      }
    ) {
      token
      status
      iaAnswer
    }
  }
`

export default function WaitList() {
  const [signupMutation, { loading }] = useMutation(SIGNUP_MUTATION)
  const [openModal, setOpenModal] = useState(false)
  const [signupForm, setSignupForm] = useState<Signup>({
    name: '',
    email: '',
    password: '',
    wantUsePlataform: '',
  })
  const [signupResponse, setSignupResponse] = useState({
    iaAnswer: '',
    token: '',
  })

  const router = useRouter()
  const referredByCode = router.query.ref || ''

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

      const { data } = await signupMutation({
        variables: {
          ...signupForm,
          referredByCode,
        },
      })

      const { token, status, iaAnswer } = data.signup

      if (status === 'success') {
        toast.success('Cadastro realizado com sucesso!', {
          theme: 'dark',
        })

        if (token) {
          Cookie.set('user-token', token, {
            expires: 1, // 7 dias
            path: '/',
            domain: '.slatpay.com', // Importante: defina o domínio para permitir o acesso em subdomínios
            secure: true, // Defina como seguro apenas em produção
          })
        }

        setSignupResponse({ iaAnswer, token: token || '' })
        setOpenModal(true)
      } else {
        toast.error('Erro ao realizar cadastro!', {
          theme: 'dark',
        })
      }
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

      <Dialog.Root open={openModal}>
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
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="input">
                <Envelope size={20} />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={signupForm.email}
                  placeholder="Digite seu email"
                />
              </div>
              <div className="input">
                <Password size={20} />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={signupForm.password}
                  placeholder="Digite sua senha"
                />
              </div>
              <div
                style={{
                  height: 'auto',
                  alignItems: 'flex-start',
                }}
                className="input"
              >
                <TextAlignLeft size={20} />
                <textarea
                  name="wantUsePlataform"
                  onChange={handleChange}
                  value={signupForm.wantUsePlataform}
                  style={{
                    height: 80,
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#fff',
                    padding: '0px 8px',
                    fontSize: 16,
                  }}
                  placeholder="Por que você deseja usar a plataforma?"
                />
              </div>

              <Button
                loading={loading}
                disabled={loading}
                variant="gradient"
                type="submit"
              >
                {t('join_waitlist')} <ArrowRight size={20} weight="bold" />
              </Button>
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

        {openModal && (
          <WaitlistModal
            email={signupForm.email || ''}
            userName={signupForm.name || ''}
            token={signupResponse.token || ''}
            iaAnswer={signupResponse.iaAnswer || ''}
          />
        )}
      </Dialog.Root>
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
