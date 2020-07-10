namespace Endabgabe {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    // let updateIntervalId: number = 0;
    export let arrayParticle: Particle[] = [];



    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // let background: ImageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        // updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50


        canvas.addEventListener("click", dropParticle);
    }

    function dropParticle(_event: MouseEvent): void {

        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let particle: Particle = new Particle(x, y, 30, 30);
        console.log(particle);
        arrayParticle.push(particle);
        particle.draw();

    }
    // function update(_background: ImageData): void {
    //     crc2.putImageData(_background, 0, 0);

    //     for ( let particle of arrayParticle) {
    //         particle.draw();
    //     }
    // }
}

