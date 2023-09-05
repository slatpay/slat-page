import { styled } from '@/styles/stitches.config'

export const DisruptiveContainer = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '300px auto',

  '.title': {
    padding: '0 1rem',
    display: 'block',
    fontSize: '1rem',
    fontWeight: 700,
    color: '$slat-base',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: -5,
      width: 3,
      height: 25,
      backgroundColor: '$slat-base',
      boxShadow: '2px 0px 5px 0px rgba(0, 160, 216, 0.60)',
    },
  },

  '@media (max-width: 768px)': {
    marginTop: '18rem',
    maxWidth: '100vw',
  },
})

export const DisruptiveContent = styled('div', {
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.25rem',
  marginTop: '1rem',

  h2: {
    fontSize: '2rem',
    fontWeight: 700,
  },

  p: {
    color: '#50547A',
    maxWidth: '40ch',
    fontWeight: 500,

    span: {
      color: '$slat-base',
      fontWeight: 600,
    },
  },

  button: {
    all: 'unset',
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
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundPosition: '50% 100%',
    },
  },
})

export const DisruptiveImage = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',

  '@media (max-width: 768px)': {
    display: 'none',
  },

  img: {
    '@media (max-width: 768px)': {
      objectFit: 'contain !important',
      width: '100%',

      '&:first-child, &:nth-child(1)': {
        display: 'none',
      },
    },
  },
})
