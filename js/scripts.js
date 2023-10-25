window.addEventListener("load", () => {
    const form = document.querySelector("#countUpForm");
    form.addEventListener("submit", calculate)
});

function calculate(e) {
    e.preventDefault();
    const countBy = parseInt(document.getElementById("countBy").value);
    const countTo = parseInt(document.getElementById("countTo").value);
    if (Number(countBy) && Number(countTo)) {
        if (countBy > 0 && countTo > 0) {
            if (countBy < countTo) {
                let result = 0;
                for (i = countBy; countTo >= i; i += countBy) {
                    result += countBy;
                    document.querySelector("#results").innerHTML = "CountTo: " + countTo + " CountBy: " + i;
                }
                return result;
            } else {
                document.querySelector("#results").innerHTML = "Make sure your counting number is lower than your total."
            }
        } else {
            document.querySelector("#results").innerHTML = "Please enter a positive number.";
        }
    } else {
        document.querySelector("#results").innerHTML = "NaN";
    }
}