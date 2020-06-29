namespace Aufgabe_10 {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;
    export let particles: Particle[] = [];
    export let viruses: Virus[] = [];
    export let humancell: Cell[] = [];
    export let updateIntervalId: number = 0;

    let moveables: Moveable[] = [];

    console.log(humancell);

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        drawParticle(40);

        drawHumancell(3);
        drawVirus(10);
        // drawAnticell({ x: 140, y: 200 }, { x: 30, y: 35 });

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);
        updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50

    }
    function drawBackground(): void {
        // if (!canvas)
        //     return;
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "#DB8E7D";
        pattern.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let rdm1: number = Math.random() * (33 - 27) + 27;
        let rdm2: number = Math.random() * (23 - 17) + 17;
        let rdm3: number = Math.random() * (13 - 7) + 7;
        pattern.moveTo(0, 10);
        pattern.lineTo(rdm3, 10);
        pattern.lineTo(rdm2, 0);
        pattern.lineTo(rdm1, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(rdm1, 20);
        pattern.lineTo(rdm2, 20);
        pattern.lineTo(rdm3, 10);
        pattern.stroke();
        // Math.floor(Math.random() * Math.floor(max))
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawParticle(_nparticle: number): void {

        for (let i: number = 0; i < _nparticle; i++) {
            let particle: Particle = new Particle();
            particles.push(particle);
        }
    }
    function drawVirus(_nvirus: number): void {
        for (let i: number = 0; i < _nvirus; i++) {
            let virus: Virus = new Virus();
            viruses.push(virus);
        }
    }
    function drawHumancell(_cell: number): void {
        for (let i: number = 0; i < _cell; i++) {
            let cell: Cell = new Cell();
            humancell.push(cell);
        }
    }

    function update(_background: ImageData): void {
        // console.log("update");
        crc2.putImageData(_background, 0, 0);


        for (let particle of particles) {
            particle.move();
            particle.draw();
        }
        for (let virus of viruses) {
            virus.move();
            virus.draw();
        }
        for (let cell of humancell) {
            cell.move();
            cell.draw();
        }
    }
}