/* -------------------------- Functional Add Money Logic (using vanilla js) ------------------------- */

// TODO: create add money logic with event:
document.getElementById("add-money-btn")
    .addEventListener("click", function () {
        // step 1. get the bank and validate
        const bankAccount = getValueFromInput('add-money-bank');
        if (bankAccount === "Select bank") {
            alert("Please Select a Bank");
            return;
        };

        // step 2. get add money number
        const accno = getValueFromInput('add-money-number');
        if (accno.length !== 11) {
            alert("Invalid Bank Account Number");
            return;
        };

        // step 3. get amount to current balance
        const amount = getValueFromInput('add-money-amount');
        const currentAmount = getBalance();
        
        // step 4. add amount
        const newBalance = currentAmount + Number(amount);

        // step 5. get pin and validate
        const pin = getValueFromInput('add-money-pin');
        if (pin === "9898") {
            // step - 5.1: if true:: show alert & set new balance
            alert('Add Money Succeed');
            setBalance(newBalance);
        } else {
            // step - 5.2: if true:: show alert & reload page
            alert('Invalid Pin!')
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
    })