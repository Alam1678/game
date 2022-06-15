
let p1score = 0;
let p2score = 0;
let playingto = 5;

let playerTurn = "p1";
//const playerTurn = ["p1", "p2"];
let gameover = false;

const p1Elem = document.getElementById("p1score");
const p2Elem = document.getElementById("p2score");
const playingToElem = document.getElementById("playingto");
const playingToScoreElem = document.getElementById("inputPlayingScore");
const formElem = document.querySelector('form');
const p1btnElem = document.getElementById('p1btn');
const p2btnElem = document.getElementById("p2btn");
const resetBtnElem = document.getElementById("resetbtn");

playingToElem.textContent = playingto;

function gameOver(gameover)
{
    if(gameover === true)
    {
        p1btnElem.setAttribute("disabled", "disabled");
        p2btnElem.setAttribute("disabled", "disabled");
    }
}
function handleInputValidation(score)
{
    if(score < 1)
    {
        alert("Please provide a valid number.");
        window.location.reload();
    }
    else{

        playingToElem.textContent = score; 
        playingto = score;   }
}
formElem.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let inputScore = Number(playingToScoreElem.value);
    handleInputValidation(inputScore);

    playingToScoreElem.value='';
    
   
});

p1btnElem.addEventListener('click', (evt) => {
    //p1score++;
    //console.log(generateOTP());
    // const player = playerTurn[generateOTP()];
    // console.log(player);
    p1score = p1score + Math.floor(Math.random() * 10) + 1;
    if(playerTurn === "p1" && p1score < playingto)
    {
       

        playerTurn = "p2";
        p1btnElem.setAttribute("disabled", "disabled");
        p2btnElem.removeAttribute("disabled");
    }
    else{
        gameover = true;
        alert("Player - 1 won");
    }
    
    p1Elem.textContent = p1score;
    gameOver(gameover);
});
p2btnElem.addEventListener('click', (evt) => {
    //p2score++;
    p2score = p2score + Math.floor(Math.random() * 10) + 1;
    if(playerTurn === "p2" && p2score < playingto)
    {
        
        playerTurn = "p1";
        p1btnElem.removeAttribute("disabled");
        p2btnElem.setAttribute("disabled", "disabled");
    }
    else{
        gameover = true;
        alert("Player - 2 won");
    }
    
    p2Elem.textContent = p2score;
    gameOver(gameover);

});
resetBtnElem.addEventListener("click", () => {
    // let p1score = 0;
    // let p2score = 0;
    // let playingto = 5;
    // let gameover = false;
    // p1btnElem.removeAttribute("disabled");
    // p2btnElem.removeAttribute("disabled");

    window.location.reload();
   
});

function generateOTP() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '01';
    let OTP = '';
    for (let i = 0; i < 1; i++ ) {
        OTP += digits[Math.floor(Math.random() * 2)];
    }
    return OTP;
};


