import { keyframes, styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const MainContainer = styled('div', {
  width: '100vw',
  height: '155vh',
  background: '#00040B',
  position: 'relative',
  zIndex: 2,

  '@media (max-width: 768px)': {
    height: '100vh',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    background:
      'radial-gradient(ellipse at center, #00040B00 15%, #00040B 100%)',
    zIndex: 5,
  },

  '.animatedRadius': {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    background:
      'radial-gradient(250px circle at var(--x) var(--y), $slat-dark 10%, hsla(256, 7%, 97%, .0) 70%)',
    zIndex: 3,
    transition: 'all 0.2s ease-in-out',
    '-webkit-transition': 'all 0.2s ease-in-out',
  },
})

export const Cell = styled('div', {
  height: '69px',
  width: '69px',
  outline: '1px solid rgba(255, 255, 255, .02)',
  backgroundColor: '#00040B',
  zIndex: 5,
})

export const Grid = styled('div', {
  display: 'grid',
  alignItems: 'center',
  gap: '1px',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  gridTemplateColumns: 'repeat(auto-fill, 70px)',
  gridTemplateRows: 'repeat(auto-fill, 70px)',
})

const gradientAnimation = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

export const MainContent = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '265px 0 0 0',
  gap: '2rem',
  position: 'relative',
  zIndex: 10,

  '@media (max-width: 768px)': {
    maxWidth: '100vw',
    padding: '150px 0 0 0',
  },

  h1: {
    fontSize: 54,
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: 32,
    },

    span: {
      background: 'linear-gradient(90deg, $slat-dark 0%, $slat-light 100%)',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      WebkitTextFillColor: 'transparent',
      '-webkit-text-fill-color': 'transparent',
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 50%',
      animation: `${gradientAnimation} 5s ease infinite`,
      '-webkit-animation': `${gradientAnimation} 5s ease infinite`,
    },
  },

  p: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '160%' /* 25.711px */,
    background:
      'linear-gradient(10deg, #FFF 0%, rgba(255, 255, 255, 0.60) 15.63%, #FFF 33.85%, rgba(255, 255, 255, 0.60) 48.96%, #FFF 64.06%, rgba(255, 255, 255, 0.60) 81.77%, #FFF 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: 14,
    },
  },
})

export const OpenAccountButton = styled(Link, {
  all: 'unset',
  display: 'flex',
  height: 52,
  padding: '0 2.5rem',
  alignItems: 'center',
  fontWeight: 700,
  cursor: 'pointer',
  color: '#fff',
  gap: '10px',
  border: 0,
  borderRadius: '$md',
  background: 'linear-gradient(90deg, $slat-dark 0%, $slat-light 100%)',
  opacity: 0.9,
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    opacity: 1,
  },
})

export const MiddleContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    width: '100%',
    height: 70,
    borderRadius: '740px',
    background:
      'linear-gradient(88deg, rgba(0, 160, 216, 0.50) 0%, rgba(4, 0, 206, 0.50) 100%)',
    filter: 'blur(100px)',
  },
})

export const DashboardImage = styled('div', {
  position: 'relative',

  '@media (max-width: 768px)': {
    img: {
      maxWidth: '100%',
      width: '100%',
      height: 'auto',
      objectFit: 'contain',
    },
  },

  '&::before': {
    content: '""',
    width: 370,
    height: 310,
    background: 'rgba(7, 64, 175, 0.25)',
    filter: 'blur(100px)',
    borderRadius: '10px',
    position: 'absolute',
    left: -80,
    top: 20,
    zIndex: -1,
  },
})
