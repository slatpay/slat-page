import { keyframes, styled } from '@/styles/stitches.config'

export const StreamContainer = styled('div', {
  width: '100%',
  maxWidth: 1120,
  margin: '10rem auto',
  position: 'relative',
  zIndex: 10,

  '@media (max-width: 768px)': {
    maxWidth: '100vw',
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

export const StreamContent = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column !important',
    gap: '2rem',
  },

  '.placeholder, video': {
    width: 540,
    height: 380,
    background: '#D9D9D9',
    borderRadius: 8,
    objectFit: 'cover',

    '@media (max-width: 768px)': {
      width: '100%',
      height: 300,
    },
  },

  h2: {
    maxWidth: '20ch',
    fontSize: 36,
    fontWeight: 700,
    textAlign: 'left',

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
    fontSize: 20,
    maxWidth: 525,
    textAlign: 'left',
    margin: '1.25rem 0',

    span: {
      color: '$slat-light',
      fontWeight: 700,
    },
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    fontSize: 20,
    color: '$slat-base',
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',

    '&:hover': {
      color: '$slat-dark',
      textDecoration: 'underline',
    },
  },

  variants: {
    direction: {
      inverse: {
        flexDirection: 'row-reverse',
      },
      normal: {
        marginTop: '5rem',
        flexDirection: 'row',
      },
    },
  },

  defaultVariants: {
    direction: 'normal',
  },
})
