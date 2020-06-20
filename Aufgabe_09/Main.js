"use strict";
var Aufgabe_09;
(function (Aufgabe_09) {
    window.addEventListener("load", handleLoad);
    Aufgabe_09.particles = [];
    Aufgabe_09.viruses = [];
    Aufgabe_09.humancell = [];
    Aufgabe_09.updateIntervalId = 0;
    console.log(Aufgabe_09.humancell);
    function handleLoad(_event) {
        Aufgabe_09.canvas = document.querySelector("canvas");
        if (!Aufgabe_09.canvas)
            return;
        Aufgabe_09.crc2 = Aufgabe_09.canvas.getContext("2d");
        drawBackground();
        drawParticle(40);
        drawHumancell(3);
        drawVirus(10);
        // drawAnticell({ x: 140, y: 200 }, { x: 30, y: 35 });
        let background = Aufgabe_09.crc2.getImageData(0, 0, 800, 600);
        Aufgabe_09.updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50
    }
    function drawBackground() {
        // if (!canvas)
        //     return;
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "#DB8E7D";
        pattern.fillRect(0, 0, Aufgabe_09.crc2.canvas.width, Aufgabe_09.crc2.canvas.height);
        let rdm1 = Math.random() * (33 - 27) + 27;
        let rdm2 = Math.random() * (23 - 17) + 17;
        let rdm3 = Math.random() * (13 - 7) + 7;
        pattern.moveTo(0, 10);
        pattern.lineTo(rdm3, 10);
        pattern.lineTo(rdm2, 0);
        pattern.lineTo(rdm1, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(rdm1, 20);
        pattern.lineTo(rdm2, 20);
        pattern.lineTo(rdm3, 10);
        pattern.stroke();
        // Math.floor(Math.random() * Math.floor(max))
        Aufgabe_09.crc2.fillStyle = Aufgabe_09.crc2.createPattern(pattern.canvas, "repeat");
        Aufgabe_09.crc2.fillRect(0, 0, Aufgabe_09.crc2.canvas.width, Aufgabe_09.crc2.canvas.height);
    }
    function drawParticle(_nparticle) {
        for (let i = 0; i < _nparticle; i++) {
            let particle = new Aufgabe_09.Particle();
            Aufgabe_09.particles.push(particle);
        }
    }
    function drawVirus(_nvirus) {
        for (let i = 0; i < _nvirus; i++) {
            let virus = new Aufgabe_09.Virus();
            Aufgabe_09.viruses.push(virus);
        }
    }
    function drawHumancell(_cell) {
        for (let i = 0; i < _cell; i++) {
            let cell = new Aufgabe_09.Cell();
            Aufgabe_09.humancell.push(cell);
        }
    }
    function update(_background) {
        // console.log("update");
        Aufgabe_09.crc2.putImageData(_background, 0, 0);
        for (let particle of Aufgabe_09.particles) {
            particle.move();
            particle.draw();
        }
        for (let virus of Aufgabe_09.viruses) {
            virus.move();
            virus.draw();
        }
        for (let cell of Aufgabe_09.humancell) {
            cell.move();
            cell.draw();
        }
    }
})(Aufgabe_09 || (Aufgabe_09 = {}));
//# sourceMappingURL=Main.js.map