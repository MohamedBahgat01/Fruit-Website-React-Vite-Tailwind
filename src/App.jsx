import React, { useEffect } from 'react'
import Hero from './components/Hero/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Part1 from './components/Partion1/part1'
// import Contact from './components/Contact/Contact'

const App = () => {
  useEffect (() => {
    AOS.init({
      offset:100,
      duration:1000,
      easing:"ease-in-sine",
      delay:100,
    });
  });
  return (
    <div >
      <Hero />
      {/* <Part1 />
      <Contact /> */}
    </div>
  )
}

export default App
