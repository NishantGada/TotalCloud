let employee = document.getElementById('employee');
let assignBtn = document.getElementById('assign');
let revokeBtn = document.getElementById('revoke');
let employeeList = document.getElementById('employeeList')
let assignedEmployees = document.getElementById('assignedEmployees');

function selector() {
    employee.style.background = "rgb(230, 230, 230)";
    revokeBtn.style.opacity = 0.4;
    revokeBtn.style.pointerEvents = "none";
}

function assign() {
    employee.remove();

    var li = document.createElement('li');
    li.innerHTML = employee.innerHTML;
    assignedEmployees.appendChild(li);

    revokeBtn.style.opacity = 1;
    revokeBtn.style.pointerEvents = "all";
}

function revoke() {
    //employee.remove();

    assignedEmployees.remove();

    var li2 = document.createElement('li');
    li2.innerHTML = employee.innerHTML;
    employeeList.appendChild(li2);
}
