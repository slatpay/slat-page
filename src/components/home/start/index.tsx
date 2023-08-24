import { ArrowUpRight } from 'phosphor-react'
import { StartContainer, StartContent } from './styles'
import { useRouter } from 'next/router'
// import { useInView } from 'react-intersection-observer'
import Background from '@/assets/startBg.gif'
import { useTranslation } from 'next-i18next'

export function Start() {
  const router = useRouter()

  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
  //   threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  // })

  const { t } = useTranslation()

  return (
    <StartContainer
      css={{
        // opacity: inView ? 1 : 0,
        // transform: inView ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 1s, transform 1s',
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
      }}
      // ref={ref}
    >
      <StartContent>
        <h2>
          <span>{t('less_fees_footer')}</span>
        </h2>
        <p>{t('get_ahead')}</p>
        <button onClick={() => router.push('/waitlist')}>
          {t('open_account')} <ArrowUpRight weight="bold" />
        </button>
      </StartContent>
    </StartContainer>
  )
}
