/* eslint-disable react/no-unescaped-entities */
import { FeesBox, FeesContainer, FeesContent } from './styles'
import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'
import GraphGif from '@/assets/graph.gif'
import RocketGif from '@/assets/rocket.gif'
import { useInView } from 'react-intersection-observer'

interface FeesProps {
  feesRef: React.RefObject<HTMLDivElement>
}

export function Fees({ feesRef }: FeesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

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
          <h2>
            Less Fees,
            <br />
            <span>More Profit</span>
          </h2>
          <Image
            style={{
              maxWidth: '100%',
            }}
            src={GraphGif}
            alt="Fees"
            width={355}
            height={265}
          />
          <div>
            <p>
              Experience a game-changing <span>5% sales commission.</span> More
              profit, less worry. Discover the SlatPay difference.
            </p>
            <Link href="/waitlist">
              Start with SlatPay <ArrowRight />
            </Link>
          </div>
        </FeesBox>
        <FeesBox>
          <h2>
            <span>Step into</span> Tomorrow
          </h2>
          <Image
            style={{
              maxWidth: '100%',
            }}
            src={RocketGif}
            alt="Fees"
            width={355}
            height={265}
          />
          <div>
            <p>
              SlatPay is more than a tool, it's a leap towards the future of
              e-commerce and project management. <span>Stay tuned.</span>
            </p>
          </div>
        </FeesBox>
      </FeesContent>
    </FeesContainer>
  )
}
