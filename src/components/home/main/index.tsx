import { useEffect, useRef } from 'react'
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

const createCells = (numCells: number) => {
  return Array(numCells).fill(null)
}

interface MainProps {
  featuresRef: React.RefObject<HTMLDivElement>
  feesRef: React.RefObject<HTMLDivElement>
}

export function Main({ featuresRef, feesRef }: MainProps) {
  const animatedRadiusRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // change numCells per responsive

  const cellSize = 80 // Tamanho da célula em pixels

  const numCellsWidth =
    typeof window !== 'undefined' ? Math.floor(window.innerWidth / cellSize) : 0

  const numCellsHeight =
    typeof window !== 'undefined'
      ? Math.floor((window.innerHeight * 1.2) / cellSize)
      : 0

  const numCells = numCellsWidth * numCellsHeight
  const cells = createCells(numCells)

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
              <h1>
                Beyond Ordinary,
                <br />
                <span>Embrance Extraordinary</span>
              </h1>

              <p>
                Intrigued? Your success story starts here. Join our exclusive
                <br />
                waitlist to get a head start on a more streamlined future.
              </p>
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
                Open account <ArrowRight weight="bold" size={24} />
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
              quality={100}
              src={Cursor}
              alt="Cursor"
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
              width={1200}
              height={1120}
            />
          </DashboardImage>
        </MainContent>
        <Grid>
          {cells.map((cell, index) => (
            <Cell key={index} />
          ))}
        </Grid>
        <div className="animatedRadius" ref={animatedRadiusRef} />
      </MainContainer>
    </>
  )
}
