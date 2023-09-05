/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { StreamContainer, StreamContent } from './styles'
import { ArrowRight } from 'phosphor-react'
import SlatTv from '@/assets/slattv.png'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export function Stream() {
  const { t } = useTranslation()

  return (
    <StreamContainer>
      <StreamContent direction="inverse">
        <Image
          src={SlatTv}
          alt="SlatTV"
          width={500}
          height={500}
          className="placeholder"
        />

        <div>
          <h2 dangerouslySetInnerHTML={{ __html: t('slattv_title') }} />
          <p dangerouslySetInnerHTML={{ __html: t('slattv_desc') }} />

          <Link href="/#">
            {t('learn_more')} <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </StreamContent>
      <StreamContent direction="normal">
        <video
          key="https://cdn.slatpay.com/cdn/6.mp4"
          width={500}
          height={500}
          autoPlay
          muted
          loop
        >
          <source src="https://cdn.slatpay.com/cdn/6.mp4" type="video/mp4" />
        </video>

        <div>
          <h2
            style={{
              textAlign: 'right',
            }}
            dangerouslySetInnerHTML={{
              __html: t('slattv_guide_title'),
            }}
          />
          <p
            style={{
              textAlign: 'right',
            }}
            dangerouslySetInnerHTML={{
              __html: t('slattv_guide_desc'),
            }}
          />
        </div>
      </StreamContent>
    </StreamContainer>
  )
}
