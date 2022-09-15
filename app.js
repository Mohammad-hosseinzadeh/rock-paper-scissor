// variabels
let userScore = 0;
let compScore = 0;
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissor_div = document.querySelector("#s");
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
    scissor_div.addEventListener("click", () => {
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
// conver letter to word
function convertToWord(letter) {
    if (letter === "r") {
        return "سنگ";
    } else if (letter === "p") {
        return "کاغذ";
    }
    return "قیچی";
}

// if user won
function win(userChoice, compChoice) {
    userScore++;
    userscore_span.innerHTML = userScore;
    compscore_span.innerHTML = compScore;
    result_p.innerHTML = `شما برنده شدید !!! شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(compChoice)} را انتخاب کرد .`;
    // add grenn class
    document.getElementById(userChoice).classList.add("green");
    // remove green class after 500ms
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("green");
    }, 500);
}
// if user lose
function lose(userChoice, compChoice) {
    compScore++;
    userscore_span.innerHTML = userScore;
    compscore_span.innerHTML = compScore;
    result_p.innerHTML = `شما باختید !!! شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(compChoice)} را انتخاب کرد .`;
    // add red class
    document.getElementById(userChoice).classList.add("red");
    // remove red class after 500ms
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("red");
    }, 500);
}
// if draw
function draw(userChoice, compChoice) {
    result_p.innerHTML = `  بازی مساوی شد !!! شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(compChoice)} را انتخاب کرد .`;
    // add gray class
    document.getElementById(userChoice).classList.add("gray");
    // remove gray class after 500ms
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("gray");
    }, 500);
}
