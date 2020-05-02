namespace memory {
    let chosenSequence: string[] = ["A", "P", "F", "E", "L"];
    // let chosensequenceLength: number = chosenSequence.length;
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
        // let mail: HTMLElement = <HTMLElement>_event.target;
        // let letter: HTMLSpanElement = document.createElement("span");
        // mail.appendChild(letter);

        // letter.textContent = chosenSequence;
        console.log(mail);
    }
}