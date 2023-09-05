/* eslint-disable react/no-unescaped-entities */
import { FeesBox, FeesContainer, FeesContent } from './styles'
import { ArrowRight } from 'phosphor-react'
import Link from 'next/link'
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

          <video
            className="force-autoplay"
            style={{
              maxWidth: '100%',
            }}
            width={355}
            height={265}
            autoPlay
            loop
            disablePictureInPicture
            muted
            playsInline
          >
            <source
              src="https://cdn.slatpay.com/cdn/graph.mp4"
              type="video/mp4"
            />
          </video>
          <div>
            <p dangerouslySetInnerHTML={{ __html: t('less_fees_desc') }} />
            <Link href="/waitlist">
              {t('less_fees_footer')} <ArrowRight />
            </Link>
          </div>
        </FeesBox>
        <FeesBox>
          <h2 dangerouslySetInnerHTML={{ __html: t('step_into') }} />
          <video
            className="force-autoplay"
            style={{
              maxWidth: '100%',
            }}
            width={355}
            height={265}
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
          >
            <source
              src="https://cdn.slatpay.com/cdn/rocket.mp4"
              type="video/mp4"
            />
          </video>
          <div>
            <p dangerouslySetInnerHTML={{ __html: t('step_into_desc') }} />
          </div>
        </FeesBox>
      </FeesContent>
    </FeesContainer>
  )
}
