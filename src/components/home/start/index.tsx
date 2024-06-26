import { ArrowUpRight } from 'phosphor-react'
import { StartContainer, StartContent } from './styles'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export function Start() {
  const router = useRouter()

  const { t } = useTranslation()

  return (
    <StartContainer>
      <StartContent>
        <h2>
          <span>{t('less_fees_footer')}</span>
        </h2>
        <p>{t('get_ahead')}</p>
        <button
          onClick={() =>
            router.push('https://dashboard.slatpay.com/pt-br/signup')
          }
        >
          {t('open_account')} <ArrowUpRight weight="bold" />
        </button>
      </StartContent>

      <video
        className="force-autoplay"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        disablePictureInPicture
        playsInline
      >
        <source
          src="https://cdn.slatpay.com/cdn/startBg.mp4"
          type="video/mp4"
        />
      </video>
    </StartContainer>
  )
}
