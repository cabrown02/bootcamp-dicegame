const players = document.querySelectorAll(".player");
let h1 = document.querySelector(".result");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

// when btn is pressed
document.querySelector(".btn").addEventListener("click", function() {
    // iterate over player divs
    for (let i = 0; i < players.length; i++) {
        // set block variables
        // random number generator between 1 - 6 inclusive
        let num = Math.floor(Math.random() * ((6 - 1) + 1)) + 1;
        // create the src for img tags
        let imgSource = "images/dice" + num + ".png";

        // debugging
        console.log("roll: " + num);


        // set the src for the img based on the number rolled
        players[i].querySelector("img").setAttribute("src", imgSource);
        // set the number in data-score for comparison
        players[i].setAttribute("data-score", num);
        // remove the hide class to show the dice
        players[i].querySelector("img").classList.remove("hide");

        // logic
        if (player1.getAttribute("data-score") > player2.getAttribute("data-score")) {
            h1.textContent = "Player 1 WINS!";
        } else if (player1.getAttribute("data-score") < player2.getAttribute("data-score")) {
            h1.textContent = "Player 2 WINS!";
        } else {
            h1.textContent = "Draw...roll again!";
        }
    }
});