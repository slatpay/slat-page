import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { CaretDown, CaretUp } from 'phosphor-react'

const faqs = [
  {
    question: 'What is SlatPay?',
    answer:
      'SlatPay is a payment platform designed to revolutionize your digital sales. It offers a range of tools for managing projects, creating products, and optimizing financial transactions.',
  },
  {
    question: 'How can I get started with SlatPay?',
    answer:
      "You can get started by joining SlatPay's exclusive waitlist to gain access to a more simplified future in online sales.",
  },
  {
    question: "What are SlatPay's fees?",
    answer: 'The sales commission is 4.99% + R$ 1.89 per transaction.',
  },
  {
    question: 'What tools are available on SlatPay?',
    answer:
      'SlatPay offers real-time analytics tools, money sending features, currency exchange, and an affiliate showcase.',
  },
  {
    question: 'What is SlatTV?',
    answer:
      'SlatTV is an innovative arm of SlatPay that allows you to host and sell your infoproducts, e-books, courses, and more.',
  },
  {
    question: 'Is SlatPay secure?',
    answer: 'Yes, SlatPay offers secure and reliable transaction processing.',
  },
  {
    question: 'How can SlatPay help increase my sales?',
    answer:
      'SlatPay offers an optimized checkout process and robust analytics to help you understand your sales patterns and growth.',
  },
]

// const faqs_pt = [
//   {
//     question: 'O que é a SlatPay?',
//     answer:
//       'A SlatPay é uma plataforma de pagamento projetada para revolucionar suas vendas digitais. Ela oferece uma variedade de ferramentas para gerenciar projetos, criar produtos e otimizar transações financeiras.',
//   },
//   {
//     question: 'Como posso começar com a SlatPay?',
//     answer:
//       'Você pode começar participando da lista de espera exclusiva da SlatPay para ter acesso a um futuro mais simplificado em vendas online.',
//   },
//   {
//     question: 'Quais são as taxas da SlatPay?',
//     answer: 'A comissão de vendas é de 4,99% + R$ 1,89 por transação.',
//   },
//   {
//     question: 'Quais ferramentas estão disponíveis na SlatPay?',
//     answer:
//       'A SlatPay oferece ferramentas de análise em tempo real, recursos de envio de dinheiro, trocador de moeda e uma vitrine de afiliados.',
//   },
//   {
//     question: 'O que é o SlatTV?',
//     answer:
//       'O SlatTV é um braço inovador da SlatPay que permite hospedar e vender seus infoprodutos, e-books, cursos e muito mais.',
//   },
//   {
//     question: 'A SlatPay é segura?',
//     answer:
//       'Sim, a SlatPay oferece processamento de transações seguro e confiável.',
//   },
//   {
//     question: 'Como a SlatPay pode ajudar a aumentar minhas vendas?',
//     answer:
//       'A SlatPay oferece um processo de checkout otimizado e análises robustas para ajudá-lo a entender seus padrões de vendas e crescimento.',
//   },
// ]

export function Faq() {
  return (
    <div className="my-40" id="#faq">
      <div className="bg-gradient-to-r from-[#030D21] via-cyan-900 to-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 ">
          <div className="mx-auto max-w-4xl divide-y divide-white/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
              FAQ
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-white/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <CaretUp className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <CaretDown
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-200 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel as="dd" className="mt-2 pr-12" static>
                          <p className="text-base leading-7 text-gray-300">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
