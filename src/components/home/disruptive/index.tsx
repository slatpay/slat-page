/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  DisruptiveContainer,
  DisruptiveContent,
  DisruptiveImage,
} from './styles'
import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'
import Disruptive1 from '@/assets/Disruptive2.gif'
import Disruptive2 from '@/assets/Disruptive1.gif'
import Disruptive3 from '@/assets/Disruptive3.png'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export function Disruptive() {
  const router = useRouter()

  const { t } = useTranslation()

  return (
    <DisruptiveContainer>
      <span className="title">
        {t('disruptive_plataform', { ns: 'common' })}
      </span>
      <DisruptiveContent>
        <h2
          style={{
            maxWidth: '22ch',
          }}
        >
          {t('disruptive_title', { ns: 'common' })}
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1.25rem',
          }}
        >
          <p
            dangerouslySetInnerHTML={{ __html: t('disruptive_desc_part_1') }}
          />
          <p>{t('disruptive_desc_part_2')}</p>
        </div>

        <button onClick={() => router.push('/waitlist')}>
          {t('get_started', { ns: 'common' })}{' '}
          <ArrowRight weight="bold" size={16} />
        </button>
      </DisruptiveContent>

      <DisruptiveImage>
        <video
          style={{
            objectFit: 'cover',
            mixBlendMode: 'multiply',
          }}
          width={405}
          height={705}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn.slatpay.com/cdn/Disruptive1.mp4"
            type="video/mp4"
          />
        </video>

        <div>
          <video
            style={{
              objectFit: 'cover',
              mixBlendMode: 'multiply',
            }}
            width={750}
            height={500}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.slatpay.com/cdn/Disruptive2.mp4"
              type="video/mp4"
            />
          </video>
          <Image
            src={Disruptive3}
            alt=""
            style={{
              objectFit: 'cover',
            }}
            priority={true}
            quality={65}
            width={865}
            height={600}
          />
        </div>
      </DisruptiveImage>
    </DisruptiveContainer>
  )
}
