import React from 'react'
import './App.css'
import Background from './components/Background'
import About from './components/About'
import Work from './components/Work'
import Morething from './components/Morething'
import Contact from './components/Contact'

class App extends React.Component {
  render () {
    return (
      <div className="is-preload">
        <Background/>
        <About/>
        <Work/>
        <Morething/>
        <Contact/>
      </div>
    )
  }
}
export default App;
