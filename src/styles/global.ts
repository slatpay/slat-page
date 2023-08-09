import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    color: '$text',
    background:
      'linear-gradient(180deg, #F7F9FC 0%, #ECF1FF 99.99%, #ECF1FF 100%)',
    // overflowX: 'hidden',
    maxWidth: '100vw',

    '-webkit-font-smoothing': 'antialiased',

    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(28, 28, 28, 0.332)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient($slat-base, $slat-dark)',
    },
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '$regular',
  },
})
