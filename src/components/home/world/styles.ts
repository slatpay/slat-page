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

export const GlobalContainer = styled('div', {
  width: '125vw',
  height: 750,
  maxHeight: 750,
  background: 'radial-gradient(50% 50% at 50% 50%, #16223A 0%, #030D21 100%)',
  boxShadow: '0px -32px 45px 0px rgba(0, 0, 0, 0.18)',
  transform: 'rotate(-2.551deg)',
  marginLeft: '-10vw',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: -40,
    left: 0,
    background: 'rgba(7, 64, 175, 0.58)',
    width: 400,
    height: 40,
    zIndex: -1,
  },

  '@media (max-width: 768px)': {
    transform: 'rotate(0deg) !important',
    maxWidth: '100vw',
    marginLeft: 0,
  },
})

export const GlobalContent = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '95vw',
  marginLeft: 'auto',
  transform: 'rotate(2.551deg)',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width: 768px)': {
    maxWidth: '100vw',
    transform: 'rotate(0deg) !important',
    margin: '0 auto',
  },

  '.tag': {
    color: '$slat-base',
  },

  h2: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#fff',
    maxWidth: '20ch',
    textAlign: 'left',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
      maxWidth: '100%',
    },

    span: {
      // create linear gradient animation
      background: 'linear-gradient(90deg, $slat-dark 0%, $slat-light 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 50%',
      animation: `${gradientAnimation} 5s ease infinite`,
    },
  },

  p: {
    color: '#C9D9DE',
    fontSize: '1rem',
    fontWeight: 500,
    maxWidth: '55ch',
    textAlign: 'left',

    '@media (max-width: 768px)': {
      fontSize: '0.875rem',
      maxWidth: '100%',
    },
  },

  button: {
    all: 'unset',
    maxWidth: '15ch',
    padding: '0.75rem 1.25rem',
    borderRadius: 35,
    background: 'linear-gradient(90deg, #00A0D8 0%, #00CECE 100%)',
    backgroundSize: '200% 200%',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1rem',
    display: 'flex',
    gap: '0.5rem',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundPosition: '50% 100%',
    },
  },
})
