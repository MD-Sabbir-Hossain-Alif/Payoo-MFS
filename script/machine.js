/* -------------------------- DRY Code (reuseable function) ------------------------- */

// TODO: create a function that take id and return value:
// 1. id to value convater function
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// 2. get balance 
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

// 3. set balance
function setBalance(value) {
    document.getElementById("balance").innerText = value;
}