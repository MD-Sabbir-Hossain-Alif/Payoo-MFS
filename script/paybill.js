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
                            <img src="assets/opt-5.png" alt="">
                        </div>
                        <div class="">
                            <h3 class="text-neutral/70 font-semibold"> ${payBillAccount} Bill — $${amount} Paid</h3>
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
            // step - 5.2: if false:: show alert & return
            alert('Invalid Pin!');
            return;
        }
    })