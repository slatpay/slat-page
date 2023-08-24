/* eslint-disable react/no-unescaped-entities */
import {
  AccordionItem,
  AccordionRoot,
  FeaturesContainer,
  FeaturesContent,
  FeaturesGrid,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './styles'

import {
  ChartBar,
  CurrencyDollar,
  Users,
  Wallet,
  WifiHigh,
} from 'phosphor-react'
import { AccordionContentProps } from '@radix-ui/react-accordion'
import React, { ForwardedRef } from 'react'
import { useTranslation } from 'next-i18next'

const accordionImg = (accordion: string) => {
  switch (accordion) {
    case 'item-1':
      return 'https://cdn.slatpay.com/cdn/1.mp4'
    case 'item-2':
      return 'https://cdn.slatpay.com/cdn/2.mp4'
    case 'item-3':
      return 'https://cdn.slatpay.com/cdn/3.mp4'
    case 'item-4':
      return 'https://cdn.slatpay.com/cdn/4.mp4'
    case 'item-5':
      return 'https://cdn.slatpay.com/cdn/5.mp4'
    default:
      return 'https://cdn.slatpay.com/cdn/1.mp4'
  }
}

interface FeaturesProps {
  featuresRef: React.RefObject<HTMLDivElement>
}

export function Features({ featuresRef }: FeaturesProps) {
  const [accordion, setAccordion] = React.useState('item-1')

  const img = accordionImg(accordion)
  const { t } = useTranslation()

  return (
    <FeaturesContainer>
      <FeaturesContent ref={featuresRef}>
        <span className="tag">{t('manage_project')}</span>
        <h2 dangerouslySetInnerHTML={{ __html: t('features_title') }} />
        <p>{t('features_desc')}</p>

        <FeaturesGrid>
          <video key={img} width={600} height={415} autoPlay muted loop>
            <source src={img} type="video/mp4" />
          </video>
          <div>
            <AccordionRoot
              defaultChecked
              type="single"
              defaultValue="item-1"
              collapsible
              onValueChange={(value) => setAccordion(value)}
            >
              <AccordionItem value="item-1">
                <StyledHeader>
                  <StyledTrigger>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <WifiHigh size={20} /> {t('feature_real_time_title')}
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>{t('feature_real_time_desc')}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <StyledHeader>
                  <StyledTrigger>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <ChartBar size={20} /> {t('feature_checkout_title')}
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>{t('feature_checkout_desc')}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <StyledHeader>
                  <StyledTrigger>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <Wallet size={20} /> {t('feature_send_title')}
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>{t('feature_send_desc')}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <StyledHeader>
                  <StyledTrigger>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <CurrencyDollar size={20} /> {t('feature_currency_title')}
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>{t('feature_currency_desc')}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <StyledHeader>
                  <StyledTrigger>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <Users size={20} /> {t('feature_affiliates_title')}
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>{t('feature_affiliates_desc')}</p>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </div>
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  )
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)

AccordionContent.displayName = 'AccordionContent'
