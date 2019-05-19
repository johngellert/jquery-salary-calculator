console.log('js load');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq load');
    $('.submitButton').on('click', handleSubmitClick);
}

function handleSubmitClick() {
    const firstName = $('.firstName').val();
    const lastName = $('.lastName').val();
    const id = $('.id').val();
    const title = $('.title').val();
    const annualSalary = $('.annualSalary').val();

    appendToEmployeeTable(firstName, lastName, id, title, annualSalary);

    $('.firstName').val('');
    $('.lastName').val('');
    $('.id').val('');
    $('.title').val('');
    $('.annualSalary').val('');

    console.log('hello');
}

function appendToEmployeeTable(firstOut, lastOut, idOut, titleOut, salaryOut) {
    $('.employeeTable').append(`
    <tr>
        <td>${firstOut}</td>
        <td>${lastOut}</td>
        <td>${idOut}</td>
        <td>${titleOut}</td>
        <td>${salaryOut}</td>
    </tr>
    `);
}