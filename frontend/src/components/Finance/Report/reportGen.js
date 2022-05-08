import jsPDF from 'jspdf'
import 'jspdf-autotable'

const genBill = (Bill, csh) => {
  const doc = new jsPDF()

  const tableColumn = [
    'Customer Name',
    'Service',
    'Vehicle',
    'Date',
    'Time',
    'Price',
    'Cash',
    'Balance',
  ]

  const tableRows = []

  let bln = csh - Bill.price
  let total = parseFloat(Bill.price).toFixed(2)
  let balance = parseFloat(bln).toFixed(2)
  let cash = parseFloat(csh).toFixed(2)
  const bill = [
    Bill.name,
    Bill.service,
    Bill.vehicle,
    Bill.date,
    Bill.time,
    total,
    cash,
    balance,
  ]
  tableRows.push(bill)

  doc.text('All Scheduled details in Dulaj Motor System', 14, 15)
  doc.autoTable(tableColumn, tableRows, { startY: 20 })
  doc.save('BillReport.pdf')
}

export default genBill
