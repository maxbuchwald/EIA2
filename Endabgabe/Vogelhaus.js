"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    window.addEventListener("load", handleLoad);
    Vogelhaus.snowflakes = [];
    Vogelhaus.birds = [];
    Vogelhaus.arrayFood = [];
    Vogelhaus.snowballs = [];
    Vogelhaus.snowballsLeft = 20;
    Vogelhaus.foodLeft = 3;
    Vogelhaus.points = 0;
    Vogelhaus.updateIntervalId = 0;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Vogelhaus.crc2 = canvas.getContext("2d");
        drawBackground1();
        drawBackground2();
        drawSun(new Vogelhaus.Vector(50, 50));
        drawCloud(new Vogelhaus.Vector(320, 125), new Vogelhaus.Vector(200, 50));
        drawMountains();
        drawCloud(new Vogelhaus.Vector(600, 150), new Vogelhaus.Vector(200, 50));
        drawTree(new Vogelhaus.Vector(730, 230));
        drawTree(new Vogelhaus.Vector(580, 250));
        drawTree(new Vogelhaus.Vector(660, 260));
        drawTree(new Vogelhaus.Vector(780, 320));
        drawTree(new Vogelhaus.Vector(630, 350));
        drawSnowman(new Vogelhaus.Vector(700, 550));
        drawBirdhouse(new Vogelhaus.Vector(50, 500));
        drawSnowflakes(150);
        drawBirds(10);
        // Events
        canvas.addEventListener("click", throwSnowball);
        window.addEventListener("keydown", keypress);
        // Update
        let background = Vogelhaus.crc2.getImageData(0, 0, 800, 600);
        Vogelhaus.updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50
    }
    function keypress(_event) {
        // Space event
        if (_event.key === " ") {
            throwFood(_event);
            return;
        }
    }
    function printInfo() {
        let spanSnowballsLeft = document.getElementById("snowballsLeft");
        let spanFoodLeft = document.getElementById("foodLeft");
        let spanPoints = document.getElementById("points");
        if (spanSnowballsLeft) {
            spanSnowballsLeft.innerHTML = Vogelhaus.snowballsLeft.toString();
        }
        if (spanFoodLeft) {
            spanFoodLeft.innerHTML = Vogelhaus.foodLeft.toString();
        }
        if (spanPoints) {
            spanPoints.innerHTML = Vogelhaus.points.toString();
        }
    }
    Vogelhaus.printInfo = printInfo;
    function drawBackground1() {
        let gradient = Vogelhaus.crc2.createLinearGradient(0, 0, 0, Vogelhaus.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(196, 80%, 82%)");
        gradient.addColorStop(0.5, "HSL(5, 10%, 99%)");
        Vogelhaus.crc2.fillStyle = gradient;
        Vogelhaus.crc2.fillRect(0, 0, Vogelhaus.crc2.canvas.width, 330);
    }
    function drawBackground2() {
        let gradient = Vogelhaus.crc2.createLinearGradient(0, 0, 0, Vogelhaus.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(196, 74%, 82%)");
        gradient.addColorStop(0.7, "HSL(121, 42%, 60%)");
        gradient.addColorStop(0.9, "HSL(121, 34%, 52%)");
        Vogelhaus.crc2.fillStyle = gradient;
        Vogelhaus.crc2.fillRect(0, 330, Vogelhaus.crc2.canvas.width, 600);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 15;
        let r2 = 60;
        let gradient = Vogelhaus.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(70, 100%, 50%, 0)");
        Vogelhaus.crc2.save();
        Vogelhaus.crc2.translate(_position.x, _position.y);
        Vogelhaus.crc2.fillStyle = gradient;
        Vogelhaus.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.restore();
    }
    function drawCloud(_position, _size) {
        let nParticles = 40;
        let radiusParticle = 25;
        let particle = new Path2D();
        let gradient = Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        Vogelhaus.crc2.save();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        Vogelhaus.crc2.translate(_position.x, _position.y);
        Vogelhaus.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            Vogelhaus.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            Vogelhaus.crc2.translate(x, y);
            Vogelhaus.crc2.fill(particle);
            Vogelhaus.crc2.restore();
        }
        Vogelhaus.crc2.restore();
    }
    function drawMountains() {
        // Weiße Fläche Berg Links
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(0, 330);
        Vogelhaus.crc2.lineTo(0, 225);
        Vogelhaus.crc2.lineTo(125, 100);
        Vogelhaus.crc2.lineTo(175, 330);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fillStyle = "#F1F7FA";
        Vogelhaus.crc2.fill();
        // Weiße Fläche Berg Mitte
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(400, 100);
        Vogelhaus.crc2.lineTo(275, 250);
        Vogelhaus.crc2.lineTo(250, 225);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fillStyle = "#F1F7FA";
        Vogelhaus.crc2.fill();
        // Weiße Fläche Berg Rechts
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(525, 300);
        Vogelhaus.crc2.lineTo(600, 100);
        Vogelhaus.crc2.lineTo(400, 300);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fillStyle = "#F1F7FA";
        Vogelhaus.crc2.fill();
        // Graue Fläche Berg
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(125, 100);
        Vogelhaus.crc2.lineTo(75, 330);
        Vogelhaus.crc2.lineTo(800, 330);
        Vogelhaus.crc2.lineTo(800, 225);
        Vogelhaus.crc2.lineTo(600, 100);
        Vogelhaus.crc2.lineTo(525, 300);
        Vogelhaus.crc2.lineTo(400, 100);
        Vogelhaus.crc2.lineTo(275, 250);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fillStyle = "#ABABAB";
        Vogelhaus.crc2.fill();
    }
    function drawTree(_position) {
        Vogelhaus.crc2.save();
        Vogelhaus.crc2.translate(_position.x, _position.y);
        //Bäume
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(0, 20);
        Vogelhaus.crc2.lineTo(30, 120);
        Vogelhaus.crc2.lineTo(-30, 120);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fillStyle = "#165118";
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(0, 0);
        Vogelhaus.crc2.lineTo(30, 100);
        Vogelhaus.crc2.lineTo(-30, 100);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.stroke();
        Vogelhaus.crc2.fillStyle = "#165118";
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(0, 120);
        Vogelhaus.crc2.lineTo(5, 120);
        Vogelhaus.crc2.lineTo(5, 145);
        Vogelhaus.crc2.lineTo(-5, 145);
        Vogelhaus.crc2.lineTo(-5, 120);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fillStyle = "#512b1d";
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.restore();
    }
    function drawBirdhouse(_position) {
        Vogelhaus.crc2.save();
        Vogelhaus.crc2.translate(_position.x, _position.y);
        // Pfahl
        Vogelhaus.crc2.fillStyle = "brown";
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.fillRect(5, 0, 10, 100);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fill();
        // 5eck
        Vogelhaus.crc2.fillStyle = "brown";
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(-30, 0);
        Vogelhaus.crc2.lineTo(50, 0);
        Vogelhaus.crc2.lineTo(50, -50);
        Vogelhaus.crc2.lineTo(10, -70);
        Vogelhaus.crc2.lineTo(-30, -50);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fill();
        //Dach
        Vogelhaus.crc2.fillStyle = "white";
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.moveTo(55, -45);
        Vogelhaus.crc2.lineTo(55, -55);
        Vogelhaus.crc2.lineTo(10, -80);
        Vogelhaus.crc2.lineTo(-35, -55);
        Vogelhaus.crc2.lineTo(-35, -45);
        Vogelhaus.crc2.lineTo(10, -70);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fill();
        // Eingang
        Vogelhaus.crc2.fillStyle = "white";
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.arc(10, -30, 10, 0, 2 * Math.PI);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.restore();
    }
    function drawSnowman(_position) {
        let r1 = 20;
        let r2 = 35;
        let r3 = 50;
        let color = "white";
        Vogelhaus.crc2.save();
        Vogelhaus.crc2.translate(_position.x, _position.y);
        Vogelhaus.crc2.fillStyle = color;
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.arc(0, -80, r2, 0, 2 * Math.PI);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.beginPath();
        Vogelhaus.crc2.arc(0, -130, r1, 0, 2 * Math.PI);
        Vogelhaus.crc2.closePath();
        Vogelhaus.crc2.fill();
        Vogelhaus.crc2.restore();
    }
    function throwSnowball(_event) {
        if (Vogelhaus.snowballsLeft === 0) {
            return;
        }
        console.log("throwSnowball");
        let x = _event.clientX;
        let y = _event.clientY;
        let ball = new Vogelhaus.Snowball(x, y);
        Vogelhaus.snowballs.push(ball);
        Vogelhaus.snowballsLeft--;
    }
    function drawBirds(nbirds) {
        console.log("createBirds");
        for (let i = 0; i < nbirds; i++) {
            let bird = new Vogelhaus.Bird();
            Vogelhaus.birds.push(bird);
        }
    }
    function drawSnowflakes(nSnowflakes) {
        console.log("Schneeflocken");
        for (let i = 0; i < nSnowflakes; i++) {
            let snowflake = new Vogelhaus.Snowflake();
            Vogelhaus.snowflakes.push(snowflake);
        }
    }
    function throwFood(_event) {
        if (Vogelhaus.foodLeft === 0) {
            return;
        }
        let food = new Vogelhaus.Food(400, 480, 40, 40);
        Vogelhaus.arrayFood.push(food);
        Vogelhaus.foodLeft--;
        // Solange keine Schneebälle im Flug sind, nicht überprüfen da Schneebälle selbst überprüfen
        if (Vogelhaus.snowballs.length === 0) {
            Vogelhaus.checkForEndGame();
        }
    }
    function update(_background) {
        // console.log("updated");
        Vogelhaus.crc2.putImageData(_background, 0, 0);
        for (let snowflake of Vogelhaus.snowflakes) {
            snowflake.move();
            snowflake.draw();
        }
        // Food
        for (let i = 0; i < Vogelhaus.arrayFood.length; i++) {
            Vogelhaus.arrayFood[i].draw();
        }
        // Birds
        for (let bird of Vogelhaus.birds) {
            bird.move(1 / 50);
            bird.draw();
        }
        // Snowflakes
        for (let i = 0; i < Vogelhaus.snowballs.length; i++) {
            Vogelhaus.snowballs[i].draw();
        }
        printInfo();
    }
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Vogelhaus.js.map