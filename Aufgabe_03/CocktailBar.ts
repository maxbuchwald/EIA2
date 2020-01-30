namespace Cocktailbar {
    window.addEventListener("load", handleload);


    function handleload(_event: Event): void {
        // console.log("handleload");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        displayOrder();
    }
    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

        for (let entry of formData) {
            // console.log(entry);
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": €" + itemPrice + "<br>";
            }
            console.log(price);
            price += itemPrice;
        }
        order.innerHTML += "<p><strong>Total   €" + price.toFixed(2);
    }

    function displayAmount(_event: Event): void {
        console.log(displayAmount);
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);

    }

}