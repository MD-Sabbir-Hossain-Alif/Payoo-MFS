/* -------------------------- Functional Pay Bill Logic (using vanilla js) ------------------------- */

// TODO: create pay bill with event:
document.getElementById("pay-bill-btn")
    .addEventListener("click", function () {
        // step 1. get the provider and validate
        const payBillAccount = getValueFromInput('pay-bill-provider');
        if (payBillAccount === "Select to pay") {
            alert("Please Select a provider");
            return;
        };

        // step 2. get pay bill number
        const accno = getValueFromInput('pay-bill-number');
        if (accno.length !== 11) {
            alert("Invalid Biller Account Number");
            return;
        };

        // step 3. get amount to current balance
        const amount = getValueFromInput('pay-bill-amount');
        const currentAmount = getBalance();

        // step 4. romove money
        const newBalance = currentAmount - Number(amount);

        // step 5. get pin and validate
        const pin = getValueFromInput('pay-bill-pin');
        if (pin === "9898") {
            // step - 5.1: if true:: show alert & set new balance
            alert(`Payment of $${amount} successful from ${payBillAccount} Biller (Acc: ${accno}) on ${new Date()}`);
            setBalance(newBalance);
        } else {
            // step - 5.2: if false:: show alert & return
            alert('Invalid Pin!');
            return;
        }
    })