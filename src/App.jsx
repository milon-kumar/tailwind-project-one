import { Fragment } from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/home/Hero"
import Fetures from "./components/home/Fetures"
import About from "./components/home/About"
import Priching from "./components/home/Priching"
import Newsletter from "./components/home/Newsletter"
import Footer from "./components/layout/Footer"
function App() {

  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Fetures />
      <About />
      <Priching />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default App
