"use strict";
var Cocktailbar;
(function (Cocktailbar) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        // console.log("handleload");
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
            }
            console.log(price);
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
})(Cocktailbar || (Cocktailbar = {}));
//# sourceMappingURL=CocktailBar.js.map