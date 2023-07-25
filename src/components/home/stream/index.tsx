/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { StreamContainer, StreamContent } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useInView } from 'react-intersection-observer'
import SlatTv from '@/assets/slattv.svg'
import SlatTv2 from '@/assets/slattv2.svg'
import Image from 'next/image'

export function Stream() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

  return (
    <StreamContainer
      css={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(30%)',
        transition: 'opacity 1s, transform 1s',
      }}
      ref={ref}
    >
      <StreamContent direction="inverse">
        <Image
          src={SlatTv}
          alt="SlatTV"
          width={500}
          height={500}
          className="placeholder"
        />

        <div>
          <h2>
            Unleash Your Knowledge, <span>Boost Your Revenue</span>
          </h2>
          <p>
            With <span>SlatTV</span>, the innovative arm of SlatPay, host and
            sell your infoproducts, eBooks, courses, and more. Transform your
            wisdom into wealth on a{' '}
            <span>platform designed for today's digital pioneers.</span> Elevate
            your offerings, enrich others, and expand your possibilities.
          </p>

          <Link href="/#">
            Learn more <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </StreamContent>
      <StreamContent direction="normal">
        <video
          key="http://localhost:3016/cdn/6.mp4"
          width={500}
          height={500}
          autoPlay
          muted
          loop
        >
          <source src="http://localhost:3016/cdn/6.mp4" type="video/mp4" />
        </video>

        <div>
          <h2
            style={{
              textAlign: 'right',
            }}
          >
            A Guide to Creating and <span>Uploading Content</span>
          </h2>
          <p
            style={{
              textAlign: 'right',
            }}
          >
            Discover the potential of your expertise with SlatTV, the pioneering
            platform from SlatPay. Designed for the digital trendsetters of
            today, we provide a space to host, sell, and share your{' '}
            <span>infoproducts, eBooks, courses</span>, and more. This guide
            will walk you through the process of creating and uploading your
            content, much like YouTube, but optimized for infoproducers. Learn
            how to transform your wisdom into wealth, uplift your offerings,
            empower others, and open up new possibilities.
          </p>
        </div>
      </StreamContent>
    </StreamContainer>
  )
}
