"use strict";
var memory;
(function (memory) {
    let chosenSequence = ["A", "P", "F", "E", "L"];
    // let chosensequenceLength: number = chosenSequence.length;
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
        let i;
        for (i = 0; i > arraylength; i++) {
            let x = _event.offsetX;
            let y = _event.offsetY;
            let mail = _event.target;
            let letter = document.createElement("span");
            mail.appendChild(letter);
            let randomArray = Math.floor(Math.random() * Math.floor(arraylength));
            letter.textContent = chosenSequence[randomArray];
            letter.style.left = x + "px";
            letter.style.top = y + "px";
            console.log("for Looop");
        }
    }
})(memory || (memory = {}));
//# sourceMappingURL=Memory.js.map