import { keyframes, styled } from '@/styles/stitches.config'

export const FeesContainer = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '10rem auto',
  position: 'relative',
  zIndex: 10,

  '@media (max-width: 768px)': {
    maxWidth: '100vw',
  },
})

export const FeesContent = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '2rem',
    padding: '1rem',
  },
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

export const FeesBox = styled('div', {
  width: '100%',
  maxWidth: 425,
  height: 540,
  padding: '2rem',
  background: '#fbfbfb',
  boxShadow: '0px -80px 120px 120px rgba(76, 86, 115, 0.10)',

  '@media (max-width: 768px)': {
    height: 'auto',
  },

  h2: {
    fontSize: '3rem',
    fontWeight: 700,
    textAlign: 'left',

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
    fontSize: '1rem',
    marginBottom: '.5rem',
    span: {
      color: '$slat-light',
      fontWeight: 700,
    },
  },

  a: {
    textDecoration: 'none',
    color: '$slat-base',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    transition: 'all .2s ease-in-out',

    '&:hover': {
      color: '$slat-dark',
    },
  },

  img: {
    objectFit: 'contain',
  },
})
