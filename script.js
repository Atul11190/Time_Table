// script.js
function addRow() {
    let day = document.getElementById("day").value;
    let subject = document.getElementById("subject").value;
    let time = document.getElementById("time").value;
    let room = document.getElementById("room").value;
    
    if (day === "" || subject === "" || time === "" || room === "") {
        alert("Please fill all fields");
        return;
    }
    
    let table = document.getElementById("timetable");
    let row = table.insertRow(-1);
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    
    cell1.innerHTML = day;
    cell2.innerHTML = subject;
    cell3.innerHTML = time;
    cell4.innerHTML = room;
    cell5.innerHTML = '<button class="btn delete-btn" onclick="deleteRow(this)">Delete</button>';
    
    document.getElementById("subject").value = "";
    document.getElementById("time").value = "";
    document.getElementById("room").value = "";
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function printTable() {
    window.print();
}

function downloadPDF() {
    const element = document.querySelector(".container");
    html2pdf().from(element).save("TimeTable.pdf");
}

function downloadExcel() {
    let table = document.getElementById("timetable");
    let wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, "TimeTable.xlsx");
}