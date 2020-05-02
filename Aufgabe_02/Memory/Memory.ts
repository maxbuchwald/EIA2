namespace memory {
    let chosenSequence: string[] = ["A", "P", "F", "E", "L"];
    window.addEventListener("load", handleLoad);



    function handleLoad(): void {

        let chosenSequence: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sequence");
        chosenSequence.addEventListener("input", chooseSequence);
        let chosenTime: HTMLInputElement = <HTMLInputElement>document.querySelector("input#time");
        chosenTime.addEventListener("input", setTimeout);
        let board: HTMLElement = <HTMLElement>document.querySelector("div#board");
        board.addEventListener("click", openCharacter);
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        button.addEventListener("click", startgame);

    }

    function chooseSequence(): void {
        console.log("chooseSequence");
    }
    function setTimeout(): void {
        console.log("setTimeout");
    }
    function openCharacter(): void {
        console.log("openCharacter");
    }
    function startgame(_event: Event): void {
        console.log("startgame");
        let arraylength: number = chosenSequence.length;

        let letter: HTMLSpanElement = <HTMLSpanElement>document.querySelector("div#board");
        letter.innerHTML = "";
        let randomArray: number = Math.floor(Math.random() * Math.floor(arraylength));

        // let letter: string = "";
        for (let i: number = 0; i > arraylength; i++) {

            letter.innerHTML += chosenSequence[randomArray];
            // letter += chosenSequence[randomArray]
            console.log("for Loop");
        }

        // document.getElementById("board").innerHTML = letter;

        // let x: number = _event.offsetX;
        // let y: number = _event.offsetY;
        // let mail: HTMLElement = <HTMLElement>_event.target;
        // let sequence: HTMLSpanElement = document.createElement("span");
        // sequence.appendChild(letter);

        // letter.textContent = chosenSequence[randomArray];
        // letter.style.left = x + "px";
        // letter.style.top = y + "px";
    }
}