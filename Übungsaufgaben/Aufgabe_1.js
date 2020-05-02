"use strict";
let i;
let s = "";
for (i = 1; i < 11; i++) {
    let a = random(5, 20);
    s += a + "\t";
}
console.log(s);
function random(_min, _max) {
    return Math.floor(Math.random() * (_max - _min) + _min);
}
//https://github.com/Plagiatus/EIA/blob/master/Aufgaben.md
//# sourceMappingURL=Aufgabe_1.js.map