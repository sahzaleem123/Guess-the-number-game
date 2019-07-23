let randomNumber = 0;
let attempts = 0;

function resetGame(){
    randomNumber = parseInt(Math.random() * 1001)+1;
    attempts = 0;
};
resetGame();

function checkResult() {

    let result = document.querySelector("input").value;

    if (result == "") {
        alert("Please Enter a Number");
    }
    else if (result < randomNumber) {
        alert("Too Small!");
        attempts++;
    }
    else if (result > randomNumber) {
        alert("Too Large!");
        attempts++;
    } else {
        alert("Congratulations You did In " + attempts + " Attempts!");
        resetGame();
    };
}