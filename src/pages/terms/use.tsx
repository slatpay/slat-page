/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
  TermsAvatar,
  TermsContainer,
  TermsContent,
} from '@/styles/terms.styles'
import Profile from '@/assets/fonseca.jpeg'

export default function TermsOfUse() {
  return (
    <>
      <Header scrolled />
      <TermsContainer>
        <TermsContent>
          <div />

          <h1>
            Understanding Our <span>Terms of Use</span>
          </h1>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.5rem',
              textAlign: 'center',
              color: '#444',
            }}
          >
            <span>Slatpay</span> believes in transparency and wants to ensure
            that each user fully understands the terms and conditions that
            govern our relationship. Here are the main things you need to know:
          </p>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.5rem',
            }}
          >
            <span>Acceptance of Terms:</span> By accessing and using the Slatpay
            platform, you agree to our Terms of Use, Related Documents, and
            Privacy Policy. This is the legal basis for our relationship with
            you and it is important that you fully understand what this means.
            We encourage each user to read these documents carefully before
            starting to use our services.
            <br />
            <br />
            <span>User Responsibilities:</span> As a Slatpay user, you have
            significant responsibilities. These include complying with all
            applicable laws and regulations, ensuring that all the information
            you provide to us is true and accurate, and promising that you will
            not use the platform for illegal or harmful activities. It is
            crucial that you understand and follow these responsibilities to
            maintain a safe and fair experience for everyone on the platform.
            <br />
            <br />
            <span>Rights of Slatpay:</span> As the platform providing the
            service, Slatpay has certain rights. This includes the right to
            change the Terms of Use, suspend or terminate accounts if we believe
            you are violating the Terms of Use, and conduct maintenance or
            changes on the platform as needed to ensure its efficient operation.
            <br />
            <br />
            Important: If you continue to use the platform after any changes to
            the Terms of Use, this means that you accept and agree with these
            changes.
            <br />
            <br />
            <span>Respect for Privacy</span>
            <br />
            <br />
            At Slatpay, the privacy of our users is a priority. We are committed
            to protecting the information you share with us and use it
            responsibly and in accordance with applicable data protection laws.
            For more details on how we collect, store, and use your information,
            please refer to our Privacy Policy.
            <br />
            <br />
            <span>Responsibilities After Termination</span>
            <br />
            <br />
            It is important to note that some obligations and responsibilities,
            as described in our Terms of Use, will continue even after
            termination, ending, or expiration of the contract. This is to
            ensure that all parties are aware of their ongoing commitments and
            that there is an appropriate closure of any activity on the
            platform.
            <br />
            <br />
            <span>Contact Us</span>
            <br />
            <br />
            If you have questions, suggestions, or need clarification about our
            Terms of Use, we are here to help. You can contact us by sending an
            email to support@slatpay.com. We strive to respond to all inquiries
            in a timely and comprehensive manner.
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
