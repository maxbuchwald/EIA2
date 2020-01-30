"use strict";
var CharacterEditor;
(function (CharacterEditor) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        console.log("handleload");
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        // console.log(_event);
        let output = document.querySelector("div#output");
        output.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let attribut = document.querySelector("[value='" + entry[1] + "']");
            console.log(attribut);
            let info = Number(attribut.getAttribute("info"));
            console.log(info);
            output.innerHTML += attribut.name + " €" + info;
        }
    }
})(CharacterEditor || (CharacterEditor = {}));
//# sourceMappingURL=CharacterEditor.js.map