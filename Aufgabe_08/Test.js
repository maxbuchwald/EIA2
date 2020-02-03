"use strict";
var test_08;
(function (test_08) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "FF1280";
    crc2.fillRect(0, 0, 100, 200);
    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();
})(test_08 || (test_08 = {}));
//# sourceMappingURL=Test.js.map