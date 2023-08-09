import { keyframes, styled } from './stitches.config'

export const WaitListContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  background:
    'radial-gradient(50% 50.00% at 50% 50.00%, #070A0D 0%, #00040B 100%)',

  '@media (max-width: 768px)': {
    height: '100vh',
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

export const WaitListContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  position: 'relative',
  zIndex: 10,

  '.middleBorder': {
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',

    p: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      color: '#ffffff30',
    },

    div: {
      '&:nth-child(1)': {
        width: 100,
        height: '1px',
        background: 'linear-gradient(-90deg, #ffffff30 0%, #ffffff00 100%)',
      },

      '&:nth-child(3)': {
        width: 100,
        height: '1px',
        background: 'linear-gradient(90deg, #ffffff30 0%, #ffffff00 100%)',
      },
    },
  },

  h1: {
    fontSize: '3rem',
    color: '#ffffff',
    margin: '1rem 0',
    textAlign: 'center',
    background:
      'linear-gradient(180deg, rgba(0, 4, 11, 0.00) 0%, rgba(255, 255, 255, 0.90) 20%, #FFF 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% 200%',
    backgroundPosition: '50% 0%',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },

    span: {
      background: 'linear-gradient(90deg, $slat-base, $slat-light)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 50%',
      animation: `${gradientAnimation} 5s ease infinite`,
    },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',

    '.input': {
      width: 350,
      height: 50,
      background: '#0B111B70',
      border: '1px solid #20273370',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '1rem',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        border: '1px solid #202733',
      },

      '&:focus-within': {
        border: '1px solid #202733',
        background: '#0B111B',
        input: {
          color: '#fff !important',
        },

        svg: {
          color: '#fff !important',
        },
      },

      input: {
        all: 'unset',
        padding: '0 .5rem',
        color: '#868686',
      },

      svg: {
        color: '#868686',
        transition: 'all 0.2s ease-in-out',
      },
    },

    button: {
      all: 'unset',
      width: 350,
      height: 50,
      background: '#202733',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      color: '#fff',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        filter: 'brightness(1.2)',
      },
    },
  },
})

const lineMovementAnimation = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
  },
  '100%': {
    transform: 'translateY(100%)',
  },
})

const lineMovementAnimation2 = keyframes({
  '0%': {
    transform: 'translateY(100%)',
  },
  '100%': {
    transform: 'translateY(-100%)',
  },
})

export const WaitListDraws = styled('div', {
  position: 'absolute',
  left: 400,
  marginTop: '15rem',

  '@media (max-width: 768px)': {
    display: 'none',
  },

  '.draw': {
    width: 1,
    height: 350,
    background: '#49494930',
    position: 'relative',
    overflow: 'hidden',

    // create a line animation with linear gradient, like be placeholder
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, #00CECE00 0%, $slat-base 100%)',
      boxShadow: '0px 0px 10px 5px $slat-base',

      animation: `${lineMovementAnimation} 2s ease infinite`,
    },
  },

  '.draw2': {
    width: 150,
    height: 1,
    background: '#49494930',
    transform: 'translateX(-35%) translateY(-50px)',
  },
})

export const WaitListSecondDraws = styled('div', {
  position: 'absolute',
  right: 350,
  marginTop: '-15rem',

  '@media (max-width: 768px)': {
    display: 'none',
  },

  '.draw': {
    width: 1,
    height: 350,
    background: '#49494930',
    position: 'relative',
    overflow: 'hidden',

    // create a line animation with linear gradient, like be placeholder
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #CE464600 0%, $danger-high 100%)',
      boxShadow: '0px 0px 10px 5px $danger-high',

      animation: `${lineMovementAnimation2} 2s ease infinite 1s`,
    },
  },

  '.draw2': {
    width: 150,
    height: 1,
    background: '#49494930',
    transform: 'translateX(-60%) translateY(-300px)',
  },
})

export const MiddleGradient = styled('div', {
  position: 'absolute',
  width: '50%',
  height: 70,
  borderRadius: '740px',
  transform: 'rotate(23deg)',
  background:
    'linear-gradient(88deg, rgba(0, 160, 216, 0.50) 0%, rgba(4, 0, 206, 0.50) 100%)',
  filter: 'blur(100px)',
})
