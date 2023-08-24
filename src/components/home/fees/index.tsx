/* eslint-disable react/no-unescaped-entities */
import { FeesBox, FeesContainer, FeesContent } from './styles'
import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'
import GraphGif from '@/assets/graph.gif'
import RocketGif from '@/assets/rocket.gif'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface FeesProps {
  feesRef: React.RefObject<HTMLDivElement>
}

export function Fees({ feesRef }: FeesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

  const { t } = useTranslation()

  return (
    <FeesContainer
      css={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0%)' : 'translateX(-30%)',
        transition: 'opacity 1s, transform 1s',
      }}
      ref={feesRef}
    >
      <FeesContent ref={ref}>
        <FeesBox>
          <h2 dangerouslySetInnerHTML={{ __html: t('less_fees') }} />
          <Image
            style={{
              maxWidth: '100%',
            }}
            src={GraphGif}
            alt="Fees"
            quality={60}
            width={355}
            height={265}
          />
          <div>
            <p dangerouslySetInnerHTML={{ __html: t('less_fees_desc') }} />
            <Link href="/waitlist">
              {t('less_fees_footer')} <ArrowRight />
            </Link>
          </div>
        </FeesBox>
        <FeesBox>
          <h2 dangerouslySetInnerHTML={{ __html: t('step_into') }} />
          <Image
            style={{
              maxWidth: '100%',
            }}
            src={RocketGif}
            alt="Fees"
            quality={60}
            width={355}
            height={265}
          />
          <div>
            <p dangerouslySetInnerHTML={{ __html: t('step_into_desc') }} />
          </div>
        </FeesBox>
      </FeesContent>
    </FeesContainer>
  )
}
