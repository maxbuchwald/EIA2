"use strict";
var memory;
(function (memory) {
    let chosenSequence = ["A", "P", "F", "E", "L"];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let chosenSequence = document.querySelector("input#sequence");
        chosenSequence.addEventListener("input", chooseSequence);
        let chosenTime = document.querySelector("input#time");
        chosenTime.addEventListener("input", setTimeout);
        let board = document.querySelector("div#board");
        board.addEventListener("click", openCharacter);
        let button = document.querySelector("button");
        button.addEventListener("click", startgame);
    }
    function chooseSequence() {
        console.log("chooseSequence");
    }
    function setTimeout() {
        console.log("setTimeout");
    }
    function openCharacter() {
        console.log("openCharacter");
    }
    function startgame(_event) {
        console.log("startgame");
        let arraylength = chosenSequence.length;
        let letter = document.querySelector("div#board");
        letter.innerHTML = "";
        let randomArray = Math.floor(Math.random() * Math.floor(arraylength));
        // let letter: string = "";
        for (let i = 0; i > arraylength; i++) {
            console.log("for Loop");
            letter.innerHTML += chosenSequence[randomArray];
            // letter += chosenSequence[randomArray]
        }
        // document.getElementById("board").innerHTML = letter;
        // let x: number = _event.offsetX;
        // let y: number = _event.offsetY;
        // let mail: HTMLElement = <HTMLElement>_event.target;
        // let sequence: HTMLSpanElement = document.createElement("span");
        // sequence.appendChild(letter);
        // letter.textContent = chosenSequence[randomArray];
        // letter.style.left = x + "px";
        // letter.style.top = y + "px";
    }
})(memory || (memory = {}));
//# sourceMappingURL=Memory.js.map