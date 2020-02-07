namespace Vogelhaus {


    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let snowflakes: Snowflake[] = [];
    let birds: Bird[] = [];
    // let arrayFood: Food[] = [];
    let snowballs: Snowball[] = [];




    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        drawBackground1();
        drawBackground2();
        drawSun(new Vector(50, 50));
        drawCloud(new Vector(320, 125), new Vector(200, 50));
        drawMountains();
        drawCloud(new Vector(600, 150), new Vector(200, 50));
        drawTree(new Vector(730, 230));
        drawTree(new Vector(580, 250));
        drawTree(new Vector(660, 260));
        drawTree(new Vector(780, 320));
        drawTree(new Vector(630, 350));

        drawSnowman(new Vector(700, 550));
        drawBirdhouse(new Vector(50, 500));

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

        drawSnowflakes(150);
        drawBirds(10);

        canvas.addEventListener("click", throwSnowball);

        // canvas.addEventListener("Alt", throwFood);




        window.setInterval(update, 20, background);
    }


    function drawBackground1(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(196, 80%, 82%)");
        gradient.addColorStop(0.5, "HSL(5, 10%, 99%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 330);
    }

    function drawBackground2(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(196, 74%, 82%)");
        gradient.addColorStop(0.7, "HSL(121, 42%, 60%)");
        gradient.addColorStop(0.9, "HSL(121, 34%, 52%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 330, crc2.canvas.width, 600);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 15;
        let r2: number = 60;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(70, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 40;
        let radiusParticle: number = 25;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }
        crc2.restore();
    }
    function drawMountains(): void {
        // Weiße Fläche Berg Links
        crc2.beginPath();
        crc2.moveTo(0, 330);
        crc2.lineTo(0, 225);
        crc2.lineTo(125, 100);
        crc2.lineTo(175, 330);
        crc2.closePath();
        crc2.fillStyle = "#F1F7FA";
        crc2.fill();

        // Weiße Fläche Berg Mitte
        crc2.beginPath();
        crc2.moveTo(400, 100);
        crc2.lineTo(275, 250);
        crc2.lineTo(250, 225);
        crc2.closePath();
        crc2.fillStyle = "#F1F7FA";
        crc2.fill();

        // Weiße Fläche Berg Rechts
        crc2.beginPath();
        crc2.moveTo(525, 300);
        crc2.lineTo(600, 100);
        crc2.lineTo(400, 300);
        crc2.closePath();
        crc2.fillStyle = "#F1F7FA";
        crc2.fill();

        // Graue Fläche Berg
        crc2.beginPath();
        crc2.moveTo(125, 100);
        crc2.lineTo(75, 330);
        crc2.lineTo(800, 330);
        crc2.lineTo(800, 225);
        crc2.lineTo(600, 100);
        crc2.lineTo(525, 300);
        crc2.lineTo(400, 100);
        crc2.lineTo(275, 250);
        crc2.closePath();
        crc2.fillStyle = "#ABABAB";
        crc2.fill();
    }

    function drawTree(_position: Vector): void {



        crc2.save();
        crc2.translate(_position.x, _position.y);

        //Bäume
        crc2.beginPath();
        crc2.moveTo(0, 20);
        crc2.lineTo(30, 120);
        crc2.lineTo(- 30, 120);
        crc2.closePath();
        crc2.fillStyle = "#165118";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(30, 100);
        crc2.lineTo(- 30, 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#165118";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 120);
        crc2.lineTo(5, 120);
        crc2.lineTo(5, 145);
        crc2.lineTo(- 5, 145);
        crc2.lineTo(- 5, 120);
        crc2.closePath();
        crc2.fillStyle = "#512b1d";
        crc2.fill();

        crc2.restore();
    }

    function drawBirdhouse(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);


        // Pfahl
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.fillRect(5, 0, 10, 100);
        crc2.closePath();
        crc2.fill();


        // 5eck
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.moveTo(-30, 0);
        crc2.lineTo(50, 0);
        crc2.lineTo(50, -50);
        crc2.lineTo(10, -70);
        crc2.lineTo(-30, -50);
        crc2.closePath();
        crc2.fill();

        //Dach

        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.moveTo(55, -45);
        crc2.lineTo(55, -55);
        crc2.lineTo(10, - 80);
        crc2.lineTo(-35, - 55);
        crc2.lineTo(-35, - 45);
        crc2.lineTo(10, - 70);
        crc2.closePath();
        crc2.fill();

        // Eingang
        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.arc(10, - 30, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.restore();

    }

    function drawSnowman(_position: Vector): void {

        let r1: number = 20;
        let r2: number = 35;
        let r3: number = 50;
        let color: string = "white";

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(0, -80, r2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(0, -130, r1, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.restore();

    }

    // function throwSnowball(_event: MouseEvent): void {
    //     console.log("throwSnowball");
    //     let x: number = _event.clientX;
    //     let y: number = _event.clientY;
    //     let ball: Snowball = new Snowball(x, y);
    //     ball.x = x;
    //     ball.y = y;
    //     ball.timer = 25;
    //     snowballs.push(ball);
    // }

    function drawBirds(nbirds: number): void {
        console.log("createBirds");

        for (let i: number = 0; i < nbirds; i++) {
            let bird: Bird = new Bird();
            birds.push(bird);
        }
    }

    function drawSnowflakes(nSnowflakes: number): void {
        console.log("Schneeflocken");

        for (let i: number = 0; i < nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflakes.push(snowflake);
        }
    }

    function update(_background: ImageData): void {
        // console.log("updated");
        crc2.putImageData(_background, 0, 0);

        for (let snowflake of snowflakes) {
            snowflake.move();
            snowflake.draw();
        }

        for (let bird of birds) {
            bird.move(1 / 50);
            bird.draw();
        }

        for (let i: number = 0; i < snowballs.length; i++) {
            if (snowballs[i].timer > 0) {
                snowballs[i].draw();
            }
        // for (let i: number = 0; i < arrayFood.length; i++) {
        //     //arrayFood[i].move();
        //     arrayFood[i].draw();
        // }
    }

    // function throwFood(_event: KeyboardEvent): void {

    //     console.log("throwFood");


    //     let food: Food = new Food(30 , 20);

    //     arrayFood.push(food);

    // }
}


