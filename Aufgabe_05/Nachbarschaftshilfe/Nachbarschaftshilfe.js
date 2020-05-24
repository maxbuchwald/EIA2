"use strict";
var Nachbarschaftshilfe_05;
(function (Nachbarschaftshilfe_05) {
    window.addEventListener("load", handleLoad);
    let form;
    async function handleLoad(_event) {
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        Nachbarschaftshilfe_05.generateContent(data);
        // let shopping: HTMLInputElement = <HTMLInputElement>document.querySelector("#Shoppinginput");
        // shopping.addEventListener("change", createOptionShopping);
        form = document.querySelector("form");
        let submit = document.querySelector("button[type=button]");
        form.addEventListener("change", handleChange);
        displayOrder();
        submit.addEventListener("click", sendOrder);
    }
    async function sendOrder(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("index.html?" + query.toString());
        alert("Order sent!");
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            if (item == null)
                continue;
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Supermarked":
                    order.innerHTML += item.value + "<br>";
                    break;
                case "Amount":
                    break;
                case "Shopping":
                    let amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " x " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Household":
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Withdrawals":
                    let money = Number(formData.get("Money"));
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
})(Nachbarschaftshilfe_05 || (Nachbarschaftshilfe_05 = {}));
//# sourceMappingURL=Nachbarschaftshilfe.js.map