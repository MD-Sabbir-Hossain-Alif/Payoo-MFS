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
        } else {
            // step - 1.2: if true:: show alert & reload page
            alert('Invalid Coupon!')
            return;
        }
    })