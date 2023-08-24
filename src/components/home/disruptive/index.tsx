/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import { useInView } from 'react-intersection-observer'
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
  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
  //   threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  // })

  const { t } = useTranslation()

  return (
    <DisruptiveContainer
      // ref={ref}
      css={
        {
          // opacity: inView ? 1 : 0,
          // transform: inView ? 'translateY(0)' : 'translateY(100px)',
          // transition: 'opacity 1s, transform 1s',
        }
      }
    >
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
        <Image
          src={Disruptive2}
          alt=""
          style={{
            objectFit: 'cover',
          }}
          quality={50}
          width={405}
          height={705}
        />

        <div>
          <Image
            src={Disruptive1}
            alt=""
            style={{
              objectFit: 'cover',
            }}
            quality={50}
            width={750}
            height={500}
          />
          <Image
            src={Disruptive3}
            alt=""
            style={{
              objectFit: 'cover',
            }}
            quality={50}
            width={865}
            height={600}
          />
        </div>
      </DisruptiveImage>
    </DisruptiveContainer>
  )
}
