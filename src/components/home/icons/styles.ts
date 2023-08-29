import { keyframes, styled } from '@/styles/stitches.config'

export const IconsContainer = styled('div', {
  width: '100%',
  maxWidth: 1120,
  margin: '10rem auto',

  '@media (max-width: 768px)': {
    maxWidth: '100vw',
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

export const IconsContent = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
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
    fontSize: '1rem',
    maxWidth: '55ch',
    textAlign: 'center',
    marginBottom: '.5rem',
    span: {
      color: '$slat-light',
      fontWeight: 700,
    },
  },
})

export const IconsGrid = styled('div', {
  width: '100%',
  maxWidth: 645,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',

  div: {
    maxWidth: 200,
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    position: 'relative',

    // get the second, forty and fifth child
    '&:nth-child(2), &:nth-child(5)': {
      '&::before': {
        left: -17,
      },
    },

    '&:first-child, &:nth-child(4)': {
      '&::before': {
        left: -15,
      },
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 58,
      left: -19,
      width: 3,
      height: 25,
      background: '$slat-base',
    },
  },

  svg: {
    color: '$slat-base',
  },

  h3: {
    fontSize: '1rem',
    color: '#09131E',
    fontWeight: 400,
  },

  p: {
    fontSize: 12,
    color: '#233F60',
    textAlign: 'left !important',
  },
})
