console.log('js load');

$(document).ready(readyNow);

let totalMonthlyCost = 0;

function readyNow() {
    console.log('jq load');
    $('.submitButton').on('click', handleSubmitClick);
    $('.employeeTable').on('click', '.deleteButton', handleDeleteButton);
    updateTotalMonthly(totalMonthlyCost);
}

function handleSubmitClick() {
    const firstName = $('.firstName').val();
    const lastName = $('.lastName').val();
    const id = $('.id').val();
    const title = $('.title').val();
    const annualSalary = $('.annualSalary').val();

    addToEmployeeTable(firstName, lastName, id, title, annualSalary);
    
    // $('.firstName').val('');
    // $('.lastName').val('');
    // $('.id').val('');
    // $('.title').val('');
    // $('.annualSalary').val('');
    
    totalMonthlyCost += parseInt(annualSalary);

    updateTotalMonthly(totalMonthlyCost);

    console.log('hello');
}

function addToEmployeeTable(firstOut, lastOut, idOut, titleOut, salaryOut) {
    $('.employeeTable').append(`
    <tr>
        <td>${firstOut}</td>
        <td>${lastOut}</td>
        <td>${idOut}</td>
        <td>${titleOut}</td>
        <td id="salaryColumn">${salaryOut}</td>
        <td id="deleteColumn">
            <button class="deleteButton">Delete</button>
        </td>
    </tr>
    `);
}

function handleDeleteButton() {
    $(this).closest('tr').remove();
    console.log('delete');
}

function updateTotalMonthly(totalMonthlyCostOut){
   if(totalMonthlyCost > 20000){
       $('#monthlyCost').css('background-color', 'red');
   } 
    $('#monthlyCost').text(totalMonthlyCostOut);
}
