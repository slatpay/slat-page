import { ArrowUpRight } from 'phosphor-react'
import { StartContainer, StartContent } from './styles'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import Background from '@/assets/startBg.gif'

export function Start() {
  const router = useRouter()

  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

  return (
    <StartContainer
      css={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 1s, transform 1s',
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
      }}
      ref={ref}
    >
      <StartContent>
        <h2>
          <span>Start with Slatpay</span>
        </h2>
        <p>
          Get ahead, be part of the change. Sign up for our waitlist now and
          secure your place at the forefront of online education.
        </p>
        <button onClick={() => router.push('/waitlist')}>
          Open account <ArrowUpRight weight="bold" />
        </button>
      </StartContent>
    </StartContainer>
  )
}
