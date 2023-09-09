import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '@/styles/stitches.config'
import { FC } from 'react'

export const WaitlistOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100vw',
  height: '100vh',
  background: '#00000050',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const openModal = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
})

const closeModal = keyframes({
  '0%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'scale(0)',
  },
})

export const WaitlistContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-state="open"]': {
    animation: `${openModal} 400ms ease`,
  },

  '&[data-state="closed"]': {
    animation: `${closeModal} 400ms ease`,
  },
})

export const WaitlistContent = styled('div', {
  background: '$background-box',
  width: 506,
  padding: '$6 $8',
  borderRadius: '$lg',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  form: {
    marginTop: '$8',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: '$4',

    '.column': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$4',
      width: '100%',

      div: {
        minWidth: '0 !important',
      },
    },
  },
})

export const WaitlistPortal: FC<Dialog.DialogPortalProps> = Dialog.Portal

const IconFlutuate = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-10px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
})

export const WaitlistSuccess = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  textAlign: 'center',

  '.redirect': {
    all: 'unset',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$slat-base',
    cursor: 'pointer',
    transition: 'all 300ms ease',

    '&:hover': {
      borderColor: '$slat-light',
    },
  },

  img: {
    animation: `${IconFlutuate} 5s ease infinite`,
  },

  form: {
    marginTop: '$8',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: '$4',

    textarea: {
      width: '100%',
    },
  },
})
