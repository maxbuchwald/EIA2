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
        // let mail: HTMLElement = <HTMLElement>_event.target;
        // let letter: HTMLSpanElement = document.createElement("span");
        // mail.appendChild(letter);
        // letter.textContent = chosenSequence;
        console.log(mail);
    }
})(memory || (memory = {}));
//# sourceMappingURL=Memory.js.map