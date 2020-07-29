"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let updateIntervalId = 0;
    Endabgabe.arrayParticle = [];
    let size = 1;
    Endabgabe.url = "http://localhost:5001";
    async function handleLoad(_event) {
        Endabgabe.canvas = document.querySelector("canvas");
        if (!Endabgabe.canvas)
            return;
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        let background = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        updateIntervalId = window.setInterval(update, 200, background); // ticks = 1000 / 20 = 50
        Endabgabe.canvas.addEventListener("click", dropParticle);
        let smallRadioButton = document.getElementById("small");
        smallRadioButton.addEventListener("change", () => setSize(1));
        let mediumRadioButton = document.getElementById("medium");
        mediumRadioButton.addEventListener("change", () => setSize(2));
        let bigRadioButton = document.getElementById("big");
        bigRadioButton.addEventListener("change", () => setSize(3));
        let clearCanvas = document.getElementById("clearCanvas");
        clearCanvas.addEventListener("click", resetCanvas);
        let form = document.querySelector("div#form");
        form.addEventListener("change", chooseSizeCanvas);
        let submit = document.getElementById("submit");
        submit.addEventListener("click", sendPicture);
        // showObjects();
    }
    function setSize(_size) {
        size = _size;
    }
    // function showObjects(_objects: Particle[] = []): void {
    //     let datalist: HTMLDataListElement = <HTMLDataListElement>document.getElementById("objects");
    //     for (let objects of _objects) {
    //         let name: number = 0;
    //         name += 1;
    //         let value: string = name.toString();
    //         let object: HTMLOptionElement = document.createElement("option");
    //         object.value = value;
    //         datalist.appendChild(object);
    //     }
    // }
    function resetCanvas() {
        Endabgabe.arrayParticle = [];
        // crc2.clearRect(0, 0, canvas.width, canvas.height);
    }
    function dropParticle(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let particle = new Endabgabe.Particle(x, y, size);
        Endabgabe.arrayParticle.push(particle);
        console.log(Endabgabe.arrayParticle);
    }
    function update(_background) {
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let particle of Endabgabe.arrayParticle) {
            particle.changecolor(1 / 50);
            particle.draw();
        }
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
        console.log(name);
        let query = new URLSearchParams(Endabgabe.arrayParticle);
        console.log("name");
        console.log("query:", query);
        // let response: Response = await fetch(url + "/save?" + query.toString());
        // let responseText: string = await response.text();
        // alert(responseText);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map