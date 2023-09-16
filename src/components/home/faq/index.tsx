import React, { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { CaretDown, CaretUp } from 'phosphor-react'
import {
  Answer,
  Button,
  Container,
  Description,
  FaqItem,
  FaqList,
  IconContainer,
  InnerContainer,
  Title,
} from './styles'
import { Text } from '@slat-ui/react'
import { useTranslation } from 'next-i18next'

const faqs = [
  {
    question: 'faq_title_1',
    answer: 'faq_desc_1',
  },
  {
    question: 'faq_title_2',
    answer: 'faq_desc_2',
  },
  {
    question: 'faq_title_3',
    answer: 'faq_desc_3',
  },
  {
    question: 'faq_title_4',
    answer: 'faq_desc_4',
  },
  {
    question: 'faq_title_5',
    answer: 'faq_desc_5',
  },
  {
    question: 'faq_title_6',
    answer: 'faq_desc_6',
  },
  {
    question: 'faq_title_7',
    answer: 'faq_desc_7',
  },
]

export function Faq() {
  const { t } = useTranslation()

  return (
    <Container>
      <InnerContainer>
        <Title size="3xl">FAQ</Title>
        <Description
          size="lg"
          dangerouslySetInnerHTML={{
            __html: t('faq_description') as string,
          }}
        />
        <FaqList>
          <dl>
            {faqs.map((faq) => (
              <Disclosure as={FaqItem} key={faq.question}>
                {({ open }: { open: boolean }) => (
                  <>
                    <dt>
                      <Disclosure.Button as={Button}>
                        <span>{t(faq.question)}</span>
                        <IconContainer open={open}>
                          <CaretUp weight="bold" aria-hidden="true" />
                        </IconContainer>
                      </Disclosure.Button>
                    </dt>

                    <Disclosure.Panel
                      as={Answer}
                      className={open ? 'open' : ''}
                      static
                    >
                      <Text
                        css={{ padding: '$4', color: '$text-subdescription' }}
                      >
                        {t(faq.answer)}
                      </Text>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </FaqList>
      </InnerContainer>
    </Container>
  )
}
