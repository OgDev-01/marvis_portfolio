import Page from "../../../Components/Page"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import { useMediaQuery } from "@react-hook/media-query"
import Loader from "../../../Components/Loader"

// Variants
const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
}
export default function ProjectTwo() {
  const matches = useMediaQuery(
    "only screen and (min-device-width: 360px) and (max-device-width: 640px)"
  )
  const api_url = "https://strapibackend1.herokuapp.com/jorge-investment"
  const { loading, error, data } = useFetch(api_url)
  if (loading) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
  console.log(data)

  return (
    <Page title='Jorge Investment'>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          variants={homeVariant}
          animate='visible'
          initial='hidden'
          exit='exit'
          className='project-wrap'>
          <div className='title'>
            <p>Paradgim gorup</p>
            <h1>Invest in stocks and crypto easily</h1>
          </div>

          <div className='large-figure-img'>
            {matches ? (
              <img src={data.mobile1.url} alt='figure' />
            ) : (
              <img src={data.one.url} alt='figure' />
            )}
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
              Paradigm Group provides a platform that makes it easy for
              investors to invest in ROI-guaranteed stocks and cryptocurrencies
              regardless of market trends. Investors can easily derive their
              profits as they wish. Paradigm aims to make investors in control
              of their money.
            </p>
          </div>

          <div className='second-img'>
            {matches ? (
              <img src={data.m2.url} alt='figure' />
            ) : (
              <img src={data.two.url} alt='figure' />
            )}
          </div>

          <div className='abt-project challenge'>
            <h2>The challenge</h2>
            <p>
              Building a system that includes money poses many trust issues.
              This is due to the large number of rogue systems surrounding it.
              After a series of design iterations, a perfect solution was found
              to develop a way for users to trust the transparency and
              efficiency of paradigm.
            </p>
          </div>

          <div className='illustrate'>
            <div className='i-card-one'>
              <div className='f'>
                <img src={data.three.url} alt='' />
              </div>
              <div className='s'>
                <img src={data.four.url} alt='' />
              </div>
              <div className='t'>
                <img src={data.five.url} alt='' />
              </div>
            </div>
            <div className='i-card-two'>
              <div className='t'>
                <img src={data.six.url} alt='' />
              </div>
              <div className='t'>
                <img src={data.seven.url} alt='' />
              </div>
            </div>
          </div>
          <div className='abt-project probs'>
            <h2>Problem Statement</h2>
            <ol>
              <li>
                Investors are wary of investment platform services as fraudulent
                schemes increase in the investment industry
              </li>
              <li>
                Investors are afraid to lose ll their money due to market
                inconsistency
              </li>
              <li>
                New users interested in investing are not familiar with
                investment pltforms due to their natural complexity
              </li>
            </ol>
          </div>

          <div className='abt-project probs'>
            <h2>Solution approached</h2>
            <ol>
              <li>
                It is almost impossible to predict the fall or rise of the
                market, Due to the discrepancy, it will bring great losses and
                profits to both sides, to avoid the loss due to such fall, the
                system was built to make every investment in the market to be on
                hold when it falls.
              </li>
              <li>
                To win the trust of investors, in addition to allowing investors
                to withdraw profits and investments when they deem appropriate,
                we have built a system to ensure that the return on investments
                is almost certain. This guarantees the fleibility and
                reliability of the system.
              </li>
              <li>
                To help users new to investing, the user interface of the system
                were made straight-forward for users, even if they are new to
                investing.
              </li>
            </ol>
          </div>

          <div className='journey-head'>
            <h2>Process adopted in this journey</h2>
            <p>
              During the decision phase, the required data glasses from user
              interviews and user surveys were processed in different ways to
              develop a deeper perspective on user needs and pain points
            </p>
          </div>

          <div className='map'>
            <img src={data.eight.url} alt='' />
          </div>

          <div className='delivery-wrap'>
            <div className='d-title'>
              <h3>Develop</h3>
              <p>
                Various solutions to further clarify the information
                architecture nad wiring frmeworks, usinf an iterative design
                approach to develop the best optimal solution and features were
                tried. User testing to validate the proposed design solutions
                were used to continue the design.
              </p>
            </div>
            <div className='d-flex'>
              <div className='flex-one'>
                <div className='d-img-one'>
                  <img src={data.nine.url} alt='' />
                </div>
                <div className='d-img-two'>
                  <img src={data.eleven.url} alt='' />
                </div>
              </div>
              <div className='flex-two'>
                <div className='d-img-one'>
                  <img src={data.ten.url} alt='' />
                </div>
                <div className='d-img-two'>
                  <img src={data.twelve.url} alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='change-wrap'>
            <h1>Changing the narrative of modern design for the mid age </h1>
          </div>

          <div className='large2-figure-img'>
            {/* <img src={data.thirteen.url} alt='' /> */}
            {matches ? (
              <img src={data.m9.url} alt='figure' />
            ) : (
              <img src={data.thirteen.url} alt='figure' />
            )}
          </div>

          <div className='last-card-grid'>
            <div className='last-flex-one'>
              <div className='l-one'>
                <img src={data.fourteen.url} alt='' />
              </div>
              <div className='l-two'>
                <img src={data.fifteen.url} alt='' />
              </div>
              <div className='l-three'>
                <img src={data.sixteen.url} alt='' />
              </div>
            </div>
            <div className='last-flex-two'>
              <div className='l-one'>
                <img src={data.seventeen.url} alt='' />
              </div>
              <div className='l-two'>
                <img src={data.eighteen.url} alt='' />
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
                <img src={data.nineteen.url} alt='' />
              </div>
              <div className='l-two'>
                <img src={data.twenty.url} alt='' />
              </div>
              <div className='l-three'>
                <img src={data.twentyThree.url} alt='' />
              </div>
            </div>
            <div className='last-flex-two'>
              <div className='l-one'>
                <img src={data.twentyTwo.url} alt='' />
              </div>
              <div className='l-two'>
                <img src={data.twentyOne[0].url} alt='' />
              </div>
            </div>
          </div>

          <div className='abt-project feedback'>
            <h2>Client Feedback</h2>
            <p>
              After completing the design, development, and testing of the
              application, we are very satisfied with the construction of the
              project. This design has contributed to the growth of our
              business.
            </p>
          </div>

          <div className='next-btn'>
            <div className='next-link'>
              Next Project
              <Link
                to='/project/bella-food'
                cssclass='next-link'
                className='next-link'>
                <img className='next-arrow' src='arrow.svg' alt='' />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </Page>
  )
}
