"use strict";
class Vector {
    constructor(_x, _y) {
        this.set(_x, _y);
    }
    set(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    scale(_factor) {
        this.x *= _factor;
        this.y *= _factor;
    }
    add(_addend) {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}
class Moveable {
    constructor(_position) {
        // console.log("Moveable constructor");
        this.expendable = false;
        if (_position)
            this.position = _position.copy();
        else
            this.position = new Vector(0, 0);
        this.velocity = new Vector(0, 0);
    }
}
let m = new Moveable();
console.log(m);
//# sourceMappingURL=Test.js.map