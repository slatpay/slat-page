import { styled } from '@/styles/stitches.config'

export const HeaderContainer = styled('header', {
  width: '100vw',
  height: 70,
  background: 'rbga(0, 0, 0, 255)',
  backdropFilter: 'blur(8px)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  transition: 'all 0.3s ease-in-out',
})

export const HeaderContent = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: 1120,
  margin: '0 auto',

  '@media (max-width: 768px)': {
    maxWidth: '100vw',
  },

  img: {
    objectFit: 'cover',
    transition: 'all 0.3s ease-in-out',
  },

  '.separator': {
    width: '100%',
    height: 1,
    background:
      'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(255, 255, 255, 0.13) 27.08%, rgba(255, 255, 255, 0.13) 72.40%, rgba(0, 0, 0, 0.00) 100%)',
  },

  '.content': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '$8',

      '@media (max-width: 768px)': {
        display: 'none',
      },

      'a, button': {
        all: 'unset',
        cursor: 'pointer',
        fontSize: 'sm',
        color: '#8A8A8A',
        textDecoration: 'none',
        transition: 'color 0.2s ease-in-out',

        '&:hover, &[data-active="true"]': {
          color: '#fff',
        },
      },
    },

    '.user': {
      display: 'flex',
      alignItems: 'center',
      gap: '$4',

      '@media (max-width: 768px)': {
        paddingRight: '$4',
      },

      a: {
        fontSize: 'sm',
        color: '#fff',
        textDecoration: 'none',
        transition: 'color 0.2s ease-in-out',
      },

      button: {
        fontSize: 'sm',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: 8,
        border: '1px solid #2A5065',
        background:
          'linear-gradient(315deg, rgba(8, 69, 126, 0.00) 0%, rgba(8, 91, 126, 0.04) 100%), linear-gradient(152deg, rgba(8, 69, 126, 0.00) 0%, rgba(8, 91, 126, 0.32) 99.75%), rgba(47, 180, 255, 0.12)',
        boxShadow: '0px 0px 28px 0px rgba(47, 180, 255, 0.25)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        padding: '6px 16px',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        gap: '10px',
        transition: 'all 0.2s ease-in-out',

        '&:hover': {
          background:
            'linear-gradient(315deg, rgba(8, 69, 126, 0.00) 0%, rgba(8, 91, 126, 0.04) 100%), linear-gradient(152deg, rgba(8, 69, 126, 0.00) 0%, rgba(8, 91, 126, 0.32) 99.75%), rgba(47, 180, 255, 0.25)',
          boxShadow: '0px 0px 28px 0px rgba(47, 180, 255, 0.35)',
        },
      },
    },
  },

  variants: {
    isScrolled: {
      true: {
        'a, button': {
          color: '#333 !important',

          '&:hover, &[data-active="true"]': {
            color: '#000 !important',
          },
        },

        '.user': {
          // change the button background to contrast with white background

          button: {
            color: '#333 !important',
            border: '1px solid #333',
            background:
              'linear-gradient(315deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(152deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 99.75%), rgba(47, 180, 255, 0.12) !important',
            boxShadow: '0px 0px 28px 0px rgba(47, 180, 255, 0.25) !important',
            backdropFilter: 'blur(4px)',

            '&:hover': {
              background:
                'linear-gradient(315deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(152deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 99.75%), rgba(47, 180, 255, 0.25) !important',
              boxShadow: '0px 0px 28px 0px rgba(47, 180, 255, 0.35) !important',
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    isScrolled: false,
  },
})
