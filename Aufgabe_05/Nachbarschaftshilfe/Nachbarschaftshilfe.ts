namespace Nachbarschaftshilfe_05 {
    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        // let shopping: HTMLInputElement = <HTMLInputElement>document.querySelector("#Shoppinginput");
        // shopping.addEventListener("change", createOptionShopping);

        form = <HTMLFormElement>document.querySelector("form");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        form.addEventListener("change", handleChange);

        displayOrder();
        submit.addEventListener("click", sendOrder);
    }
    async function sendOrder(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        alert("Order sent!");
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
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            if (item == null)
                continue;
            let itemPrice: number = Number(item.getAttribute("price"));


            switch (entry[0]) {
                case "Supermarked":
                    order.innerHTML += item.value + "<br>";
                    break;
                case "Amount":
                    break;
                case "Shopping":
                    let amount: number = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " x " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Household":
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Withdrawals":
                    let money: number = Number(formData.get("Money"));
                    price += money;
                    order.innerHTML += item.value + " " + money + "€  " + "<br>";
                    break;
                case "Money":
                    break;
            }
            price += itemPrice;
        }
        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }
    // function createOptionShopping(_event: Event): void {
    //     createSupermarked(items, category)
    //     // let item: HTMLInputElement = <HTMLInputElement>document.getElementById("Shoppinginput");
    //     // if (item) {
    //     //     let clone: Node = item.cloneNode(true);
    //     //     let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#Shopping");
    //     //     fieldset.appendChild(clone);
    //     //     let itemclone: HTMLInputElement = <HTMLInputElement>document.getElementById("Shoppinginput")?.lastChild;
    //     //     itemclone.value = "";
    //     //     // console.log(itemclone.value);
    //     // }
    // }
}