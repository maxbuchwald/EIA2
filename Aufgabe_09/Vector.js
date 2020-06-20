"use strict";
var Aufgabe_09;
(function (Aufgabe_09) {
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
    Aufgabe_09.Vector = Vector;
})(Aufgabe_09 || (Aufgabe_09 = {}));
//# sourceMappingURL=Vector.js.map