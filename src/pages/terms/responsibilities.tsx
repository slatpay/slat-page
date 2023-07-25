/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
  TermsAvatar,
  TermsContainer,
  TermsContent,
} from '@/styles/terms.styles'
import Profile from '@/assets/fonseca.jpeg'

export default function UserResponsibilities() {
  return (
    <>
      <Header scrolled />
      <TermsContainer>
        <TermsContent>
          <div />
          <h1>
            <span>User Responsibilities and Data Protection</span>
          </h1>
          <p
            style={{ fontSize: '1rem', fontWeight: 400, lineHeight: '1.5rem' }}
          >
            <span>User Responsibilities</span>
            <br />
            <br />
            By using the Slatpay platform, you assume a number of
            responsibilities. First, you confirm that all information you
            provide to Slatpay is accurate, true, and up-to-date. Furthermore,
            you commit to not using the platform to conduct illegal or harmful
            activities. Unauthorized, fraudulent, illegal, or malicious use of
            the platform will be considered a violation of our Terms of Use.
            <br />
            <br />
            It's important to note that as a user, you are responsible for
            maintaining the confidentiality and security of your login
            credentials. If you suspect that your Slatpay account has been
            compromised, please contact us immediately at suporte@slatpay.com.
            <br />
            <br />
            <span>Data Protection</span>
            <br />
            <br />
            At Slatpay, we take data protection very seriously. We collect and
            use your personal data only for the purposes of providing,
            improving, and personalizing our services. We maintain strict
            security measures to protect your data from unauthorized access and
            accidental loss, alteration, or disclosure. To learn more about how
            we collect, use, and protect your personal information, please refer
            to our Privacy Policy.
            <br />
            <br />
            <span>International Data Transfer</span>
            <br />
            <br />
            By using Slatpay, you acknowledge and agree that your personal data
            may be transferred to, stored, and processed in countries outside
            your country of residence, which may have different data protection
            laws than your country. By providing your personal data, you agree
            to this transfer, storage, or processing.
            <br />
            <br />
            <span>Consent to Receive Communications</span>
            <br />
            <br />
            By accepting our Terms of Use, you also agree to receive electronic
            communications from Slatpay. These communications may include
            notices about your account, updates to our Terms of Use, information
            about new services, and other important information. If you do not
            wish to receive these communications, you may opt-out at any time.
            <br />
            <br />
            Contact Us
            <br />
            If you have any questions about your responsibilities as a user or
            our data protection policy, please contact us at
            suporte@slatpay.com.
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
