import { useInView } from 'react-intersection-observer'
import { GlobalContainer, GlobalContent } from './styles'
import World from './world'
import { ArrowRight } from 'phosphor-react'

export function Global() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

  return (
    <GlobalContainer
      css={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateY(0) rotate(-2.551deg)'
          : 'translateY(100px) rotate(-2.551deg)',
        transition: 'opacity 1s, transform 1s',
      }}
      ref={ref}
    >
      <GlobalContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            position: 'absolute',
            zIndex: 1,
            justifyContent: 'flex-start',
          }}
        >
          <span className="tag">Global Advantage</span>
          <h2>
            Unleash your Potential in the <span>Global Arena</span>
          </h2>
          <p>
            With our powerful platform, you can transcend borders, connect with
            customers worldwide, and seize opportunities in diverse markets.
            <br />
            <br />
            From expanding your customer base to exploring new horizons, SlatPay
            empowers you to unlock your full potential in the dynamic global
            marketplace.
          </p>

          <button>
            Learn more <ArrowRight weight="bold" size={20} />
          </button>
        </div>
        <World width={1500} height={1300} />
      </GlobalContent>
    </GlobalContainer>
  )
}
