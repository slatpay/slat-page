import { useEffect, useRef, useState } from 'react'
import { Header } from '../../header'
import {
  // CalculateSavingButton,
  Cell,
  DashboardImage,
  Grid,
  MainContainer,
  MainContent,
  MiddleContent,
} from './styles'
import { Button } from '@slat-ui/react'
import { ArrowRight } from 'phosphor-react'
import Dashboard from '@/assets/Dashboard.svg'
import Cursor from '@/assets/Cursors.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface MainProps {
  featuresRef: React.RefObject<HTMLDivElement>
  feesRef: React.RefObject<HTMLDivElement>
}

export function Main({ featuresRef, feesRef }: MainProps) {
  const animatedRadiusRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const cellSize = 90 // Tamanho da célula em pixels
  const [numCellsWidth, setNumCellsWidth] = useState(0)
  const [numCellsHeight, setNumCellsHeight] = useState(0)
  const [numCells, setNumCells] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNumCellsWidth(Math.floor(window.innerWidth / cellSize))
      setNumCellsHeight(Math.floor((window.innerHeight * 1.8) / cellSize))
      if (window.innerWidth < 800) {
        setNumCells(0)
      } else {
        setNumCells(numCellsWidth * numCellsHeight)
      }
    }
  }, [numCellsWidth, numCellsHeight])
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (event: any) => {
      if (animatedRadiusRef.current === null) return

      animatedRadiusRef.current.style.setProperty('--x', `${event.clientX}px`)
      animatedRadiusRef.current.style.setProperty('--y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const router = useRouter()

  const { t } = useTranslation()

  return (
    <>
      <Header
        mainRef={containerRef}
        featuresRef={featuresRef}
        feesRef={feesRef}
      />
      <MainContainer ref={containerRef}>
        <MainContent>
          <MiddleContent>
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

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={() => router.push('/waitlist')}
                variant="gradient"
                size="lg"
              >
                {t('open_account', { ns: 'common' })}{' '}
                <ArrowRight weight="bold" size={24} />
              </Button>
              {/* <CalculateSavingButton>
                Calculate your savings
              </CalculateSavingButton> */}
            </div>
          </MiddleContent>

          <DashboardImage>
            <Image
              style={{
                objectFit: 'contain',
              }}
              quality={60}
              src={Cursor}
              alt="Cursor"
              width={1120}
              height={100}
            />
            {/* <Image
              style={{
                objectFit: 'contain',
              }}
              quality={40}
              src={Dashboard}
              alt="Dashboard"
              width={1200}
              height={1120}
            /> */}
          </DashboardImage>
        </MainContent>
        {/* <Grid>
          {Array.from(Array(numCells).keys()).map((cell, index) => (
            <Cell key={index} />
          ))}
        </Grid> */}
        <div className="animatedRadius" ref={animatedRadiusRef} />
      </MainContainer>
    </>
  )
}
