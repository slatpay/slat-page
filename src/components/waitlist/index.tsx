'use client'

import { Button, Heading, Text, TextArea } from '@slat-ui/react'
import {
  WaitlistSuccess,
  WaitlistContainer,
  WaitlistContent,
  WaitlistOverlay,
  WaitlistPortal,
} from './styles'
import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'

import SuccessImg from '@/assets/success.png'
import FailedImg from '@/assets/failed.png'
import FaqImg from '@/assets/faq.png'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { gql, useMutation } from '@apollo/client'
import { useTranslation } from 'next-i18next'

interface WaitlistModalProps {
  token?: string
  userName?: string
  iaAnswer?: string
  email?: string
}

const TRY_SECOND_TIME = gql`
  mutation trySecondChance(
    $answer: String!
    $iaAnswer: String!
    $email: String!
  ) {
    trySecondChance(answer: $answer, iaAnswer: $iaAnswer, email: $email)
  }
`
export function WaitlistModal({
  token,
  iaAnswer,
  email,
  userName,
}: WaitlistModalProps) {
  const { t } = useTranslation()

  const router = useRouter()

  const [countdown, setCountdown] = useState(10)
  const [displayedText, setDisplayedText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [trySecondChange, { loading }] = useMutation(TRY_SECOND_TIME)
  const [answer, setAnswer] = useState('')

  const possibleIAQuestionWords = [
    'Why',
    'How',
    'What',
    'When',
    'Where',
    'Who',
    'Which',
    'Whom',
    'Porque',
    'Como',
    'O que',
    'Quando',
    'Onde',
    'Quem',
    'Qual',
    'Quais',
    '?',
  ]

  const iaAwnserHasAnotherQuestion = possibleIAQuestionWords.some(
    (word) => iaAnswer?.toLowerCase()?.includes(word.toLowerCase()),
  )

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (
      (!iaAwnserHasAnotherQuestion && token) ||
      (!iaAwnserHasAnotherQuestion && !token)
    ) {
      intervalId = setInterval(() => {
        setCountdown((countdown) => countdown - 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [iaAwnserHasAnotherQuestion, token])

  useEffect(() => {
    if (countdown === 0) {
      router.push(token ? `https://dashboard.slatpay.com/` : '/')
    }
  }, [countdown, router, token])

  useEffect(() => {
    if (iaAnswer && charIndex < iaAnswer.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + iaAnswer[charIndex])
        setCharIndex((prevIndex) => prevIndex + 1)
      }, 10) // Adjust the speed of typing by changing the timeout value

      return () => clearTimeout(timer)
    }
  }, [iaAnswer, charIndex])

  const handleTrySecondTime = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const { data } = await trySecondChange({
        variables: {
          answer,
          iaAnswer,
          email,
        },
      })

      if (data.trySecondChance) {
        toast.success(t('waitlist_approved'), {
          theme: 'dark',
        })
        router.push('https://dashboard.slatpay.com/login')
      } else {
        toast.error(t('waitlist_pending'), {
          theme: 'dark',
        })
      }
    } catch (error) {}
  }

  return (
    <WaitlistPortal>
      <WaitlistOverlay />
      <WaitlistContainer>
        <WaitlistContent>
          <WaitlistSuccess>
            <Image
              src={
                iaAwnserHasAnotherQuestion
                  ? FaqImg
                  : !iaAwnserHasAnotherQuestion && !token
                  ? FailedImg
                  : SuccessImg
              }
              alt="success image"
              width={210}
              height={108}
              quality={100}
              style={{
                objectFit: 'contain',
              }}
            />

            <Heading>
              {t('successfully_registered', {
                value: userName,
              })}
            </Heading>
            <Text size="sm">{displayedText}</Text>
            {
              // If the IA answer has another question, we don't need to show the countdown
              iaAwnserHasAnotherQuestion ? (
                <form onSubmit={handleTrySecondTime}>
                  <TextArea
                    name="answer"
                    placeholder="Digite sua resposta"
                    required
                    onChange={(event) => setAnswer(event.target.value)}
                    value={answer}
                  />

                  <Button
                    type="submit"
                    loading={loading}
                    variant="gradient"
                    size="full"
                  >
                    {t('try_again')}
                  </Button>
                </form>
              ) : (
                <button className="redirect">
                  {t('redirects_link', {
                    value: countdown,
                  })}
                </button>
              )
            }
          </WaitlistSuccess>
        </WaitlistContent>
      </WaitlistContainer>
      <ToastContainer />
    </WaitlistPortal>
  )
}
