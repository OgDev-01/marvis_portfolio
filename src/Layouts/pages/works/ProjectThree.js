import Page from "../../../Components/Page"
import Links from "../../Header/Links"
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
  useLocoScroll(navBar)
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
          <h1>Invest in stocks and Crypto easily</h1>
        </div>

        <div className='large-figure-img'>
          <img src='work-3/1.png' alt='figure image' />
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
            Redesigning a mobile app with a multi-million user base is always a
            big responsibility. Users sometimes react negatively to changes in
            interactions that have become familiar, which can bring down
            ratings. Our team worked with Sleepiest to audition dozens of design
            concepts until we found the perfect solution for improving the
            design while keeping users comfortable with familiar interactions.
          </p>
        </div>

        <div className='second-img'>
          <img src='work-3/2.png' alt='' />
        </div>

        <div className='abt-project challenge'>
          <h2>The challenge</h2>
          <p>
            Redesigning a mobile app with a multi-million user base is always a
            big responsibility. Users sometimes react negatively to changes in
            interactions that have become familiar, which can bring down
            ratings. Our team worked with Sleepiest to audition dozens of design
            concepts until we found the perfect solution for improving the
            design while keeping users comfortable with familiar interactions.
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
        </div>
        <div className='abt-project probs'>
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
        </div>

        <div className='journey-head'>
          <h2>Process adopted in this journey</h2>
        </div>

        <div className='map'>
          <img src='work-3/9.png' alt='' />
        </div>

        <div className='delivery-wrap'>
          <div className='d-title'>
            <h3>Define</h3>
            <p>
              HAVING MADE THE APPRORIATE ADJUSMENTS FROM USER TESTING, IT WAS
              TIME TO BRING THE SOLUTION TO LIFE WITH A BRAND IDENTITY AND HIGH
              FIDELITY VISUALISATION.
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
          <h1>CHangingi the narrative of modenr design for the mid age </h1>
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
              20% of the functionality and features in any environment will be
              responsible for 80% of the actions taken within that environment
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
            We hereby announce that in according to the completion of designing,
            developing, and testing our website, www.nana-asia.com, we are
            delighted and fully satisfied in terms of workmanship of your
            designs, providing assistance in troubleshooting issues, and
            developing a responsive in the timeless possible manner...
          </p>
        </div>

        <div className='next-btn'>
          <div className='next-link'>
            <Link to='/bella-food' cssClass='next-link' className='next-link'>
              <img className='next-arrow prev' src='arrow.svg' alt='' />
            </Link>
            Prev project
          </div>
        </div>
      </motion.div>
    </Page>
  )
}
