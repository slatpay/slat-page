import SlatpayLogo from '@/assets/Logo.png'
import { Floating } from './styles'

export function LoadingScreen() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        background: '#060A0C',
        zIndex: 9999,
        top: 0,
        left: 0,
      }}
    >
      <Floating
        src={SlatpayLogo}
        alt="Slatpay Icon"
        width={250}
        height={110}
        quality={100}
      />
    </div>
  )
}
