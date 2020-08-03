"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Endabgabe.Vector = Vector;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Vector.js.map