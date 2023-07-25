/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
  TermsAvatar,
  TermsContainer,
  TermsContent,
} from '@/styles/terms.styles'
import Profile from '@/assets/fonseca.jpeg'

export default function AboutUs() {
  return (
    <>
      <Header scrolled />
      <TermsContainer>
        <TermsContent>
          <div />

          <h1>
            Intellectual Property Rights and User Content at{' '}
            <span>Slatpay!</span>
          </h1>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.5rem',
            }}
          >
            <span>Respect for Intellectual Property Rights</span>
            <br />
            At Slatpay, we recognize and respect all intellectual property
            rights. All rights, titles and interests in and for the Slatpay
            platform, including all text, graphics, images, music, software,
            audio, video, authorship of any kind, and information and other
            materials are exclusive property of Slatpay or our licensors. These
            terms do not grant you any right, title or interest in any
            Intellectual Property of Slatpay. Any use of Slatpay's Intellectual
            Property, other than as expressly authorized by us, is strictly
            prohibited.
          </p>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.5rem',
            }}
          >
            <span>User Content Usage</span>
            <br />
            Slatpay allows users to post, send and share content on our
            platform. Understand that by doing so, you grant Slatpay a global,
            irrevocable, perpetual, non-exclusive, transferable, royalty-free
            license, with the right to sublicense, use, view, copy, adapt,
            modify, distribute, license, sell, transfer, publicly display,
            publicly perform, transmit, stream, access, view and otherwise
            exploit such User Content.
          </p>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.5rem',
            }}
          >
            It's worth mentioning that Slatpay is not responsible for the
            content posted by users and does not endorse any opinion contained
            in the User Content. You are solely responsible for all and any
            activities conducted through your account, and for the legality,
            reliability, relevance and quality of the User Content you post on
            Slatpay.
          </p>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.5rem',
            }}
          >
            <span>Image Rights</span>
            <br />
            By accepting our Terms of Use, you grant Slatpay the right.
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
