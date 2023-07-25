import { keyframes, styled } from '@/styles/stitches.config'
import Image from 'next/image'

const float = keyframes({
  '0%': { transform: 'translateY(0px)', opacity: 0 },
  '50%': { transform: 'translateY(-12px)', opacity: 1 },
  '100%': { transform: 'translateY(0px)', opacity: 0 },
})

export const Floating = styled(Image, {
  animation: `${float} 2s ease-in-out infinite`,
})
