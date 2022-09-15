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

// functions

// get computer choice
function getCompChoice() {
    const choices = ["r", "p", "s"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// get userChoice and computerChoice and compare them
function game(userChoice) {
    const compChoice = getCompChoice();
    console.log(userChoice + compChoice);
    switch (userChoice + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);
            break;
        default:
            break;
    }
}

// if user won
function win(userChoice,compChoice){
    userScore++;
    userscore_span.innerHTML=userScore;
    compscore_span.innerHTML=compScore;
}
// if user lose
function lose(userChoice,compChoice){
    compScore++;
    userscore_span.innerHTML=userScore;
    compscore_span.innerHTML=compScore;
}
// if draw
function draw(userChoice,compChoice){
    
}