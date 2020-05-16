"use strict";
var Nachbarschaftshilfe_04;
(function (Nachbarschaftshilfe_04) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        Nachbarschaftshilfe_04.generateContent(Nachbarschaftshilfe_04.data);
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        // let withdrawalprice: number = 0;
        for (let entry of formData) {
            if (entry[0] == "Supermarked" || entry[0] == "Withdrawals") {
                let supermarket = document.querySelector("[value='" + entry[1] + "']");
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
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            if (item == null)
                continue;
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Shopping":
                    let amount = Number(formData.get("Amount"));
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
})(Nachbarschaftshilfe_04 || (Nachbarschaftshilfe_04 = {}));
//# sourceMappingURL=Nachbarschaftshilfe.js.map