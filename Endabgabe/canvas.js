"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    // let updateIntervalId: number = 0;
    Endabgabe.arrayParticle = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        Endabgabe.crc2 = canvas.getContext("2d");
        // let background: ImageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        // updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50
        canvas.addEventListener("click", dropParticle);
    }
    function dropParticle(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let particle = new Endabgabe.Particle(x, y, 30, 30);
        console.log(particle);
        Endabgabe.arrayParticle.push(particle);
        particle.draw();
    }
    // function update(_background: ImageData): void {
    //     crc2.putImageData(_background, 0, 0);
    //     for ( let particle of arrayParticle) {
    //         particle.draw();
    //     }
    // }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map