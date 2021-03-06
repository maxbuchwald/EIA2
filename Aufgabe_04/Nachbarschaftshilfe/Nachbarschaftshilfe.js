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
        form = document.querySelector("form");
        let submit = document.querySelector("button[type=button]");
        form.addEventListener("change", handleChange);
        displayOrder();
        submit.addEventListener("click", sendOrder);
    }
    async function sendOrder(_event) {
        console.log("Send order");
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
            if (entry[0] == "Supermarked" || entry[0] == "Withdrawals") {
                let supermarket = document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += supermarket.value + "<br>";
            }
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
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
    }
})(Nachbarschaftshilfe_05 || (Nachbarschaftshilfe_05 = {}));
//# sourceMappingURL=Nachbarschaftshilfe.js.map