import { keyframes, styled } from '@/styles/stitches.config'

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

export const StartContainer = styled('div', {
  width: '100%',
  maxWidth: 875,
  height: 495,
  margin: '0 auto',
  background: '#000',

  '@media (max-width: 768px)': {
    maxWidth: '95vw',
    height: 400,
  },
})

export const StartContent = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',

  h2: {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },

    span: {
      // create linear gradient animation
      background: 'linear-gradient(90deg, $slat-base 0%, $slat-light 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 50%',
      animation: `${gradientAnimation} 5s ease infinite`,
    },
  },

  p: {
    fontSize: 16,
    fontWeight: 400,
    maxWidth: '50ch',
    lineHeight: '160%' /* 25.711px */,
    background:
      'linear-gradient(10deg, #FFF 0%, rgba(255, 255, 255, 0.60) 15.63%, #FFF 33.85%, rgba(255, 255, 255, 0.60) 48.96%, #FFF 64.06%, rgba(255, 255, 255, 0.60) 81.77%, #FFF 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: 14,
      maxWidth: '80%',
    },
  },

  button: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
    width: 175,
    height: 50,
    background: '$slat-base',
    color: '#fff',
    fontSize: 16,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',

    '@media (max-width: 768px)': {
      width: 150,
      height: 40,
      fontSize: 14,
    },

    '&:hover': {
      background: '$slat-dark',
    },
  },
})
