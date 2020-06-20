"use strict";
var L08_Canvas_Alley;
(function (L08_Canvas_Alley) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawParticle({ x: 330, y: 600 }, { x: 800, y: 600 });
        drawHumancell({ x: 300, y: 300 });
        drawVirus({ x: 150, y: 250 });
        drawAnticell({ x: 140, y: 200 }, { x: 30, y: 35 });
    }
    function drawBackground() {
        // if (!canvas)
        //     return;
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "#DB8E7D";
        pattern.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawHumancell(_position) {
        // let grd = crc2.createRadialGradient(0, 0 , 200, 0, 0, 0);
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 40, 0, 2 * Math.PI);
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 40);
        gradient.addColorStop(0, "#ffffff00");
        gradient.addColorStop(1, "#2E9AFE");
        crc2.fillStyle = gradient;
        crc2.strokeStyle = "#58D3F7";
        crc2.lineWidth = 3;
        crc2.shadowOffsetX = 1;
        crc2.shadowOffsetY = 1;
        crc2.shadowBlur = 5;
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.save();
        crc2.restore();
    }
    function drawVirus(_position) {
        let radius = 35;
        crc2.save();
        crc2.beginPath();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, "#6E6E6E");
        gradient.addColorStop(1, "#7D182F");
        crc2.arc(_position.x, _position.y, radius, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        // crc2.translate(140, -110);
        // crc2.beginPath();
        // crc2.transform(1, 0.3, -0.3, 1, 0, 0);
        // crc2.strokeStyle = "#FF4000";
        // crc2.rotate(3 * Math.PI / 300);
        // crc2.lineJoin = "round";
        // crc2.moveTo(_position.x + 2, _position.y + 2);
        // crc2.lineTo(_position.x + 10, _position.y + 5);
        // crc2.lineTo(_position.x + 2, _position.y + 8);
        // crc2.lineWidth = 2;
        // crc2.stroke();
        // crc2.closePath();
    }
    function drawAnticell(_position, _size) {
        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -25);
        crc2.lineTo(0, -25);
        crc2.lineTo(-10, -35);
        crc2.moveTo(7, 0);
        crc2.lineTo(7, -25);
        crc2.lineTo(7, -25);
        crc2.lineTo(17, -35);
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
    function drawParticle(_position, _size) {
        console.log("particle", _position);
        let nParticle = 50;
        for (let d = 0; d < nParticle; d++) {
            crc2.save();
            let radiusParticle = ((Math.random() + 0.5) * 3);
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            gradient.addColorStop(0, "green");
            gradient.addColorStop(1, "grey");
            crc2.shadowColor = "black";
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 1;
            crc2.shadowBlur = 5;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Canvas_Alley || (L08_Canvas_Alley = {}));
//# sourceMappingURL=Aufgabe_08.js.map