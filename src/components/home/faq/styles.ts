import { keyframes, styled } from '@/styles/stitches.config'
import { Heading, Text } from '@slat-ui/react'

export const Container = styled('div', {
  margin: '2rem auto',
  backgroundColor: 'linear-gradient(to right, #030D21, cyan-900, slate-900)',
  maxWidth: '1120px',
  padding: '6rem 1.5rem',

  '@media (max-width: 768px)': {
    padding: '8rem 2rem',
  },
})

export const InnerContainer = styled('div', {
  maxWidth: '4xl',
  margin: '0 auto',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
})

export const Description = styled(Text, {
  color: 'black',
  textAlign: 'center',
  width: '100%',
  marginTop: '.5rem',

  a: {
    color: '$slat-base',
    textDecoration: 'underline',
    transition: 'all 300ms ease',

    '&:hover': {
      color: '$slat-light',
    },
  },
})

export const FaqList = styled('dl', {
  marginTop: '2.5rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
})

export const FaqItem = styled('div', {
  marginTop: '1rem',
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

export const Title = styled(Heading, {
  animation: `${gradientAnimation} 5s ease infinite`,
  background: 'linear-gradient(90deg, $slat-base 0%, $slat-light 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '200% 200%',
  backgroundPosition: '0% 50%',
  textAlign: 'center',
  width: '100%',
})

export const Button = styled('button', {
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  padding: '1rem 1rem',
  borderRadius: '0.5rem',
  justifyContent: 'space-between',
  border: 0,
  color: 'black',
  fontSize: '$lg',
  fontFamily: '$default',
  backgroundColor: 'white',
  cursor: 'pointer',
  lineHeight: '1.75rem',
  boxShadow: '0px -80px 120px rgba(76, 86, 115, 0.05)',

  span: {
    textAlign: 'left',
  },
})

export const IconContainer = styled('span', {
  marginLeft: '1.5rem',
  display: 'flex',
  height: '1.75rem',
  alignItems: 'center',
  transition: 'transform 200ms ease-out',

  variants: {
    open: {
      true: {
        transform: 'rotate(-180deg)',
      },

      false: {
        transform: 'rotate(-90deg)',
      },
    },
  },
})

export const Answer = styled('div', {
  fontSize: 'base',
  lineHeight: '1.75rem',
  color: '$text-description',
  overflow: 'hidden',
  height: 0,
  opacity: 0,
  transition: 'all 200ms ease-out',

  '&.open': {
    height: '65px',
    opacity: 1,
  },
})
