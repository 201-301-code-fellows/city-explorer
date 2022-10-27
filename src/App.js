import React, { Component } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'
export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Main />
        <Footer />

      </>
    )
  }
}

