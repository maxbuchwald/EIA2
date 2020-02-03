namespace test_08 {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    crc2.fillStyle = "FF1280";
    crc2.fillRect(0, 0, 100, 200);
    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();
}