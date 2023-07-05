const sound1 = new Audio("./sounds/sound1.mp3")
const bgm = document.getElementById("bgm");
const cheer = new Audio("./sounds/cheer.mp3");
const sad = new Audio("./sounds/cartoon_fail_strings_trumpet.mp3")
bgm.loop = true;
cheer.loop = true;
sad.loop = true;
const board= document.getElementById("board");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const front = document.getElementById("front");
const back = document.getElementById("back");
const turn = document.getElementById("turn");
const win = document.getElementById("win");
const winM = document.getElementById("winM")
let moves = ["", "", "", "", "", "", "", "", ""];
const start = document.getElementById("start");
const reset = document.getElementById("reset");
let p1name;
let p2name;
let counter = 0;
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
let index;
let currentPlayer;
let currentMove = "x";
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//start button
start.onclick = function(){
    sound1.play();
    if(name1.value === ""){
        p1name = "Player X";
    }else{p1name = name1.value}
    if(name2.value === ""){
        p2name = "Player O";
    }else{p2name = name2.value}
    front.style.zIndex = 0;
    turn.innerHTML = `Game starts by just Click on a box!<br>
    ${p1name} starts as Player X. And ${p2name} as Player O,<br>
    ${p1name}, it is your turn!`;
    currentPlayer = p1name;
}
//reset
reset.onclick = function(){
    cheer.pause();
    sad.pause();
    sound1.play();
    moves = ["", "", "", "", "", "", "", "", ""];
    zero.classList = "grid";
    one.classList = "grid";
    two.classList = "grid";
    three.classList = "grid";
    four.classList = "grid";
    five.classList = "grid";
    six.classList = "grid";
    seven.classList = "grid";
    eight.classList = "grid";
    counter = 0;
    bgm.muted = false;
    win.style.zIndex = "0";
}
//switch between X and O
const getMove = (target) => {
    index = parseInt(target.getAttribute('id'));
    if(counter % 2 === 1){
        currentPlayer = p2name;
        turn.innerHTML = `${p1name}, it is your turn!`;
        board.className = "x";
        currentMove = "o";
        target.classList.add(currentMove);
        moves[index] = currentMove;
    }else{
        currentPlayer = p1name;
        turn.innerHTML = `${p2name}, it is your turn!`;
        board.className = "o";
        currentMove = "x";
        target.classList.add(currentMove);
        moves[index] = currentMove;
    }
    target.classList.add("active");
    counter += 1;
}

zero.onclick = function(){
    sound1.play();
    if(zero.classList.contains("active") === false){
        getMove(zero);
        checkWin();
    }              
}
one.onclick = function(){
    sound1.play();
    if(one.classList.contains("active") === false){
        getMove(one);
        checkWin();
    }
}
two.onclick = function(){
    sound1.play();
    if(two.classList.contains("active") === false){
        getMove(two);
        checkWin();
    }
}
three.onclick = function(){
    sound1.play();
    if(three.classList.contains("active") === false){
        getMove(three);
        checkWin();
    }
}
four.onclick = function(){
    sound1.play();
    if(four.classList.contains("active") === false){
        getMove(four);
        checkWin();
    }
}
five.onclick = function(){
    sound1.play();
    if(five.classList.contains("active") === false){
        getMove(five);
        checkWin();
    }
}
six.onclick = function(){
    sound1.play();
    if(six.classList.contains("active") === false){
        getMove(six);
        checkWin();
    }
}
seven.onclick = function(){
    sound1.play();
    if(seven.classList.contains("active") === false){
        getMove(seven);
        checkWin();
    }
}
eight.onclick = function(){
    sound1.play();
    if(eight.classList.contains("active") === false){
        getMove(eight);
        checkWin();
    }
}

//check win
const checkWin = () => {
    if (counter > 4){
        for(condition of winningConditions){
            let a = condition[0];
            let b = condition[1];
            let c = condition[2];
            if (moves[a]=== currentMove && moves[b]=== currentMove && moves[c] === currentMove){
                bgm.muted = true;
                cheer.play();
                sad.pause();
                winM.innerHTML = `${currentPlayer} won!`;
                win.style.zIndex = "3";
                return
            }
            if(counter === 9){
                bgm.muted = true;
                cheer.pause();
                sad.play();
                winM.innerHTML = `It's a draw!`;
                win.style.zIndex = "3";
            }
        }
    }
}

