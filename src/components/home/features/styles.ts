import { keyframes, styled } from '@/styles/stitches.config'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'

export const FeaturesContainer = styled('div', {
  width: '120vw',
  height: '100vh',
  marginLeft: '-10vw',
  marginTop: '-30vh',
  transform: 'rotate(-2.551deg)',
  background:
    'radial-gradient(50% 50.00% at 50% 50.00%, #16223A 0%, #030D21 100%)',
  boxShadow: '0px -32px 45px 0px rgba(0, 0, 0, 0.18)',
  position: 'relative',
  zIndex: 10,

  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: -40,
    left: 0,
    background: 'rgba(7, 64, 175, 0.58)',
    width: 400,
    height: 40,
    zIndex: -1,

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },

  '@media (max-width: 768px)': {
    height: 'auto',
    maxWidth: '100vw',
    marginLeft: 0,
    marginTop: 0,
    transform: 'rotate(0deg) !important',
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

export const FeaturesContent = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  display: 'flex',
  color: '#fff',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(2.551deg)',
  padding: '5rem 0',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '2rem',
    transform: 'rotate(0deg) !important',
  },

  '.tag': {
    padding: '0.5rem 1rem',
    borderRadius: '5rem',
    background: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    fontSize: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 8px 8px 0px rgba(99, 106, 126, 0.12)',
    marginBottom: '1.15rem',
  },

  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',

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
    marginTop: '1.15rem',
    fontSize: '1rem',
    textAlign: 'center',
    color: '$text-description',
    maxWidth: '62ch',
  },
})

export const FeaturesGrid = styled('div', {
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  marginTop: '4rem',

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  video: {
    borderRadius: '1rem',
    height: 400,
    objectFit: 'cover',

    '@media (max-width: 768px)': {
      maxWidth: '100%',
      height: 300,
    },
  },
})

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: 550,

  '@media (max-width: 723px)': {
    width: '100%',
  },
})

export const AccordionItem = styled(Accordion.Item, {
  marginBottom: '.3rem',
})

export const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
})

export const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$lg',
  fontFamily: 'Montserrat, sans-serif',
  lineHeight: 1,
  color: '$text-title',
  borderBottom: '1px solid rgba(126, 155, 164, 0.20)',
})

export const StyledChevron = styled(CaretDown, {
  color: '$slat-base',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 14,
  color: '$text-description',
  width: '100%',
  p: {
    textAlign: 'left',
  },

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

export const StyledContentText = styled('div', {
  padding: '0 20px',
  marginBottom: 20,
})
