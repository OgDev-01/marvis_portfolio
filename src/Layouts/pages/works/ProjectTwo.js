import Page from "../../../Components/Page"
// import Links from "../../Header/Links"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query"
import useFetch from "../../../hooks/useFetch"
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
  // media query match
  const matches = useMediaQuery(
    "only screen and (min-device-width: 360px) and (max-device-width: 640px)"
  )

  // Api call
  const api_url = "https://strapibackend1.herokuapp.com/bella-food"
  const { loading, error, data } = useFetch(api_url)
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
            <h1>Order food from the comfort of your home</h1>
          </div>

          <div className='large-figure-img'>
            {matches ? (
              <img src={data.m1.url} alt='figure' />
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
              Bella food is a fast and convenient hamburger dellivery
              application. We help customers conveniently order their favourite
              burgers with specific details.
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
              To design a solution for users that simulates the same process of
              ordering in the (app name) physical restaurant.
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
                <img src={data.seven[0].url} alt='' />
              </div>
            </div>
          </div>

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
            </ol>
          </div>

          <div className='journey-head'>
            <h2>Process adopted in this journey</h2>
          </div>

          <div className='map'>
            <img src={data.eight.url} alt='' />
          </div>

          <div className='delivery-wrap'>
            <div className='d-title'>
              <h3>Define</h3>
              <p>
                To provide a good solution, interviews with regular customers
                were carried out, to understand their needs, frustrations, and
                motivations, to inform the solution ideation in the development
                phases.
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
            <h1>Changing the story of medieval design </h1>
          </div>

          <div className='large2-figure-img'>
            <img src={data.thirteen.url} alt='' />
          </div>

          <div className='last-card-grid'>
            <div className='last-flex-one'>
              <div className='l-one'>
                <img src={data.fourteen.url} alt='' />
              </div>
              <div className='l-two'>
                <img src={data.fiftheen.url} alt='' />
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
                <img src={data.twentyOne.url} alt='' />
              </div>
            </div>
          </div>

          <div className='abt-project feedback'>
            <h2>Client Feedback</h2>
            <p>
              As we tested the new app, we niticed how familiar it felt. We were
              very happyan excited to introduceit to our customers and they
              loved it....
            </p>
          </div>

          <div className='next-btn'>
            <div className='next-link'>
              Next Project
              <Link
                to='/project/redxam'
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
