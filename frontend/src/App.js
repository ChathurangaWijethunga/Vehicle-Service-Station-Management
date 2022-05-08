import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Customer/NavBar/NavBar";
import Header from "./components/Customer/Header/Header";
import Footer from "./components/Customer/Footer/Footer";
import Logins from "./components/Customer/Home/Logins";
import CogWheel from "./components/Customer/CogWheel/CogWheel";
import Login from "./components/Customer/Cus_login/login";
import SignUp from "./components/Customer/SignUp/signUp";
import registercustomer from "./components/Customer/Shedules/Shedules";
import customerdetails from "./components/Customer/Cus_details/details";
import sheduledetails from "./components/Customer/Shedule_details/S_details";
import Updatecustomer from "./components/Customer/Cus_update/C_update";
import Customerprofile from "./components/Customer/Cus_profile/profile";

//Employee
import TabsView from "./components/Employee/Tabs/TabsView";
import EmpUpdate from "./components/Employee/EmployeeUpdate/employee_Update";
import empDelete from "./components/Employee/EmployeeDelete/employee_Delete";
import HRView from "./components/Employee/HRManagementView/HR_Management_View";
import AddEmployee from "./components/Employee/AddNewEmployee/add_new_employee";
import profile from "./components/Employee/EmployeeProfile/Employee_Profile";

//spareparts
import SparePartMainPage from "./components/SparePart/SparePartMainPage";
import SparePartAllPage from "./components/SparePart/SparePartAllPage";
import SparePartAdd from "./components/SparePart/SparePartAdd";
import OilAllPage from "./components/SparePart/OilAllPage";
import OilAdd from "./components/SparePart/OilAdd";
import message from "./components/SparePart/message";

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
        {/* HeaderandNavBar */}
        <Route path="/" exact component={Header} />
        <Route path="/" component={NavBar} />

        {/* Employee */}
        <Route path="/tabView" component={TabsView} />
        <Route path="/empUpdate/:id" component={EmpUpdate} />
        <Route path="/empDelete/:id" component={empDelete} />
        <Route path="/hrView/:empID/:id" component={HRView} />
        <Route path="/addEmp" component={AddEmployee} />
        <Route path="/empProfile/:id" component={profile} />

        {/* spareparts*/}
        <Route path="/SpareParts" exact component={SparePartMainPage} />
        <Route path="/SpareParts/all" exact component={SparePartAllPage} />
        <Route path="/SpareParts/add" exact component={SparePartAdd} />
        <Route path="/SpareParts/Oil/all" exact component={OilAllPage} />
        <Route path="/SpareParts/Oil/add" exact component={OilAdd} />
        <Route path="/SpareParts/message" exact component={message} />

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

        {/* Footer */}
        <Route path="/" component={Footer} />
      </switch>
    </Router>
  );
}

export default App;
