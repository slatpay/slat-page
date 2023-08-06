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
import { useInView } from 'react-intersection-observer'

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
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

  const [accordion, setAccordion] = React.useState('item-1')

  const img = accordionImg(accordion)
  return (
    <FeaturesContainer
      css={{
        transform: inView
          ? 'translateY(0) rotate(-2.551deg)'
          : 'translateY(100px) rotate(-2.551deg)',
        transition: 'opacity 1s, transform 1s',
      }}
      ref={featuresRef}
    >
      <FeaturesContent ref={ref}>
        <span className="tag">MANAGE YOUR PROJECT</span>
        <h2>
          Unveling Features, <span>Enabling Success</span>
        </h2>
        <p>
          Discover the power of SlatPay's comprehensive, user-friendly features,
          designed to transform your project and financial management.
        </p>

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
                      <WifiHigh size={20} /> Real-time project collaboration
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>
                    Experience the power of real-time with SlatPay. Whether it's
                    managing your team, tracking sales, or monitoring project
                    progress, our real-time functionality keeps you updated
                    every step of the way.
                  </p>
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
                      <ChartBar size={20} /> Checkout Analysis Tools
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>
                    Make informed decisions and boost your sales with our
                    checkout analysis tools. They provide deep insights into
                    consumer behavior, enabling you to optimize your strategy
                    and reach your audience more effectively.
                  </p>
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
                      <Wallet size={20} /> Send Money Feature
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>
                    Simplify transactions with our Send Money feature. With a
                    few clicks, you can transfer funds quickly and securely.
                    Whether you're paying suppliers or rewarding your team, we
                    make financial transactions a hassle-free task.
                  </p>
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
                      <CurrencyDollar size={20} /> Currency changer
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>
                    Through our currency changer feature, you can sell your
                    project in the currency of your choice and accommodate
                    customers from all around the world. When creating a
                    project, select your preferred currency and sell in the
                    current currency. Don't let borders limit you.
                  </p>
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
                      <Users size={20} /> Affiliates Showcase
                    </div>
                    <StyledChevron aria-hidden />
                  </StyledTrigger>
                </StyledHeader>

                <AccordionContent>
                  <p>
                    Expand your reach with our Affiliates Showcase feature.
                    Display your products to other users and encourage them to
                    try to become affiliates. It's a great way to maximize your
                    product's visibility and expand your sales potential.
                  </p>
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
