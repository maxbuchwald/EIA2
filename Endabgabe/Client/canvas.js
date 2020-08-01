"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let updateIntervalId = 0;
    Endabgabe.arrayParticle = [];
    let objectDragDrop;
    let dragDrop = false;
    let size = 1;
    let colour = 1;
    Endabgabe.url = "http://localhost:5001";
    async function handleLoad(_event) {
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
        Endabgabe.canvas.addEventListener("mousedown", pickSymbol);
    }
    function setSize(_size) {
        size = _size;
    }
    function pickSymbol(_event) {
        // console.log("Mousedown");
        dragDrop = true;
        let offsetX = _event.clientX;
        let offsetY = _event.clientY;
        for (let particle of Endabgabe.arrayParticle) {
            if (particle.position.x - 15 < offsetX &&
                particle.position.x + 15 > offsetX &&
                particle.position.y - 15 < offsetY &&
                particle.position.y + 15 > offsetY) {
                let index = Endabgabe.arrayParticle.indexOf(particle);
                Endabgabe.arrayParticle.splice(index, 1);
                objectDragDrop = particle;
            }
            // console.log(arrayParticle);
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
        // crc2.clearRect(0, 0, canvas.width, canvas.height);
    }
    function dropParticle(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let particle = new Endabgabe.Particle(x, y, size, colour);
        Endabgabe.arrayParticle.push(particle);
        // console.log(arrayParticle);
    }
    function update(_background) {
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let particle of Endabgabe.arrayParticle) {
            particle.draw();
        }
        // moveparticle();
    }
    function chooseSizeCanvas(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "format1":
                Endabgabe.crc2.canvas.width = 1200;
                Endabgabe.crc2.canvas.height = 800;
                break;
            case "format2":
                Endabgabe.crc2.canvas.width = 800;
                Endabgabe.crc2.canvas.height = 600;
                break;
            case "format3":
                Endabgabe.crc2.canvas.width = 400;
                Endabgabe.crc2.canvas.height = 600;
                break;
        }
    }
    async function sendPicture(_event) {
        let name = prompt("Canvas Name");
        // console.log(name);
        if (name == null)
            return;
        let picture = {
            name: name,
            particle: Endabgabe.arrayParticle
        };
        let query = new URLSearchParams(picture);
        await fetch(Endabgabe.url + "/store?" + query.toString());
        console.log(Endabgabe.url);
        // console.log("name");
        // console.log(picture);
        // console.log("query:", query);
        // let response: Response = await fetch(url + "/save?" + query.toString());
        // let responseText: string = await response.text();
        // alert(responseText);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map