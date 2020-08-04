namespace Endabgabe {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let updateIntervalId: number = 0;
    export let arrayParticle: Particle[] = [];

    let size: number = 1;
    let colour: number = 1;
    export let url: string = "http://localhost:5001";

    let move: boolean = false;

    function handleLoad(): void {
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

        let load: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load");
        load.addEventListener("click", loadPicture);

        canvas.addEventListener("mousedown", pickSymbol);


        // Move Button
        let moveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("move");
        moveButton.addEventListener("click", () => { move = true; });
        let stopMoveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("stopMove");
        stopMoveButton.addEventListener("click", () => { move = false; });

        showSavings();
    }

    function setSize(_size: number): void {
        size = _size;
    }

    function pickSymbol(_event: MouseEvent): void {


        let offsetX: number = _event.clientX;
        let offsetY: number = _event.clientY;

        for (let particle of arrayParticle) {

            if (particle.position.x - 15 < offsetX &&
                particle.position.x + 15 > offsetX &&
                particle.position.y - 15 < offsetY &&
                particle.position.y + 15 > offsetY) {
                let index: number = arrayParticle.indexOf(particle);
                arrayParticle.splice(index, 1);
            }
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
    }

    function dropParticle(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let particle: Particle = new Particle(x, y, size, colour);
        arrayParticle.push(particle);
    }

    function update(_background: ImageData): void {
        crc2.putImageData(_background, 0, 0);

        if (move == true) {
            for (let particle of arrayParticle) {
                particle.move();
            }
        }
        for (let particle of arrayParticle) {
            particle.draw();
        }
    }

    function chooseSizeCanvas(_event: Event): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        switch (id) {

            case "format1":
                crc2.canvas.width = 1000;
                crc2.canvas.height = 600;
                break;

            case "format2":
                crc2.canvas.width = 700;
                crc2.canvas.height = 500;
                break;

            case "format3":
                crc2.canvas.width = 600;
                crc2.canvas.height = 400;
                break;

        }
    }

    async function sendPicture(): Promise<void> {
        let name: string | null = prompt("Canvas Name");

        if (name == "") {
            alert("please enter name");
            return;
        }

        let picture: any = {
            name: name,
            // URLSearchParams erwartet eine key value pair mit jeweils strings somit muss dass particle array zu einem string konvertiert werden
            particle: JSON.stringify(arrayParticle)
        };
        let query: URLSearchParams = new URLSearchParams(<any>picture);
        await fetch(url + "/save?" + query.toString());
        alert("Picture saved!");
    }

    async function loadPicture(): Promise<void> {
        let name: string | null = prompt("Canvas Name");

        if (name == null) {
            return;
        }
        let searchParams: any = {
            name: name
        };

        let query: URLSearchParams = new URLSearchParams(<any>searchParams);
        let response: Response = await fetch(url + "/load?" + query.toString());

        // das Response objekt gibt mit der json funktion den inhalt der antwort als json zurück
        let responseJson: any = await response.json();

        if (responseJson == null) {
            alert("Canvas does not exist");
            return;
        }

        // rohe partikel in array form
        let particlesRaw: any = JSON.parse(responseJson.particle);
        resetCanvas();


        for (let particle of particlesRaw) {
            // von den rohen partikel daten werden die Particle objekte erzeugt und dem canvas hinzugefügt
            let newParticle: Particle = new Particle(particle.position.x, particle.position.y, particle.size, particle.colour);
            arrayParticle.push(newParticle);
        }


    }

    async function showSavings(): Promise<void> {
        let response: Response = await fetch(url + "/read");
        let texte: string = await response.text();
        let savings: any = JSON.parse(texte);

        for (let i: number = 0; i < savings.length; i++) {
            let name: any = savings[i];
            let tdName: string = "<li>" + name + "</li>";
            let tablesavingsBody: HTMLElement = <HTMLElement>document.getElementById("tableSavingsBody");
            tablesavingsBody.innerHTML += tdName;
        }
    }
}
