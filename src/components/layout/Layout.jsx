import React from 'react'
import About from '../About'
import Contact from '../Contact'
import Home from '../Home'
import Nav from '../Nav'
import Services from '../Services'

function Layout() {
  return (
    <div>
        <Nav />
        <Home />
        <Services />
        <About />
        <Contact />
    </div>
  )
}

export default Layout