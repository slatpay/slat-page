import {
  DashboardImage,
  MainContainer,
  MainContent,
  MiddleContent,
  OpenAccountButton,
} from './styles'
import { ArrowRight } from 'phosphor-react'
import Dashboard from '@/assets/Dashboard.png'
import Cursor from '@/assets/Cursors.png'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

interface MainProps {
  mainRef: React.RefObject<HTMLDivElement>
}

export function Main({ mainRef }: MainProps) {
  const { t } = useTranslation()

  return (
    <MainContainer ref={mainRef}>
      <MainContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 dangerouslySetInnerHTML={{ __html: t('main_title') }} />

          <p dangerouslySetInnerHTML={{ __html: t('main_desc') }} />
        </div>

        <MiddleContent>
          <OpenAccountButton href="/waitlist">
            {t('open_account', { ns: 'common' })}{' '}
            <ArrowRight weight="bold" size={24} />
          </OpenAccountButton>
        </MiddleContent>

        <DashboardImage>
          <Image
            style={{
              objectFit: 'contain',
            }}
            quality={100}
            src={Cursor}
            alt="Cursor"
            priority={true}
            width={1120}
            height={100}
          />
          <Image
            style={{
              objectFit: 'contain',
            }}
            quality={100}
            src={Dashboard}
            alt="Dashboard"
            priority={true}
            width={1200}
            height={1120}
          />
        </DashboardImage>
      </MainContent>
    </MainContainer>
  )
}
