import React from 'react'
import Banner from './components/sections/banner'
import About from './components/sections/about'
import Services from './components/sections/services'
import Experience from './components/sections/experience'
import Header from './components/sections/header'
import Contact from './components/sections/contact/contact'
import Portfolio from './components/sections/portfolio'
import Footer from './components/sections/footer'
import ProgressBar from './components/ui/progressBar'

const App = () => {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <ProgressBar />
    </main>
  )
}

export default App