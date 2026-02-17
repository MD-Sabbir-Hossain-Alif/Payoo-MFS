document.getElementById("cashout-btn")
    .addEventListener("click", function() {
        // step-1: get the number & validation
        const cashoutNumInput = document.getElementById("cashout-number");
        const cashoutNum = cashoutNumInput.value;
        if (cashoutNum.length != 11) {
            alert("Invalid Agent Number");
            return;
        }

        // step-2: get the amount, validate & convert to number
        const cashoutAmountInput = document.getElementById("cashout-amount");
        const cashoutAmount = cashoutAmountInput.value;


        // step-3: get the current balance, validate & convert to number
        const balanceElement = document.getElementById("balance");
        const balance = balanceElement.innerText;

        // step-4: calculate new balance & validate
        const newBalance = Number(balance) - Number(cashoutAmount);
        if (newBalance < 0) {
            alert("Invalid Amount!");
            return;
        }

        // step-5: get the pin & verify
        const cashoutPinInput = document.getElementById("cashout-pin");
        const cashoutPin = cashoutPinInput.value;

        if (cashoutPin === "9898") {
            // step-5.1: if true:: show alert & set new balance
            alert(`Cashout Successful: $${cashoutAmount}`);
            balanceElement.innerText = newBalance;
            

        } else {
            // step-5.2: else false:: show alert error return
            alert("Invalid PIN !");
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
        
        

        
    })
