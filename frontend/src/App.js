import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/Customer/NavBar/NavBar'
import Header from './components/Customer/Header/Header'
import Footer from './components/Customer/Footer/Footer'
import Logins from './components/Customer/Home/Logins'
import CogWheel from './components/Customer/CogWheel/CogWheel'

// Finance
import payment_Sum from './components/Finance/paymentSum/paymentsummary'
import Earning_history from './components/Finance/earningHistory/earningHistoryui'
import Outgoing_history from './components/Finance/outgoingHistory/outgoingHistoryui'
import Customer_Bill from './components/Finance/customerBill/customerBillui'
import Cash_Method from './components/Finance/cashMethod/cashMethodui'
import Pending_List from './components/Finance/pendingList/pendingListui'
import Payment_Success from './components/Finance/paymentSuccess/paymentSuccessui'
import Online_Method from './components/Finance/onlineMethod/onlineMethodui'

function App() {
  return (
    <Router>
      <switch>
        {/*Header and NavBar*/}
        <Route path="/" exact component={Header} />
        <Route path="/" component={NavBar} />
        <Route path="/" exact component={CogWheel} />
        <Route path="/" exact component={Logins} />

        {/*Finance*/}
        <Route path="/payment" exact component={payment_Sum} />
        <Route path="/payment/earnings" component={Earning_history} />
        <Route path="/payment/outgoings" component={Outgoing_history} />
        <Route path="/payment/pendinglist" component={Pending_List} />
        <Route path="/payment/billreview/:id" component={Customer_Bill} />
        <Route path="/payment/cashportal/:id" component={Cash_Method} />
        <Route path="/payment/onlineportal/:id" component={Online_Method} />
        <Route path="/payment/success" component={Payment_Success} />

        {/*Footer*/}
        <Route path="/" component={Footer} />
      </switch>
    </Router>
  )
}

export default App
