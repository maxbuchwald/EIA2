namespace CharacterEditor {
    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {
        console.log("handleload");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");

        form.addEventListener("change", handleChange);
    }
    function handleChange(_event: Event): void {
        // console.log(_event);
        let output: HTMLDivElement = <HTMLDivElement>document.querySelector("div#output");
        output.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {

            let attribut: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            console.log(attribut);
            let info: number = Number(attribut.getAttribute("info"));
            console.log(info);

            output.innerHTML += attribut.name + " €" + info;
        }
    }

}