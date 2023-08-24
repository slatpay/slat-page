/* eslint-disable react/no-unescaped-entities */

import { IconsContainer, IconsContent, IconsGrid } from './styles'
import { useInView } from 'react-intersection-observer'

import Cart from '@/assets/icons/1.gif'
import Shield from '@/assets/icons/2.gif'
import Analytics from '@/assets/icons/3.gif'
import GlobeHemisphereEast from '@/assets/icons/4.gif'
import Kanban from '@/assets/icons/5.gif'
import CheckSquare from '@/assets/icons/6.gif'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export function Icons() {
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
  //   threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  // })

  const { t } = useTranslation()

  return (
    <IconsContainer
      css={{
        // opacity: inView ? 1 : 0,
        // transform: inView ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 1s, transform 1s',
      }}
      // ref={ref}
    >
      <IconsContent>
        <h2 dangerouslySetInnerHTML={{ __html: t('icons_title') }} />
        <p>{t('icons_desc')}</p>

        <IconsGrid>
          <div>
            <Image src={Cart} alt="Cart" quality={100} width={54} height={54} />
            <h3>{t('icons_checkout_title')}</h3>
            <p>{t('icons_checkout_desc')}</p>
          </div>
          <div>
            <Image
              src={Shield}
              alt="Shield"
              quality={100}
              width={54}
              height={54}
            />
            <h3>{t('icons_secure_title')}</h3>
            <p>{t('icons_secure_desc')}</p>
          </div>
          <div>
            <Image
              src={Analytics}
              alt="Analytics"
              quality={100}
              width={54}
              height={54}
            />
            <h3>{t('icons_analytics_title')}</h3>
            <p>{t('icons_analytics_desc')}</p>
          </div>
          <div>
            <Image
              src={GlobeHemisphereEast}
              alt="GlobeHemisphereEast"
              quality={100}
              width={54}
              height={54}
            />
            <h3>{t('icons_reach_title')}</h3>
            <p>{t('icons_reach_desc')}</p>
          </div>
          <div>
            <Image
              src={Kanban}
              alt="Kanban"
              quality={100}
              width={54}
              height={54}
            />
            <h3>{t('icons_tasks_title')}</h3>
            <p>{t('icons_tasks_desc')}</p>
          </div>
          <div>
            <Image
              src={CheckSquare}
              alt="CheckSquare"
              quality={100}
              width={54}
              height={54}
            />
            <h3>{t('icons_effortless_title')}</h3>
            <p>{t('icons_effortless_desc')}</p>
          </div>
        </IconsGrid>
      </IconsContent>
    </IconsContainer>
  )
}
