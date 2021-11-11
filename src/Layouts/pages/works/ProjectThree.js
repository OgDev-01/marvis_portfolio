import Page from "../../../Components/Page"
// import Links from "../../Header/Links"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import useLocoScroll from "../../../context/useLocoScroll"

// Variants
const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
}
export default function ProjectThree({ navBar }) {
  return (
    <Page title='Redxam'>
      <motion.div
        variants={homeVariant}
        animate='visible'
        initial='hidden'
        exit='exit'
        data-scroll-container
        className='project-wrap'>
        <div className='title'>
          <p>Paradgim gorup</p>
          <h1>All your crypto problems solved with ease</h1>
        </div>

        <div className='large-figure-img'>
          <img src='work-3/1.png' alt='figure' />
        </div>

        <div className='role-wrap'>
          <div className='roles'>
            <div className='r r-one'>
              <figure>Role</figure>
              <div className='role'>Product design research Prototyping</div>
            </div>
            <div className='r r-two'>
              <figure>Role</figure>
              <div className='role'>2 weeks</div>
            </div>
            <div className='r r-three'>
              <figure>Role</figure>
              <div className='role'>
                Figma <br /> miro Principle4mac Photoshop
              </div>
            </div>
          </div>
        </div>

        <div className='abt-project'>
          <h2>About this project</h2>
          <p>
            Redxam helps millions of people invest in cryptocurrencies more
            easily and conveniently. Redxam provides guidelines for people that
            want to invest in cryptocurrency, they take a deep dive into your
            personal finance.
          </p>
        </div>

        <div className='second-img'>
          <img src='work-3/2.png' alt='' />
        </div>

        <div className='abt-project challenge'>
          <h2>The challenge</h2>
          <p>
            The crypto industry is very large. Many people are involved in this
            industry. The young, middle-aged, and the elderly. These three
            groups of different ages have different ways of thinking and
            perspectives. Therefore, we needed to create a system that fits
            anywhere between these three different personalities.
          </p>
        </div>

        <div className='illustrate'>
          <div className='i-card-one'>
            <div className='f'>
              <img src='work-3/3.png' alt='' />
            </div>
            <div className='s'>
              <img src='work-3/5.png' alt='' />
            </div>
            <div className='t'>
              <img src='work-3/1441.png' alt='' />
            </div>
          </div>
          <div className='i-card-two'>
            <div className='t'>
              <img src='work-3/4.png' alt='' />
            </div>
            <div className='t'>
              <img src='work-3/6.png' alt='' />
            </div>
          </div>
        </div>

        <div className='abt-project probs'>
          <h2>Solution approached</h2>
          <ol>
            <li>
              The main goal of becoming a central group of these three
              personality groups was to keep the design as simple as possible
              and remove the complexity so that the three personalities could
              use the system with ease.
            </li>
            <li>
              NDEPENDENT ARTISTS HAVE THEIR CREATIVITY STIFLED BY FEAR OF BIG
              LABELS THREATENING LEGAL ACTION FOR SAMPLING THEIR SONGS WHEN THE
              LABELS SAMPLE SMALLER ARTISTS ALL THE TIME.
            </li>
            <li>
              ISING ARTISTS NEED HELP WITH SELLING MERCHANDISE AND ORGANISING
              TOURS BUT ARE SCARED OF GETTING LOCKED INTO BAD CONTRACTS WITH
              LABELS THAT HAVE LOW STREAMING ROYALTIES THEY WILL OUTGROW.
            </li>
          </ol>
        </div>
        {/* <div className='abt-project probs'>
          <h2>Problem statements</h2>
          <ol>
            <li>
              NEW ARTISTS FIND IT HARD TO GROW AS THEY STRUGGLE TO GAIN EXPOSURE
              AS THEIR MUSIC WHEN THEIR MUSIC IS SAMPLED WITH NO CREDIT OR
              FINANCIAL KICKBACK ON PLATFORMS SUCH AS SOUNDCLOUD AND YOUTUBE.
            </li>
            <li>
              NDEPENDENT ARTISTS HAVE THEIR CREATIVITY STIFLED BY FEAR OF BIG
              LABELS THREATENING LEGAL ACTION FOR SAMPLING THEIR SONGS WHEN THE
              LABELS SAMPLE SMALLER ARTISTS ALL THE TIME.
            </li>
            <li>
              ISING ARTISTS NEED HELP WITH SELLING MERCHANDISE AND ORGANISING
              TOURS BUT ARE SCARED OF GETTING LOCKED INTO BAD CONTRACTS WITH
              LABELS THAT HAVE LOW STREAMING ROYALTIES THEY WILL OUTGROW.
            </li>
          </ol>
        </div> */}

        <div className='journey-head'>
          <h2>Lean research carried out for this project</h2>
        </div>

        <div className='map'>
          <img src='work-3/9.png' alt='' />
        </div>

        <div className='delivery-wrap'>
          <div className='d-title'>
            <h3>Define</h3>
            <p>
              Considering the scope of the project, user research was carried
              out and interviews and surveys were conducted on three groups of
              personalities interested in cryptocurrency.
            </p>
          </div>
          <div className='d-flex'>
            <div className='flex-one'>
              <div className='d-img-one'>
                <img src='work-3/10.png' alt='' />
              </div>
              <div className='d-img-two'>
                <img src='work-3/12.png' alt='' />
              </div>
            </div>
            <div className='flex-two'>
              <div className='d-img-one'>
                <img src='work-3/11.png' alt='' />
              </div>
              <div className='d-img-two'>
                <img src='work-3/13.png' alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='change-wrap'>
          <h1>Turning simplicity into sophistication</h1>
        </div>

        <div className='large2-figure-img'>
          <img src='work-3/16.png' alt='' />
        </div>

        <div className='last-card-grid'>
          <div className='last-flex-one'>
            <div className='l-one'>
              <img src='work-3/17.png' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-3/19.png' alt='' />
            </div>
            <div className='l-three'>
              <img src='work-3/21.png' alt='' />
            </div>
          </div>
          <div className='last-flex-two'>
            <div className='l-one'>
              <img src='work-3/18.png' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-3/20.png' alt='' />
            </div>
          </div>
        </div>
        <div className='outcome-wrap'>
          <div className='outcome-title'>
            <h3>
              "Design is intelligence made visible." -- Alina Wheeler, author
            </h3>
          </div>
        </div>
        <div className='last-card-grid'>
          <div className='last-flex-one'>
            <div className='l-one'>
              <img src='work-3/17.png' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-3/19.png' alt='' />
            </div>
            <div className='l-three'>
              <img src='work-3/21.png' alt='' />
            </div>
          </div>
          <div className='last-flex-two'>
            <div className='l-one'>
              <img src='work-3/18.png' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-3/20.png' alt='' />
            </div>
          </div>
        </div>

        <div className='abt-project feedback'>
          <h2>Client Feedback</h2>
          <p>
            I appreciate the sophistication and simplicity in this design,
            especially for a cryptocurrency platform...I’m amazed.
          </p>
        </div>

        <div className='next-btn'>
          <div className='next-link'>
            <Link to='/bella-food' cssclass='next-link' className='next-link'>
              <img className='next-arrow prev' src='arrow.svg' alt='' />
            </Link>
            Prev project
          </div>
        </div>
      </motion.div>
    </Page>
  )
}
