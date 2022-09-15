// variabels
let userScore = 0;
let compScore = 0;
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");
const userscore_span = document.querySelector("#user-score");
const compscore_span = document.querySelector("#comp-score");
const result_p = document.querySelector(".result p");

// eventListeners
eventListeners();
function eventListeners() {
    rock_div.addEventListener("click", () => {
        game("r");
    });
    paper_div.addEventListener("click", () => {
        game("p");
    });
    scissors_div.addEventListener("click", () => {
        game("s");
    });
}
