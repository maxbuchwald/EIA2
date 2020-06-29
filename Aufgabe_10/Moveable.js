"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Moveable {
    }
    Aufgabe_10.Moveable = Moveable;
    constructor();
    {
        let x = 800 * Math.random();
        let y = 600 * Math.random();
        this.position = new Aufgabe_10.Vector(x, y);
    }
    move();
    void {
        // console.log("move");
        let, temporaryVelocity: Aufgabe_10.Vector = this.velocity,
        // Geschwindigkeit & Richtung zu Positon addieren
        this: .position.add(temporaryVelocity),
        : .position.x < 0
    };
    {
        this.position.x += Aufgabe_10.crc2.canvas.width;
    }
    if (this.position.y < 0) {
        this.position.y += Aufgabe_10.crc2.canvas.height;
    }
    if (this.position.x > Aufgabe_10.crc2.canvas.width) {
        this.position.x -= Aufgabe_10.crc2.canvas.width;
    }
    if (this.position.y > Aufgabe_10.crc2.canvas.height) {
        this.position.y -= Aufgabe_10.crc2.canvas.height;
    }
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=Moveable.js.map