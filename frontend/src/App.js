import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/Customer/NavBar/NavBar'
import Header from './components/Customer/Header/Header'
import Footer from './components/Customer/Footer/Footer'
import Logins from './components/Customer/Home/Logins'
import CogWheel from './components/Customer/CogWheel/CogWheel'
import Login  from './components/Customer/Cus_login/login'
import SignUp  from './components/Customer/SignUp/signUp'
import registercustomer  from './components/Customer/Shedules/Shedules'
import customerdetails  from './components/Customer/Cus_details/details'
import sheduledetails  from './components/Customer/Shedule_details/S_details'
import Updatecustomer from './components/Customer/Cus_update/C_update'
import Customerprofile from './components/Customer/Cus_profile/profile';

function App() {
  return (
    <Router>
      <switch>
        {/*Header and NavBar*/}
        <Route path="/" exact component={Header} />
        <Route path="/" component={NavBar} />
        <Route path="/" exact component={CogWheel} />
        <Route path="/" exact component={Logins} />
        
        {/* login */}
        <Route path="/Cus_login/Login" component={Login} />
        {/* signup */}
        <Route path="/SignUp/SignUp" component={SignUp} />
        <Route path="/Shedules/Services" component={registercustomer} />
        <Route path="/Cus_details/details" component={customerdetails} />
        <Route path="/Shedule_details/S_details" component={sheduledetails} />
        <Route path="/Cus_update/C_update/:id" component={Updatecustomer} />
        <Route path="/Cus_profile/profile/:id" component={Customerprofile} />

        {/*Footer*/}
        <Route path="/" component={Footer} />
      </switch>
    </Router>
  )
  }
export default App;