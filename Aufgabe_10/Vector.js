"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        size(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        // Geschwindigkeit zufällig berechnen & Richtung festlegen
        random(_minLength, _maxLength) {
            let length = _minLength = Math.random() * (_maxLength - _minLength);
            this.size(length);
        }
    }
    Aufgabe_10.Vector = Vector;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=Vector.js.map