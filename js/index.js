let assignBtn = document.getElementById('assign');
let revokeBtn = document.getElementById('revoke');
let employeeList = document.getElementById('employeeList')
let assignedEmployees = document.getElementById('assignedEmployees');

let selectedEmployeeList = []

revokeBtn.style.opacity = 0.4;
revokeBtn.style.pointerEvents = "none";

function assign(e) {
    e.classList.add('selected');
}

assignBtn.addEventListener('click', function () {

    let abc = document.getElementsByClassName('selected');

    console.log(abc);

    while (abc.length > 0) {

        var li = document.createElement('li');
        li.innerHTML = abc[0].innerHTML;
        abc[0].remove();
        assignedEmployees.appendChild(li);


        revokeBtn.style.opacity = 1;
        revokeBtn.style.pointerEvents = "all";
    }

    let xyz = assignedEmployees.getElementsByTagName('li');

    for (var i = 0; i < xyz.length; i++) {
        xyz[i].onclick = function (e) {
            e.target.parentElement.classList.add('selected_r');
        }
    }
})

revokeBtn.addEventListener('click', function () {
    let abc = document.getElementsByClassName('selected_r');

    console.log(abc);

    while (abc.length > 0) {
        var li = document.createElement('li');
        li.innerHTML = abc[0].innerHTML;
        abc[0].remove();
        employeeList.appendChild(li);


        assignBtn.style.opacity = 1;
        assignBtn.style.pointerEvents = "all";
    }

    let xyz = employeeList.getElementsByTagName('li');

    for (var i = 0; i < xyz.length; i++) {
        xyz[i].onclick = function (e) {
            e.target.parentElement.classList.add('selected');
        }
    }
})
