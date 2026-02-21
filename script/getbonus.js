/* -------------------------- Functional Get Bonus Logic (using vanilla js) ------------------------- */

// TODO: create get bonus with event:
document.getElementById("get-bonus-btn")
    .addEventListener("click", function () {
        // step 1. get the coupon and validate
        const coupon = getValueFromInput('get-bonus-coupon');

        const currentAmount = getBalance();
        const couponAmount = 500;
        const newBalance = currentAmount + couponAmount
        
        if (coupon === "PAY-H4O8") {
            // step - 1.1: if true:: show alert & set new balance
            alert(`Congratulation! You Get Bonus $${500}`);
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
                            <img src="assets/opt-4.png" alt="">
                        </div>
                        <div class="">
                            <h3 class="text-neutral/70 font-semibold">Bonus — $${couponAmount}</h3>
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
            // step - 1.2: if false:: show alert & return page
            alert('Invalid Coupon!')
            return;
        }
    })