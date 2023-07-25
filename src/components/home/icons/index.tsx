/* eslint-disable react/no-unescaped-entities */

import { IconsContainer, IconsContent, IconsGrid } from './styles'
import { useInView } from 'react-intersection-observer'

import Cart from '@/assets/icons/1.gif'
import Shield from '@/assets/icons/2.gif'
import Analytics from '@/assets/icons/3.gif'
import GlobeHemisphereEast from '@/assets/icons/4.gif'
import Kanban from '@/assets/icons/5.gif'
import CheckSquare from '@/assets/icons/6.gif'
import Image from 'next/image'

export function Icons() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers.
  })

  return (
    <IconsContainer
      css={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 1s, transform 1s',
      }}
      ref={ref}
    >
      <IconsContent>
        <h2>
          More Than a Platform - <span> It's Your Marketplace</span>
        </h2>
        <p>
          Unlock the potential of your info products with SlatPay. Effortless
          selling, wider reach, and unprecedented growth are just a step away.
        </p>

        <IconsGrid>
          <div>
            <Image src={Cart} alt="Cart" quality={100} width={54} height={54} />
            <h3>Optimized Checkout</h3>
            <p>
              Increase conversions with our streamlined and user-friendly
              checkout process.
            </p>
          </div>
          <div>
            <Image
              src={Shield}
              alt="Shield"
              quality={100}
              width={54}
              height={54}
            />
            <h3>Secure Transactions</h3>
            <p>
              Rest assured with our secure and reliable transaction processing.
            </p>
          </div>
          <div>
            <Image
              src={Analytics}
              alt="Analytics"
              quality={100}
              width={54}
              height={54}
            />
            <h3>Powerful Analytics</h3>
            <p>
              Gain valuable insights into your sales and growth patterns with
              our robust analytics.
            </p>
          </div>
          <div>
            <Image
              src={GlobeHemisphereEast}
              alt="GlobeHemisphereEast"
              quality={100}
              width={54}
              height={54}
            />
            <h3>Increased Reach</h3>
            <p>Expand your customer base with SlatPay's global marketplace</p>
          </div>
          <div>
            <Image
              src={Kanban}
              alt="Kanban"
              quality={100}
              width={54}
              height={54}
            />
            <h3>Streamlined Tasklists</h3>
            <p>
              Experience unparalleled organization and efficiency with our
              comprehensive tasklists.
            </p>
          </div>
          <div>
            <Image
              src={CheckSquare}
              alt="CheckSquare"
              quality={100}
              width={54}
              height={54}
            />
            <h3>Effortless Selling</h3>
            <p>
              Enjoy a user-friendly interface designed to make selling your info
              products effective.
            </p>
          </div>
        </IconsGrid>
      </IconsContent>
    </IconsContainer>
  )
}
