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
                            <img src="assets/opt-3.png" alt="">
                        </div>
                        <div class="">
                            <h3 class="text-neutral/70 font-semibold">Money Transferred — $${transferAmount}</h3>
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