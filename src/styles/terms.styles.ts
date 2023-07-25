import { Avatar } from '@slat-ui/react'
import { keyframes, styled } from './stitches.config'

export const TermsContainer = styled('main', {
  width: '100%',
  height: '100%',
  maxWidth: 1000,
  margin: '5rem auto',
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

export const TermsContent = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',

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
    span: {
      color: '$slat-base',
    },
  },

  '.avatarColumns': {
    marginTop: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '2.5rem',

    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '$slat-base',
      marginBottom: '1rem',
    },
  },
})

export const TermsAvatar = styled(Avatar, {
  variants: {
    size: {
      medium: {
        width: 100,
        height: 100,
      },
    },
  },
})
