import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/Customer/NavBar/NavBar'
import Header from './components/Customer/Header/Header'
import Footer from './components/Customer/Footer/Footer'
import Logins from './components/Customer/Home/Logins'
import CogWheel from './components/Customer/CogWheel/CogWheel'

function App() {
  return (
    <Router>
      <switch>
        {/*Header and NavBar*/}
        <Route path="/" exact component={Header} />
        <Route path="/" component={NavBar} />
        <Route path="/" exact component={CogWheel} />
        <Route path="/" exact component={Logins} />

        {/*Footer*/}
        <Route path="/" component={Footer} />
      </switch>
    </Router>
  )
}

export default App
