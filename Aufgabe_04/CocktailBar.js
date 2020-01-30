"use strict";
var L04_Cocktailbar;
(function (L04_Cocktailbar) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        L04_Cocktailbar.generateContent(L04_Cocktailbar.data);
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        displayOrder();
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            // console.log(entry);
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": €" + itemPrice + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            console.log(item);
            price += itemPrice;
        }
        order.innerHTML += "<p><strong>Total   €" + price.toFixed(2);
    }
    function displayAmount(_event) {
        console.log(displayAmount);
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L04_Cocktailbar || (L04_Cocktailbar = {}));
//# sourceMappingURL=CocktailBar.js.map