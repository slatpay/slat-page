/* eslint-disable react/no-unescaped-entities */
import { FeesBox, FeesContainer, FeesContent } from './styles'
import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'
import GraphGif from '@/assets/graph.gif'
import RocketGif from '@/assets/rocket.gif'
import { useTranslation } from 'next-i18next'

interface FeesProps {
  feesRef: React.RefObject<HTMLDivElement>
}

export function Fees({ feesRef }: FeesProps) {
  const { t } = useTranslation()

  return (
    <FeesContainer ref={feesRef}>
      <FeesContent>
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
