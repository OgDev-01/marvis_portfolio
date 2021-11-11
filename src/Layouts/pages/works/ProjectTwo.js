import Page from "../../../Components/Page"
// import Links from "../../Header/Links"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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
export default function ProjectTwo() {
  return (
    <Page title='Bellas food'>
      <motion.div
        variants={homeVariant}
        animate='visible'
        initial='hidden'
        exit='exit'
        className='project-wrap'>
        <div className='title'>
          <p>Paradgim gorup</p>
          <h1>Order food from the comfort of your home</h1>
        </div>

        <div className='large-figure-img'>
          <img src='work-2/1.jpg' alt='figure' />
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
            Bella foods is a fast and convenient hamburger delivery application.
            We help customers conveniently order their favorite burgers with
            specific details.
          </p>
        </div>

        <div className='second-img'>
          <img src='work-2/2.jpg' alt='' />
        </div>

        <div className='abt-project challenge'>
          <h2>The challenge</h2>
          <p>
            To design a solution for users that simulates the same process of
            ordering in the app name physical restaurant.
          </p>
        </div>

        <div className='illustrate'>
          <div className='i-card-one'>
            <div className='f'>
              <img src='work-2/3.jpg' alt='' />
            </div>
            <div className='s'>
              <img src='work-2/5.jpg' alt='' />
            </div>
            <div className='t'>
              <img src='work-2/7.jpg' alt='' />
            </div>
          </div>
          <div className='i-card-two'>
            <div className='t'>
              <img src='work-2/4.jpg' alt='' />
            </div>
            <div className='t'>
              <img src='work-2/6.jpg' alt='' />
            </div>
          </div>
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

        <div className='abt-project probs'>
          <h2>Solution approached</h2>
          <ol>
            <li>
              To maintain familiarity with the physical store, we studied the
              current ordering system and created a friendly user flow.
            </li>
            <li>
              After understanding the sequence of operations of the ordering
              system, it was simplified and kept familiar.
            </li>
            {/* <li>
              ISING ARTISTS NEED HELP WITH SELLING MERCHANDISE AND ORGANISING
              TOURS BUT ARE SCARED OF GETTING LOCKED INTO BAD CONTRACTS WITH
              LABELS THAT HAVE LOW STREAMING ROYALTIES THEY WILL OUTGROW.
            </li> */}
          </ol>
        </div>

        <div className='journey-head'>
          <h2>Process adopted in this journey</h2>
        </div>

        <div className='map'>
          <img src='work-2/9.jpg' alt='' />
        </div>

        <div className='delivery-wrap'>
          <div className='d-title'>
            <h3>Define</h3>
            <p>
              To provide a good solution, interviews with regular customers were
              carried out, to understand their needs, frustrations, and
              motivations, to inform the solution ideation in the development
              phases.
            </p>
          </div>
          <div className='d-flex'>
            <div className='flex-one'>
              <div className='d-img-one'>
                <img src='work-2/10.jpg' alt='' />
              </div>
              <div className='d-img-two'>
                <img src='work-2/12.jpg' alt='' />
              </div>
            </div>
            <div className='flex-two'>
              <div className='d-img-one'>
                <img src='work-2/11.jpg' alt='' />
              </div>
              <div className='d-img-two'>
                <img src='work-2/13.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='change-wrap'>
          <h1>Changing the story of medieval design </h1>
        </div>

        <div className='large2-figure-img'>
          <img src='work-2/16.jpeg' alt='' />
        </div>

        <div className='last-card-grid'>
          <div className='last-flex-one'>
            <div className='l-one'>
              <img src='work-2/17.jpg' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-2/19.jpg' alt='' />
            </div>
            <div className='l-three'>
              <img src='work-2/21.jpg' alt='' />
            </div>
          </div>
          <div className='last-flex-two'>
            <div className='l-one'>
              <img src='work-2/18.jpg' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-2/20.jpg' alt='' />
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
              <img src='work-2/17.jpg' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-2/19.jpg' alt='' />
            </div>
            <div className='l-three'>
              <img src='work-2/21.jpg' alt='' />
            </div>
          </div>
          <div className='last-flex-two'>
            <div className='l-one'>
              <img src='work-2/18.jpg' alt='' />
            </div>
            <div className='l-two'>
              <img src='work-2/20.jpg' alt='' />
            </div>
          </div>
        </div>

        <div className='abt-project feedback'>
          <h2>Client Feedback</h2>
          <p>
            As we tested the new app, we niticed how familiar it felt. We were
            very happyan excited to introduceit to our customers and they loved
            it....
          </p>
        </div>

        <div className='next-btn'>
          <div className='next-link'>
            <Link
              to='/jorge-investment'
              cssclass='next-link'
              className='next-link'>
              <img className='next-arrow prev' src='arrow.svg' alt='' />
            </Link>
            Next Project
            <Link to='/redxam' cssclass='next-link' className='next-link'>
              <img className='next-arrow' src='arrow.svg' alt='' />
            </Link>
          </div>
        </div>
      </motion.div>
    </Page>
  )
}
