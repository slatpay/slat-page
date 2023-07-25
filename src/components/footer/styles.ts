import { styled } from '@/styles/stitches.config'

export const FooterContainer = styled('footer', {
  width: '100%',
  maxWidth: 1120,
  margin: '10rem auto',
  position: 'relative',
  zIndex: 10,

  '@media (max-width: 768px)': {
    maxWidth: '100vw',
    padding: '1rem',
    marginBottom: '2rem',
  },
})

export const FooterContent = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '2rem',
  },

  '.logo': {
    filter: 'invert(100%)',
    objectFit: 'cover',
  },

  '.copyrights': {
    fontSize: '$sm',
    color: '#737373',
    marginTop: 310,
    paddingLeft: '1.5rem',

    '@media (max-width: 768px)': {
      marginTop: '1rem',
      paddingLeft: 0,
    },
  },
})

export const FooterLinks = styled('div', {
  display: 'grid',
  width: 640,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',

  '@media (max-width: 768px)': {
    width: '100%',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  h2: {
    fontSize: '$lg',
    fontWeight: 700,
    marginBottom: '1rem',
  },

  ul: {
    listStyle: 'none',

    li: {
      marginBottom: '1.15rem',
      fontSize: '$sm',
      color: '#737373',
      cursor: 'pointer',
      transition: 'color 0.2s ease-in-out',

      '&:hover': {
        color: '$slat-base',
      },

      a: {
        unset: 'all',
        fontSize: '$sm',
        color: '#737373',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'color 0.2s ease-in-out',

        '&:hover': {
          color: '$slat-base',
        },
      },
    },
  },

  '.social': {
    marginTop: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',

    '@media (max-width: 768px)': {
      marginTop: '2rem',
    },

    a: {
      textDecoration: 'none',
      color: '#000',
      transition: 'color 0.2s ease-in-out',

      '&:hover': {
        color: '$slat-base',
      },
    },
  },
})
