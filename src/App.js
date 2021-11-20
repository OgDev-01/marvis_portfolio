import { React, useState } from "react"
import Footer from "./Layouts/Footer/Footer"
import NavBar from "./Layouts/Header/Navbar"
import { Switch, Route, useLocation } from "react-router-dom"
import NavLinks from "./Layouts/Header/NavLinks"
import Home from "./Layouts/pages/home/Home"
import About from "./Layouts/pages/about/About"
import Projects from "./Layouts/pages/works/Projects"
import Cursor from "./Components/Cursor"
import ProjectOne from "./Layouts/pages/works/ProjectOne"
import ProjectThree from "./Layouts/pages/works/ProjectThree"
import ProjectTwo from "./Layouts/pages/works/ProjectTwo"
import ComingSoon from "./Components/ComingSoon"
import { AnimatePresence } from "framer-motion"
import useFetch from "./hooks/useFetch"
// import useLocoScroll from "./context/useLocoScroll"

function App() {
  const [navBar, setNavBar] = useState(false)
  // const [loading, setLoading] = useState(true)
  const location = useLocation()

  return (
    <>
      <Cursor />
      <div className='App'>
        <NavBar navBar={navBar} setNavBar={setNavBar} />
        <NavLinks setNavBar={setNavBar} navBar={navBar} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact={true} path='/'>
              <Home navBar={navBar} />
            </Route>
            <Route path='/about'>
              <About navBar={navBar} />
            </Route>
            <Route path='/projects'>
              <Projects navBar={navBar} />
            </Route>
             <Route path='/project/jorge-investment'>
               <ProjectOne navBar={navBar} />
            </Route>
            <Route path='/project/bella-food'>
              <ProjectTwo navBar={navBar} />
            </Route>
            <Route path='/project/redxam'>
              <ProjectThree navBar={navBar} />
            </Route>
            <Route path='/coming-soon'>
              <ComingSoon navBar={navBar} />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

export default App
