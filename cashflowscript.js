document.addEventListener("DOMContentLoaded", function() {
    const rentalIncomeInput = document.getElementById("rentalIncome");
    const expensesInput = document.getElementById("expenses");
    const calculateButton = document.getElementById("calculateButton");
    const cashFlowResult = document.getElementById("cashFlowResult");

    calculateButton.addEventListener("click", function() {
        const rentalIncome = parseFloat(rentalIncomeInput.value) || 0;
        const expenses = parseFloat(expensesInput.value) || 0;

        const annualCashFlow = rentalIncome - expenses;
        cashFlowResult.textContent = `Annual Cash Flow: $${annualCashFlow}`;
    });
});