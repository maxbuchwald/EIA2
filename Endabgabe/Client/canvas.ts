namespace Endabgabe {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let updateIntervalId: number = 0;
    export let arrayParticle: Particle[] = [];

    let objectDragDrop: Particle;
    let dragDrop: boolean = false;
    let size: number = 1;
    let colour: number = 1;
    export let url: string = "http://localhost:5001";

    async function handleLoad(_event: Event): Promise<void> {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");

        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let background: ImageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        updateIntervalId = window.setInterval(update, 150, background);

        canvas.addEventListener("click", dropParticle);

        // Size Radio Buttons
        let smallRadioButton: HTMLInputElement = <HTMLInputElement>document.getElementById("small");
        smallRadioButton.addEventListener("change", () => setSize(1));

        let mediumRadioButton: HTMLInputElement = <HTMLInputElement>document.getElementById("medium");
        mediumRadioButton.addEventListener("change", () => setSize(2));

        let bigRadioButton: HTMLInputElement = <HTMLInputElement>document.getElementById("big");
        bigRadioButton.addEventListener("change", () => setSize(3));


        // Colour Radio Buttons
        let colour1Radiobutton: HTMLInputElement = <HTMLInputElement>document.getElementById("colour1");
        colour1Radiobutton.addEventListener("change", () => setcolour(1));

        let colour2Radiobutton: HTMLInputElement = <HTMLInputElement>document.getElementById("colour2");
        colour2Radiobutton.addEventListener("change", () => setcolour(2));

        let colour3Radiobutton: HTMLInputElement = <HTMLInputElement>document.getElementById("colour3");
        colour3Radiobutton.addEventListener("change", () => setcolour(3));

        // Clear Canvas Button
        let clearCanvas: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearCanvas");
        clearCanvas.addEventListener("click", resetCanvas);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", chooseSizeCanvas);

        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
        submit.addEventListener("click", sendPicture);

        canvas.addEventListener("mousedown", pickSymbol);

    }

    function setSize(_size: number): void {
        size = _size;
    }

    function pickSymbol(_event: MouseEvent): void {
        // console.log("Mousedown");

        dragDrop = true;

        let offsetX: number = _event.clientX;
        let offsetY: number = _event.clientY;

        for (let particle of arrayParticle) {

            if (particle.position.x - 15 < offsetX &&
                particle.position.x + 15 > offsetX &&
                particle.position.y - 15 < offsetY &&
                particle.position.y + 15 > offsetY) {
                let index: number = arrayParticle.indexOf(particle);
                arrayParticle.splice(index, 1);
                objectDragDrop = particle;
            }
            // console.log(arrayParticle);

        }
    }

    function setcolour(_colour: number): void {
        colour = _colour;
        for (let particle of arrayParticle) {
            particle.changecolor();
        }
    }

    function resetCanvas(): void {
        arrayParticle = [];
        // crc2.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dropParticle(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let particle: Particle = new Particle(x, y, size, colour);
        arrayParticle.push(particle);
        // console.log(arrayParticle);

    }

    function update(_background: ImageData): void {
        crc2.putImageData(_background, 0, 0);

        for (let particle of arrayParticle) {
            particle.draw();
        }
        // moveparticle();
    }

    function chooseSizeCanvas(_event: Event): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        switch (id) {

            case "format1":
                crc2.canvas.width = 1200;
                crc2.canvas.height = 800;
                break;

            case "format2":
                crc2.canvas.width = 800;
                crc2.canvas.height = 600;
                break;

            case "format3":
                crc2.canvas.width = 400;
                crc2.canvas.height = 600;
                break;

        }
    }

    async function sendPicture(_event: Event): Promise<void> {

        let name: string | null = prompt("Canvas Name");
        // console.log(name);

        if (name == null)
            return;

        let picture: any = {
            name: name,
            particle: arrayParticle
        };

        let query: URLSearchParams = new URLSearchParams(<any>picture);
        await fetch(url + "/store?" + query.toString());
        console.log(url);

        // console.log("name");
        // console.log(picture);
        // console.log("query:", query);
        // let response: Response = await fetch(url + "/save?" + query.toString());
        // let responseText: string = await response.text();
        // alert(responseText);
    }

}

