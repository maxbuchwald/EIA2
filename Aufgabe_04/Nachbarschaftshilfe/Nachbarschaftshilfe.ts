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
        // let withdrawalprice: number = 0;

        for (let entry of formData) {
            if (entry[0] == "Supermarked" || entry[0] == "Withdrawals") {
                let supermarket: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += supermarket.value + "<br>";
            }
            // if (entry[0] == "Money") {
            //     let money: HTMLInputElement = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
            //     let pricemoney: number = Number(money.value);
            //     let fee: number = 5;
            //     if (pricemoney == 0)
            //         fee = 0;
            //     withdrawalprice += pricemoney + fee,
            //         order.innerHTML += "Withdrawal " + pricemoney + "€ + fee " + fee + " € " + "<br>";
            // }
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            if (item == null)
                continue;
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

