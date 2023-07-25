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
            Welcome to <span>Slatpay!</span>
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
            These terms and conditions outline the rules and regulations for the
            <br />
            use of Slatpay's Website, located at{' '}
            <span> https://slatpay.com.</span>
          </p>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.5rem',
            }}
          >
            <span>
              Slatpay is more than just a platform, it's a community of
              passionate creators, committed affiliates and avid learners.
            </span>{' '}
            We are a technology-driven company, striving to make the world of
            digital products more accessible, efficient, and rewarding for
            everyone involved.
            <br />
            <br />
            As an innovative platform, we are focused on bridging the gap
            between infoproducers, affiliates and buyers.{' '}
            <span>
              Our mission is to ease the process of digital product
              commercialization
            </span>
            , ensuring it's carried out securely, seamlessly and providing an
            exceptional user experience.
            <br />
            <br />
            At Slatpay, we value the trust you place in us and our commitment to
            our users is unwavering.{' '}
            <span>
              We constantly strive to adapt and innovate in response to the
              needs of our ever-growing community,
            </span>{' '}
            paving the way for a future where digital commerce is open to all.
            <br />
            <br />
            <span>How does Slatpay work?</span>
            <br />
            <br />
            Slatpay operates by simplifying the transaction process between
            infoproducers, affiliates and buyers. Whether you're an experienced
            infoproducer, an ambitious affiliate, or a curious buyer,{' '}
            <span>we've got you covered</span>.
            <br />
            Infoproducers: If you're a digital content creator, Slatpay is your
            springboard to reach a larger audience. We handle all the
            nitty-gritty of payment processing and technical support, freeing
            you to <span>focus on what you do best - creating</span>.
            <br />
            Affiliates: If you have the skills to promote products and drive
            sales, Slatpay is your stage. We provide an environment where you
            can associate with products, earn commissions on your sales and{' '}
            <span>grow your business</span>.
            <br />
            Buyers: If you're on the hunt for top-notch digital products,
            Slatpay is your destination. We provide a{' '}
            <span>
              vast catalogue of products for you to peruse and purchase in a
              secure and efficient manner
            </span>
            .
            <br />
            <br />
            Beyond these roles, we value the sense of community at Slatpay. We
            encourage collaboration, learning, and growth among our users.{' '}
            <span>
              At Slatpay, we aren't just building a platform, we're cultivating
              an ecosystem where everyone can succeed.
            </span>{' '}
            So, join us at Slatpay and discover a better way to buy, sell and
            learn about digital products!
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
