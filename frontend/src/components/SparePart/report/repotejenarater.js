import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFSpareParts = SparePart => {
    const doc = new jsPDF();

    const tabColum =["SpareParts Name","Makes","Model","brand","price"];
    const tableRows = [];

    SparePart.forEach(spa => {
        const SparePartData = [
            spa.sName,
            spa.sMakes,
            spa.sModel,
            spa.sBrands,
            spa.sPrice

        ];
        tableRows.push(SparePartData);
        
    });
    doc.autoTable(tabColum,tableRows,{startY:20});
    doc.text("ALL SPARE PARTS IN SMART CAR SERVICE",40,15);
    doc.save('SparePartsReport.pdf');
};

export default generatePDFSpareParts;