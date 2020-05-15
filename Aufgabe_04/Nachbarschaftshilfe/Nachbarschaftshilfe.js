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
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item = document.querySelector(selector);
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