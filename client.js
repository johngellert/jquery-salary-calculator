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

    $('.firstName').val('');
    $('.lastName').val('');
    $('.id').val('');
    $('.title').val('');
    $('.annualSalary').val('');

    if(validateInputData(firstName, lastName, id, title, annualSalary)) {
        return;
    }

    let annualSalarayFormated = parseInt(annualSalary);
    annualSalarayFormated = annualSalarayFormated.toLocaleString();

    addToEmployeeTable(firstName, lastName, id, title, annualSalarayFormated);

    totalMonthlyCost += parseInt(annualSalary) / 12;

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
        <td id="salaryColumn">$ ${salaryOut}</td>
        <td id="deleteColumn">
            <button class="deleteButton">Delete</button>
        </td>
    </tr>
    `);
}

function handleDeleteButton() {
    $(this).closest('tr').remove();
    console.log(deleteMonthlyCost);
}

function updateTotalMonthly(totalMonthlyCostOut) {
    if (totalMonthlyCost > 20000) {
        $('#monthlyCost').css('background-color', 'red');
    }
    else {
        $('#monthlyCost').css('background-color', 'transparent');
    }

    totalMonthlyCostOut = totalMonthlyCostOut.toFixed(2);
    totalMonthlyCostOut = parseFloat(totalMonthlyCostOut);
    totalMonthlyCostOut = totalMonthlyCostOut.toLocaleString();
    // updates the total monthly cost and only allows two decimal places
    $('#monthlyCost').text(totalMonthlyCostOut);
}

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

