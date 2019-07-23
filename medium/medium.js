let randomNumber = parseInt(Math.random() * 501);

let attempts = 0;

function checkResult() {

    let result = document.querySelector("input").value;

    attempts++;
    
    if (result == "") {
        alert("Please Enter a Number");
    }
    else if (result < randomNumber) {
        alert("Too Small!");
    }
    else if (result > randomNumber) {
        alert("Too Large!")
    } else if (result = randomNumber) {
        alert("Congratulations You did In " + attempts + " Attempts!")
    };
}