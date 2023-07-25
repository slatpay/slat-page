import Image from 'next/image'
import { FooterContainer, FooterContent, FooterLinks } from './styles'
import SlatLogo from '@/assets/Logo.png'
import Link from 'next/link'
import { InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <Image
            className="logo"
            src={SlatLogo}
            alt="Slatpay Logo"
            width={156}
            height={70}
          />

          <p className="copyrights">© 2023 SlatPay Tecnologia, LTDA.</p>
        </div>
        <FooterLinks>
          <div>
            <h2>Features</h2>
            <ul>
              <li>Real-time Analytics</li>
              <li>Global Payments</li>
              <li>Send Money</li>
              <li>Multi-Currency</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h2>Terms</h2>
            <ul>
              <li>
                <Link href="/terms/about">About Us</Link>
              </li>
              <li>
                <Link href="/terms/use">Terms of Use</Link>
              </li>
              <li>
                <Link href="/terms/responsibilities">
                  User Responsibilities
                </Link>
              </li>
              <li>
                <Link href="/terms/intellectual">
                  Property Rights and User Content
                </Link>
              </li>
              <li>
                <Link href="/terms/payment">Payment and Fees</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Real-time Analytics</li>
              <li>Global Payments</li>
            </ul>

            <div className="social">
              <Link href="#">
                <InstagramLogo weight="fill" size={24} />
              </Link>
              <Link href="https://twitter.com/slatpay#">
                <TwitterLogo weight="fill" size={24} />
              </Link>
              <Link href="https://linkedin.com/company/slatpay">
                <LinkedinLogo weight="fill" size={24} />
              </Link>
            </div>
          </div>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  )
}
