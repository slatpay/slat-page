import { useEffect, useRef, useState } from 'react'
import {
  Cell,
  DashboardImage,
  Grid,
  MainContainer,
  MainContent,
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
  const animatedRadiusRef = useRef<HTMLDivElement>(null)

  const cellSize = 70 // Tamanho da célula em pixels
  const [numCells, setNumCells] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const numCellsWidth = Math.ceil(screenWidth / cellSize) // Use Math.ceil to ensure it covers the full width
      const numCellsHeight = Math.floor((screenHeight * 1.3) / cellSize)
      if (screenWidth < 800) {
        setNumCells(0)
      } else {
        setNumCells(numCellsWidth * numCellsHeight);
      }
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (event: MouseEvent) => {
      if (animatedRadiusRef.current === null) return
      const rect = animatedRadiusRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left // Adjust for element position
      const y = event.clientY - rect.top // Adjust for element position
      animatedRadiusRef.current.style.setProperty('--x', `${x}px`)
      animatedRadiusRef.current.style.setProperty('--y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

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

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <OpenAccountButton href="/waitlist">
            {t('open_account', { ns: 'common' })}{' '}
            <ArrowRight weight="bold" size={24} />
          </OpenAccountButton>
        </div>

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
      <Grid>
        {Array.from(Array(numCells).keys()).map((cell, index) => (
          <Cell key={index} />
        ))}
      </Grid>
      <div className="animatedRadius" ref={animatedRadiusRef} />
    </MainContainer>
  )
}