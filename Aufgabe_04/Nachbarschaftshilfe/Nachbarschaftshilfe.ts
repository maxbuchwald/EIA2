namespace Nachbarschaftshilfe_04 {
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        generateContent(data);
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);


    }
    function handleChange(_event: Event): void {
        displayOrder();
    }
    function displayOrder(): void {
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";
        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);            
            let itemPrice: number = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Shopping":
                    let amount: number = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " x " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                // case "Money":
                //     console.log("money");
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
    }
}

