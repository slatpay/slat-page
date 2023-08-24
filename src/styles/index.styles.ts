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

  // min tablet, max screen
  '@media (min-width: 768px) and (max-width: 1500px)': {
    marginTop: '600px',
  },

  img: {
    objectFit: 'cover',
  },
})
