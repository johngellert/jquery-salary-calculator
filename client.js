console.log('js load');

$(document).ready(readyNow);

let totalMonthlyCost = 0;


function readyNow() {
    console.log('jq load');
    $('.submitButton').on('click', handleSubmitClick);
    $('.employeeTable').on('click', '.deleteButton', handleDeleteButton);
    updateTotalMonthly(totalMonthlyCost);
}

// delcare handleSubmitClick
// captures input from the DOM and adds inputs to the employee table on the DOM
function handleSubmitClick() {
    // declare variables to store input data
    const firstName = $('.firstName').val();
    const lastName = $('.lastName').val();
    const id = $('.id').val();
    const title = $('.title').val();
    const annualSalary = $('.annualSalary').val();

    // clear input data
    $('.firstName').val('');
    $('.lastName').val('');
    $('.id').val('');
    $('.title').val('');
    $('.annualSalary').val('');

    // checks that all fields were completed before adding input data to the employee table
    if(validateInputData(firstName, lastName, id, title, annualSalary)) {
        return; // ends if a field is empty
    }

    // formatting the annual salary stored in table
    let annualSalarayFormated = parseInt(annualSalary);
    annualSalarayFormated = annualSalarayFormated.toLocaleString();

    // adds input data to employee table by calling addToEmployeeTable
    addToEmployeeTable(firstName, lastName, id, title, annualSalarayFormated);

    // converts annual salary to monthly salary and adds to monthly cost
    totalMonthlyCost += parseInt(annualSalary) / 12;

    // updates monthly cost
    updateTotalMonthly(totalMonthlyCost);

    //console.log('hello');
}

// declare addToEmpllyeeTable
// accepts five parameters and appends the data to the employee table on the DOM
function addToEmployeeTable(firstOut, lastOut, idOut, titleOut, salaryOut) {
    $('.employeeTable').append(`
    <tr>
        <td>${firstOut}</td>
        <td>${lastOut}</td>
        <td>${idOut}</td>
        <td>${titleOut}</td>
        <td id="salaryColumn">$ ${salaryOut}</td>
        <td id="deleteColumn">
            <button class="deleteButton">Delete</button>
        </td>
    </tr>
    `);
}

// declare handleDeleteButton
// removes an employee from the table on the DOM
function handleDeleteButton() {
    $(this).closest('tr').remove();
}

// declare updateTotalMonthly
// takes one parameter
// updates the total monthly cost and changes the css color if over 20,000
function updateTotalMonthly(totalMonthlyCostOut) {
    if (totalMonthlyCost > 20000) {
        $('#monthlyCost').css('background-color', 'red');
    }
    else {
        $('#monthlyCost').css('background-color', 'transparent');
    }

    // formatting the monthly cost
    totalMonthlyCostOut = totalMonthlyCostOut.toFixed(2);
    totalMonthlyCostOut = parseFloat(totalMonthlyCostOut);
    totalMonthlyCostOut = totalMonthlyCostOut.toLocaleString();
    // updates the total monthly cost and only allows two decimal places
    $('#monthlyCost').text(totalMonthlyCostOut);
}

// declare validateInputData
// checks that the fields are not empty
function validateInputData(first, last, id, title, salary) {
    if (!first) {
        alert("Please complete all fields");
        return true;
    }
    else if (!last) {
        alert("Please complete all fields");
        return true;
    }
    else if (!id) {
        alert("Please complete all fields");
        return true;
    }
    else if (!title) {
        alert("Please complete all fields");
        return true;
    }
    else if (!salary) {
        alert("Please complete all fields");
        return true;
    }

}

