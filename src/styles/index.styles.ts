import { styled } from './stitches.config'

export const BrandsContainer = styled('div', {
  maxWidth: '1120px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: '300px',

  '@media (max-width: 768px)': {
    display: 'none',
  },

  // to tablet
  '@media (max-width: 1024px)': {
    marginTop: '400px',
  },

  img: {
    objectFit: 'cover',
  },
})
