import Image from 'next/image'
import { FooterContainer, FooterContent, FooterLinks } from './styles'
import SlatLogo from '@/assets/Logo.png'
import Link from 'next/link'
import {
  DiscordLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'

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

          <p className="copyrights">
            © 2023 SlatPay Tecnologia, LTDA. <br />
            CNPJ: 51.713.319/0001-03 <br />
            AV ALÍCIO ARANTES CAMPOLINA,PIONEIRO 2882 - PR <br />
          </p>
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
                <Link aria-label="about us" href="/terms/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link aria-label="terms of use" href="/terms/use">
                  Merchant Terms of Service
                </Link>
              </li>

              <li>
                <Link aria-label="Payment and Fees" href="/terms/payment">
                  Checkout Buyer Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  aria-label="terms of use"
                  href="/terms/restricted-businesses"
                >
                  Prohibited Businesses
                </Link>
              </li>
              <li>
                <Link aria-label="terms of use" href="/terms/refund">
                  Refund
                </Link>
              </li>
              <li>
                <Link aria-label="Privacy" href="/terms/privacy">
                  Privacy Policy
                </Link>
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
              <Link
                aria-label="Slatpay instagram"
                href="https://www.instagram.com/slatpayoficial"
              >
                <InstagramLogo weight="fill" size={24} />
              </Link>
              <Link
                aria-label="Slatpay discord"
                href="https://discord.gg/ktFAZ3dn7K"
              >
                <DiscordLogo weight="fill" size={24} />
              </Link>
              <Link
                aria-label="Slatpay twitter"
                href="https://twitter.com/slatpay"
              >
                <TwitterLogo weight="fill" size={24} />
              </Link>
              <Link
                aria-label="Slatpay linkedin"
                href="https://linkedin.com/company/slatpay"
              >
                <LinkedinLogo weight="fill" size={24} />
              </Link>
            </div>
          </div>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  )
}
