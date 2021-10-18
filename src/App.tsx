import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Container from './ui/Container'
import Header from './ui/Header'
import Goals from './ui/Goals'
import Projects from './ui/Projects'
import Project2 from './ui/Project2'
import News from './ui/News'
import Footer from './ui/Footer'

function App () {
  return (
    <Container>
        <Header />
        <Goals />
        <Projects />
        <Project2 />
        <News />
        <Footer />
    </Container>
  )
}

export default App
