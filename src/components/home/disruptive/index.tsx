/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useInView } from 'react-intersection-observer'
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

export function Disruptive() {
  const router = useRouter()
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

  return (
    <DisruptiveContainer
      ref={ref}
      css={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 1s, transform 1s',
      }}
    >
      <span className="title">Disruptive plataform</span>
      <DisruptiveContent>
        <h2>
          Disrupting Boundaries,
          <br /> Empowering Ambitions
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1.25rem',
          }}
        >
          <p>
            Step into the future with SlatPay, the platform designed to
            revolutionize your approach to{' '}
            <span>
              project management, product control, and financial transactions
            </span>
            . We merge innovative technology with user-friendly design,
          </p>
          <p>
            Providing an efficient, comprehensive solution for producers,
            co-producers, and customers alike. With SlatPay, you're not just
            part of the digital transformation - you're leading it.
          </p>
        </div>

        <button onClick={() => router.push('/waitlist')}>
          Get started <ArrowRight weight="bold" size={16} />
        </button>
      </DisruptiveContent>

      <DisruptiveImage>
        <Image
          src={Disruptive2}
          alt=""
          style={{
            objectFit: 'cover',
          }}
          quality={100}
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
            quality={100}
            width={750}
            height={500}
          />
          <Image
            src={Disruptive3}
            alt=""
            style={{
              objectFit: 'cover',
            }}
            quality={100}
            width={865}
            height={600}
          />
        </div>
      </DisruptiveImage>
    </DisruptiveContainer>
  )
}
