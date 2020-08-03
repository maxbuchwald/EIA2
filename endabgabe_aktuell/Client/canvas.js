"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let updateIntervalId = 0;
    Endabgabe.arrayParticle = [];
    let size = 1;
    let colour = 1;
    Endabgabe.url = "https://eia-repository-mb.herokuapp.com/";
    let move = false;
    function handleLoad() {
        Endabgabe.canvas = document.querySelector("canvas");
        if (!Endabgabe.canvas)
            return;
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        let background = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        updateIntervalId = window.setInterval(update, 150, background);
        Endabgabe.canvas.addEventListener("click", dropParticle);
        // Size Radio Buttons
        let smallRadioButton = document.getElementById("small");
        smallRadioButton.addEventListener("change", () => setSize(1));
        let mediumRadioButton = document.getElementById("medium");
        mediumRadioButton.addEventListener("change", () => setSize(2));
        let bigRadioButton = document.getElementById("big");
        bigRadioButton.addEventListener("change", () => setSize(3));
        // Colour Radio Buttons
        let colour1Radiobutton = document.getElementById("colour1");
        colour1Radiobutton.addEventListener("change", () => setcolour(1));
        let colour2Radiobutton = document.getElementById("colour2");
        colour2Radiobutton.addEventListener("change", () => setcolour(2));
        let colour3Radiobutton = document.getElementById("colour3");
        colour3Radiobutton.addEventListener("change", () => setcolour(3));
        // Clear Canvas Button
        let clearCanvas = document.getElementById("clearCanvas");
        clearCanvas.addEventListener("click", resetCanvas);
        let form = document.querySelector("div#form");
        form.addEventListener("change", chooseSizeCanvas);
        let submit = document.getElementById("submit");
        submit.addEventListener("click", sendPicture);
        let load = document.getElementById("load");
        load.addEventListener("click", loadPicture);
        Endabgabe.canvas.addEventListener("mousedown", pickSymbol);
        // Move Button
        let moveButton = document.getElementById("move");
        moveButton.addEventListener("click", () => { move = true; });
        let stopMoveButton = document.getElementById("stopMove");
        stopMoveButton.addEventListener("click", () => { move = false; });
        showSavings();
    }
    function setSize(_size) {
        size = _size;
    }
    function pickSymbol(_event) {
        let offsetX = _event.clientX;
        let offsetY = _event.clientY;
        for (let particle of Endabgabe.arrayParticle) {
            if (particle.position.x - 15 < offsetX &&
                particle.position.x + 15 > offsetX &&
                particle.position.y - 15 < offsetY &&
                particle.position.y + 15 > offsetY) {
                let index = Endabgabe.arrayParticle.indexOf(particle);
                Endabgabe.arrayParticle.splice(index, 1);
            }
        }
    }
    function setcolour(_colour) {
        colour = _colour;
        for (let particle of Endabgabe.arrayParticle) {
            particle.changecolor();
        }
    }
    function resetCanvas() {
        Endabgabe.arrayParticle = [];
    }
    function dropParticle(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let particle = new Endabgabe.Particle(x, y, size, colour);
        Endabgabe.arrayParticle.push(particle);
    }
    function update(_background) {
        Endabgabe.crc2.putImageData(_background, 0, 0);
        if (move == true) {
            for (let particle of Endabgabe.arrayParticle) {
                particle.move();
            }
        }
        for (let particle of Endabgabe.arrayParticle) {
            particle.draw();
        }
    }
    function chooseSizeCanvas(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "format1":
                Endabgabe.crc2.canvas.width = 1000;
                Endabgabe.crc2.canvas.height = 600;
                break;
            case "format2":
                Endabgabe.crc2.canvas.width = 700;
                Endabgabe.crc2.canvas.height = 500;
                break;
            case "format3":
                Endabgabe.crc2.canvas.width = 600;
                Endabgabe.crc2.canvas.height = 400;
                break;
        }
    }
    async function sendPicture() {
        let name = prompt("Canvas Name");
        if (name == "") {
            alert("please enter name");
            return;
        }
        let picture = {
            name: name,
            // URLSearchParams erwartet eine key value pair mit jeweils strings somit muss dass particle array zu einem string konvertiert werden
            particle: JSON.stringify(Endabgabe.arrayParticle)
        };
        let query = new URLSearchParams(picture);
        await fetch(Endabgabe.url + "/save?" + query.toString());
        alert("Picture saved!");
    }
    async function loadPicture() {
        let name = prompt("Canvas Name");
        if (name == null) {
            return;
        }
        let searchParams = {
            name: name
        };
        let query = new URLSearchParams(searchParams);
        let response = await fetch(Endabgabe.url + "/load?" + query.toString());
        // das Response objekt gibt mit der json funktion den inhalt der antwort als json zurück
        let responseJson = await response.json();
        if (responseJson == null) {
            alert("Canvas does not exist");
            return;
        }
        // rohe partikel in array form
        let particlesRaw = JSON.parse(responseJson.particle);
        resetCanvas();
        console.log(particlesRaw);
        for (let particle of particlesRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newParticle = new Endabgabe.Particle(particle.position.x, particle.position.y, particle.size, particle.colour);
            Endabgabe.arrayParticle.push(newParticle);
        }
    }
    async function showSavings() {
        let response = await fetch(Endabgabe.url + "/read");
        let texte = await response.text();
        let savings = JSON.parse(texte);
        for (let i = 0; i < savings.length; i++) {
            let name = savings[i];
            let tdName = "<li>" + name + "</li>";
            let tablesavingsBody = document.getElementById("tableSavingsBody");
            tablesavingsBody.innerHTML += tdName;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map