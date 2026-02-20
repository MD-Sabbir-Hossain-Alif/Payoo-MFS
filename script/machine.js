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

// 4. hide all and show id

const latest = document.getElementById('latest-payment');
const addMoney = document.getElementById('add-money');
const cashout = document.getElementById('cashout');
const transferMoney = document.getElementById('transfer-money');
const getBonus = document.getElementById('get-bonus');
const payBill = document.getElementById('pay-bill');
const transactions = document.getElementById('transactions');

function showOnly(id) {
    // hide all
    latest.classList.add('hidden')
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transferMoney.classList.add('hidden')
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');
    transactions.classList.add('hidden')

    // show only id
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}