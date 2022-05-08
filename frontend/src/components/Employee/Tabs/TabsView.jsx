import { Tabs } from 'react-bootstrap'
import EmpList from '../employeeDetails/Employee_Details'
import EmpAttendance from '../EmployeeAttendance/Employee_Attendance'
import './tabsView.css'

export default function Tab() {
  // Vehicle type selection close
  return (
    <div className="Employeedata">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab className="tab1" eventKey="home" title="Employee Details">
          <h2>Employee Details</h2>

          <hr />
          <EmpList />
        </Tab>
        <Tab className="tab1" eventKey="profile" title="Employee Attendance">
          <h2>Employee Attendance</h2>

          <hr />
          {EmpAttendance()}
        </Tab>
      </Tabs>
    </div>
  )
}
