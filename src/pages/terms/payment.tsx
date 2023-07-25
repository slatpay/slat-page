/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
  TermsAvatar,
  TermsContainer,
  TermsContent,
} from '@/styles/terms.styles'
import Profile from '@/assets/fonseca.jpeg'

export default function Payments() {
  return (
    <>
      <Header scrolled />
      <TermsContainer>
        <TermsContent>
          <div />
          <h1>
            <span>Payments and Fees</span>
          </h1>
          <p
            style={{ fontSize: '1rem', fontWeight: 400, lineHeight: '1.5rem' }}
          >
            <span>Payments</span>
            <br />
            <br />
            Slatpay offers a variety of payment methods, including credit cards,
            debit cards, and bank transfers, to provide the best possible
            experience for our users. However, the availability of specific
            payment methods may vary depending on certain factors such as your
            location or the nature of the transaction.
            <br />
            <br />
            <span>Transaction Fees</span>
            <br />
            <br />
            To fund the provision of our services, Slatpay charges transaction
            fees that are detailed in our fee policy. Please note that these
            fees are applied to each transaction carried out through our
            platform and are automatically deducted from the transaction amount.
            <br />
            <br />
            <span>Refund Policy</span>
            <br />
            <br />
            Slatpay understands that circumstances can change and, in certain
            cases, a refund may be necessary. Our refund policy is designed to
            be fair to both you and the infoproducers. However, the right to
            request a refund may be limited or excluded in certain
            circumstances.
            <br />
            <br />
            <span>Payment Disputes</span>
            <br />
            <br />
            If you have any issues with a transaction, Slatpay offers a dispute
            process to help you resolve the issue. However, by using our
            platform, you agree to first contact us to try to resolve the
            dispute before resorting to your payment provider or bank.
            <br />
            <br />
            Contact Us
            <br />
            <br />
            If you have any questions, suggestions, or need more information
            about our Payments and Fees terms, don't hesitate to contact us via
            email at suporte@slatpay.com. We are always ready to assist you.
          </p>
          <div className="avatarColumns">
            <TermsAvatar
              rounded
              src={Profile.src}
              alt="Profile"
              size="medium"
            />
            <div>
              <h3>Gabriel Fonseca</h3>
              <p>Chief Technology Officer</p>
            </div>
          </div>
        </TermsContent>
      </TermsContainer>
      <Footer />
    </>
  )
}
