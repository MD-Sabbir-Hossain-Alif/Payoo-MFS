/* -------------------------- Functional Transfer Money Logic (using vanilla js) ------------------------- */

// TODO: create transfer money logic with event:
document.getElementById("transfer-btn")
    .addEventListener("click", function () {
        // step-1: get the number & validation
        const transferNum = getValueFromInput("transfer-number")
        if (transferNum.length != 11) {
            alert("Invalid Account Number");
            return;
        }

        // step-2: get the amount
        const transferAmount = getValueFromInput("transfer-amount");

        // step-3: get the current balance
        const currentBalance = getBalance();

        console.log(balance, transferAmount)

        // step-4: calculate new balance , validate & convert to number
        const newBalance = currentBalance - Number(transferAmount);
        if (newBalance < 0) {
            alert("Invalid Amount!");
            return;
        }

        // step-5: get the pin & verify
        const transferPin = getValueFromInput("transfer-pin");

        if (transferPin === "9898") {
            // step-5.1: if true:: show alert & set new balance
            alert(`Transfer Successful: $${transferAmount}`);
            setBalance(newBalance);
        } else {
            // step-5.2: else false:: show alert error reload
            alert("Invalid PIN !");
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
    })