/* eslint-disable react/no-unescaped-entities */

import { IconsContainer, IconsContent, IconsGrid } from './styles'

import Cart from '@/assets/icons/1.gif'
import Shield from '@/assets/icons/2.gif'
import Analytics from '@/assets/icons/3.gif'
import GlobeHemisphereEast from '@/assets/icons/4.gif'
import Kanban from '@/assets/icons/5.gif'
import CheckSquare from '@/assets/icons/6.gif'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export function Icons() {
  const { t } = useTranslation()

  return (
    <>
      <div className="mx-2 md:-mx-2">
        <IconsContainer>
          <IconsContent>
            <h2 dangerouslySetInnerHTML={{ __html: t('icons_title') }} />
            <p>{t('icons_desc')}</p>

            <IconsGrid>
              <div>
                <Image
                  src={Cart}
                  alt="Cart"
                  quality={100}
                  width={54}
                  height={54}
                />
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
      </div>
    </>
  )
}
