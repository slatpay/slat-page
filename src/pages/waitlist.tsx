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
  ) {
    signup(
      data: {
        name: $name
        email: $email
        password: $password
        currency: $currency
        ipAddress: $ipAddress
        location: $location
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

  return (
    <>
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
