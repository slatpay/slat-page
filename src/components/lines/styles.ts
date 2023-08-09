import { styled } from '@/styles/stitches.config'

export const Lines = styled('div', {
  maxWidth: '1120px',
  height: '100vh',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,

  backgroundImage: `
  linear-gradient(to right, transparent calc(223px * 0), #97ABB130 calc(223px * 0), #97ABB130 calc(223px * 0 + 1px), transparent calc(223px * 0 + 1px)),
  linear-gradient(to right, transparent calc(223px * 1), #97ABB130 calc(223px * 1), #97ABB130 calc(223px * 1 + 1px), transparent calc(223px * 1 + 1px)),
  linear-gradient(to right, transparent calc(223px * 2), #97ABB130 calc(223px * 2), #97ABB130 calc(223px * 2 + 1px), transparent calc(223px * 2 + 1px)),
  linear-gradient(to right, transparent calc(223px * 3), #97ABB130 calc(223px * 3), #97ABB130 calc(223px * 3 + 1px), transparent calc(223px * 3 + 1px)),
  linear-gradient(to right, transparent calc(223px * 4), #97ABB130 calc(223px * 4), #97ABB130 calc(223px * 4 + 1px), transparent calc(223px * 4 + 1px)),
  linear-gradient(to right, transparent calc(223px * 5), #97ABB130 calc(223px * 5), #97ABB130 calc(223px * 5 + 1px), transparent calc(223px * 5 + 1px))`,
  backgroundSize: '1120px 100%',
  backgroundRepeat: 'repeat-y',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})
