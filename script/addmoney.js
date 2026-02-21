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
            alert(`$${amount} Add Money Success from: ${bankAccount} Bank Acc No: ${accno} at ${new Date()}`);
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
                            <img src="assets/opt-1.png" alt="">
                        </div>
                        <div class="">
                            <h3 class="text-neutral/70 font-semibold">Add Money — $${amount} from ${bankAccount}</h3>
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
            // step - 5.2: if false:: show alert & retrun
            alert('Invalid Pin!');
            return
        }
    })