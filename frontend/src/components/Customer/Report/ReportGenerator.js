// import jsPDF from "jspdf";
// import "jspdf-autotable";


// const generetePDFCustomer = (customerlist) =>{
//         const doc = new jsPDF();

//         const tableColunm = ["Customer Name","Phone Number","Email","NIC","Vehicle Number"];
//         const tableRows=[];

//         customerlist.forEach(Customer =>{
//             const customerData = [
//                 Customer.name,
//                 Customer.Email,
//                 Customer.pnum,
//                 Customer.nic,
//                 Customer.vehicle,
//             ];
//             tableRows.push(customerData);
//         });

//         doc.autoTable(tableColunm,tableRows,{starty:20});
//         doc.text("All Customers in Smart Car Service System",14,10);
//         doc.save("CustomerReport.pdf");

// };

// export default generetePDFCustomer;

import jsPDF from 'jspdf'

import 'jspdf-autotable'



const generetePDFCustomer = (Customer) => {

  const doc = new jsPDF()



  const tableColumn = [

    "Customer Name",
    "Phone Number",
    "Email",
    "NIC",
    "Vehicle Number"
  ]

  const tableRows = []



  Customer.forEach((sch) => {



    const schData = [

      sch.name,
      sch.Email,
      sch.pnum,
      sch.nic,
      sch.vehicle,

    ]

    tableRows.push(schData)

  })



  doc.text('All Customer Details in Smart Car Service System', 14, 15)

  doc.autoTable(tableColumn, tableRows, { startY: 20 })

  doc.save('CustomerReport.pdf')

}



export default generetePDFCustomer