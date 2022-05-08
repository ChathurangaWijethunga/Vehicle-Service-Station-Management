import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFEmployee = (Employees) => {
  const doc = new jsPDF();

  const tableColum = [
    "fullname",
    "lastname",
    "address",
    "NIC",
    "teleNumber",
    "email",
  ];
  const tableRows = [];

  Employees.forEach((emp) => {
    const EmployeeData = [
      emp.fName,
      emp.lName,
      emp.address,
      emp.nic,
      emp.teleNumber,
      emp.email,
    ];
    tableRows.push(EmployeeData);
  });
  doc.autoTable(tableColum, tableRows, { startY: 20 });
  doc.text("All Employees in SMART CAR | Auto services", 14, 15);
  doc.save("EmployeeReport.pdf");
};

export default generatePDFEmployee;
