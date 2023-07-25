import Image from 'next/image'
import { HeaderContainer, HeaderContent } from './styles'
import SlatLogo from '@/assets/Logo.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface HeaderProps {
  mainRef?: React.RefObject<HTMLDivElement>
  featuresRef?: React.RefObject<HTMLDivElement>
  feesRef?: React.RefObject<HTMLDivElement>
  scrolled?: boolean
}

export function Header({
  mainRef,
  featuresRef,
  feesRef,
  scrolled = false,
}: HeaderProps) {
  const router = useRouter()

  type GoToRef = (ref?: React.RefObject<HTMLDivElement>) => void
  const goToRef: GoToRef = (ref?: React.RefObject<HTMLDivElement>) => {
    if (!ref) return

    if (ref.current === null) return

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (!mainRef) return

      if (mainRef.current === null) return

      const mainBottomY = mainRef.current?.getBoundingClientRect().bottom + 800
      if (mainBottomY !== undefined) {
        setIsScrolledPastMain(window.scrollY > mainBottomY)
      }
    }

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [mainRef])

  return (
    <HeaderContainer
      css={{
        backgroundColor:
          isScrolledPastMain || scrolled ? 'white' : 'transparent',
      }}
    >
      <HeaderContent isScrolled={isScrolledPastMain || scrolled}>
        <div className="content">
          <Link href="/">
            <Image
              style={{
                filter:
                  isScrolledPastMain || scrolled ? 'invert(1)' : 'invert(0)',
              }}
              src={SlatLogo}
              alt="Slatpay Logo"
              width={156}
              height={70}
            />
          </Link>

          <nav>
            {mainRef ? (
              <button onClick={() => goToRef(mainRef)}>Home</button>
            ) : (
              <Link href="/">Home</Link>
            )}
            {featuresRef && (
              <button onClick={() => goToRef(featuresRef)}>Features</button>
            )}
            <Link href="/faq">FAQ</Link>
            {feesRef && <button onClick={() => goToRef(feesRef)}>Fees</button>}
          </nav>

          <div className="user">
            <Link href="https://dashboard.slatpay.com/login">Login</Link>
            <button onClick={() => router.push('/waitlist')}>
              Join in Waitlist
            </button>
          </div>
        </div>
        <div className="separator" />
      </HeaderContent>
    </HeaderContainer>
  )
}
