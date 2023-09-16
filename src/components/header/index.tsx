import Image from 'next/image'
import { HeaderContainer, HeaderContent } from './styles'
import SlatLogo from '@/assets/Logo.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

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
  const { t } = useTranslation()

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

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <HeaderContainer
      css={{
        backgroundColor:
          isScrolledPastMain || scrolled ? 'white' : 'transparent',
      }}
    >
      <span
        className={classNames(
          isScrolledPastMain || scrolled ? '' : 'hidden',
          'absolute inset-0 mt-16 min-w-full r-0 h-1 bg-cyan-500',
        )}
      />
      <HeaderContent isScrolled={isScrolledPastMain || scrolled}>
        <div className="content mt-1 sm:-mt-0.5">
          <Link href="/">
            <Image
              style={{
                filter:
                  isScrolledPastMain || scrolled ? 'invert(1)' : 'invert(0)',
              }}
              src={SlatLogo}
              alt="Slatpay Logo"
              width={156}
              quality={80}
              priority={true}
              height={70}
            />
          </Link>

          <nav>
            {mainRef ? (
              <button onClick={() => goToRef(mainRef)}>{t('home')}</button>
            ) : (
              <Link href="/">{t('home', { ns: 'common' })}</Link>
            )}
            {featuresRef && (
              <button onClick={() => goToRef(featuresRef)}>
                {t('features', { ns: 'common' })}
              </button>
            )}
            <Link href="https://faq.slatpay.com/">FAQ</Link>
            {feesRef && (
              <button onClick={() => goToRef(feesRef)}>
                {t('fees', { ns: 'common' })}
              </button>
            )}
          </nav>

          <div className="user">
            <Link href="https://dashboard.slatpay.com/login">Login</Link>
            <button
              className="leading-3 text-xs md:text-base"
              onClick={() => router.push('/waitlist')}
            >
              {t('join_in_waitlist', { ns: 'common' })}
            </button>
          </div>
        </div>
        <div className="separator" />
      </HeaderContent>
    </HeaderContainer>
  )
}
