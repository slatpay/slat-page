import { useInView } from 'react-intersection-observer'
import { GlobalContainer, GlobalContent } from './styles'
import World from './world'
import { ArrowRight } from 'phosphor-react'
import { useTranslation } from 'next-i18next'

export function Global() {
  const { t } = useTranslation()

  return (
    <GlobalContainer
      css={{
        // opacity: inView ? 1 : 0,
        // transform: inView
        //   ? 'translateY(0) rotate(-2.551deg)'
        //   : 'translateY(100px) rotate(-2.551deg)',
        transition: 'opacity 1s, transform 1s',
      }}
      // ref={ref}
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
          <span className="tag">{t('global_advantage')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('global_title') }} />
          <p dangerouslySetInnerHTML={{ __html: t('global_desc') }} />

          <button>
            {t('learn_more')} <ArrowRight weight="bold" size={20} />
          </button>
        </div>
        <World width={1500} height={1300} />
      </GlobalContent>
    </GlobalContainer>
  )
}
