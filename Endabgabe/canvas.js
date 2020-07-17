"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let updateIntervalId = 0;
    Endabgabe.arrayParticle = [];
    function handleLoad(_event) {
        Endabgabe.canvas = document.querySelector("canvas");
        if (!Endabgabe.canvas)
            return;
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        let background = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50
        Endabgabe.canvas.addEventListener("click", dropParticle);
    }
    function dropParticle(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let particle = new Endabgabe.Particle(x, y);
        Endabgabe.arrayParticle.push(particle);
        particle.draw();
    }
    function update(_background) {
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let particle of Endabgabe.arrayParticle) {
            particle.move(1 / 50);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map