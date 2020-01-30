"use strict";
var L02_Blackmailer;
(function (L02_Blackmailer) {
    let chosencharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        // console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosencharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        // console.log(_event);
        chosencharacter = _event.key;
    }
    function deleteLetter(_event) {
        // console.log(_event);
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_Blackmailer || (L02_Blackmailer = {}));
//# sourceMappingURL=Blackmailer.js.map