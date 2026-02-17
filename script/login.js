/* -------------------------- Functional Login Form (using vanilla js) ------------------------- */

// TODO: create login button event:
document.getElementById("login-btn")
    .addEventListener("click", function(event) {

        event.preventDefault();

        // step-1: get the mobile number input
        const numberInput = document.getElementById("input-number");
        const contactNumber = numberInput.value;

        // step-2: get the pin input
        const pinInput = document.getElementById("input-pin");
        const pin = pinInput.value;

        // step-3: metch mobile & pin 
        if (contactNumber === "01300000000" && pin === "9898") {
            // step-3.1 if true::alert::>homepage
            alert("login Success");
            window.location.assign("./home.html");
        } else {
            // step-3.2 if false::alert::>return
            alert("login Failed");
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
        
        
    });