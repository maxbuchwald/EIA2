namespace Endabgabe {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let updateIntervalId: number = 0;
    export let arrayParticle: Particle[] = [];

    let size: number = 1;
    export let url: string = "http://localhost:5001";

    async function handleLoad(_event: Event): Promise<void> {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");

        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let background: ImageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        updateIntervalId = window.setInterval(update, 200, background); // ticks = 1000 / 20 = 50

        canvas.addEventListener("click", dropParticle);

        let smallRadioButton: HTMLInputElement = <HTMLInputElement>document.getElementById("small");
        smallRadioButton.addEventListener("change", () => setSize(1));

        let mediumRadioButton: HTMLInputElement = <HTMLInputElement>document.getElementById("medium");
        mediumRadioButton.addEventListener("change", () => setSize(2));

        let bigRadioButton: HTMLInputElement = <HTMLInputElement>document.getElementById("big");
        bigRadioButton.addEventListener("change", () => setSize(3));

        let clearCanvas: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearCanvas");
        clearCanvas.addEventListener("click", resetCanvas);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", chooseSizeCanvas);

        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
        submit.addEventListener("click", sendPicture);

        // showObjects();
    }

    function setSize(_size: number): void {
        size = _size;
    }

    // function showObjects(_objects: Particle[] = []): void {
    //     let datalist: HTMLDataListElement = <HTMLDataListElement>document.getElementById("objects");

    //     for (let objects of _objects) {

    //         let name: number = 0;
    //         name += 1;
    //         let value: string = name.toString();
    //         let object: HTMLOptionElement = document.createElement("option");
    //         object.value = value;
    //         datalist.appendChild(object);
    //     }

    // }

    function resetCanvas(): void {
        arrayParticle = [];
        // crc2.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dropParticle(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let particle: Particle = new Particle(x, y, size);
        arrayParticle.push(particle);
        console.log(arrayParticle);

    }

    function update(_background: ImageData): void {
        crc2.putImageData(_background, 0, 0);

        for (let particle of arrayParticle) {
            particle.changecolor(1 / 50);
            particle.draw();
        }
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
        console.log(name);

    
        let query: URLSearchParams = new URLSearchParams(<any>arrayParticle);
        console.log("name");
        console.log("query:", query);
        // let response: Response = await fetch(url + "/save?" + query.toString());
        // let responseText: string = await response.text();
        // alert(responseText);
    }

}

