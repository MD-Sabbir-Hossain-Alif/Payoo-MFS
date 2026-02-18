/* -------------------------- Functional Cashout Logic (using vanilla js) ------------------------- */

// TODO: create cashout logic with event:
document.getElementById("cashout-btn")
    .addEventListener("click", function() {
        // step-1: get the number & validation
        const cashoutNum = getValueFromInput("cashout-number")
        if (cashoutNum.length != 11) {
            alert("Invalid Agent Number");
            return;
        }

        // step-2: get the amount
        const cashoutAmount = getValueFromInput("cashout-amount");

        // step-3: get the current balance
        const currentBalance = getBalance();

        console.log(balance, cashoutAmount)

        // step-4: calculate new balance , validate & convert to number
        const newBalance = currentBalance - Number(cashoutAmount);
        if (newBalance < 0) {
            alert("Invalid Amount!");
            return;
        }

        // step-5: get the pin & verify
        const cashoutPin = getValueFromInput("cashout-pin");

        if (cashoutPin === "9898") {
            // step-5.1: if true:: show alert & set new balance
            alert(`Cashout Successful: $${cashoutAmount}`);
            setBalance(newBalance);
        } else {
            // step-5.2: else false:: show alert error reload
            alert("Invalid PIN !");
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
    })
