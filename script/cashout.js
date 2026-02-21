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

            // history container ke dhora niya asbo
            const history = document.getElementById("transactions")
            // new div create korbo
            const newHistory = document.createElement("div");

            // new div inner html create korbo
            newHistory.innerHTML = `
            <div class="space-y-4">
                <div class="bg-white rounded-xl px-4 py-3.5 flex justify-between items-center">
                    <div class="flex gap-2 justify-center items-center">
                        <div class="bg-base-300 rounded-full px-4 py-4 flex justify-center items-center">
                            <img src="assets/opt-2.png" alt="">
                        </div>
                        <div class="">
                            <h3 class="text-neutral/70 font-semibold">Cashout — $${cashoutAmount}</h3>
                            <p class="text-xs text-neutral/70 font-normal">${new Date()}</p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis text-neutral/70 rotate-90"></i>
                    </div>
                </div>
            </div>
            `
            console.log(newHistory);
            // history container a new div append korbo
            history.append(newHistory);
        } else {
            // step-5.2: else false:: show alert error return
            alert("Invalid PIN !");
            return
        }
    })
