"use strict";
var L05_Cocktailbar;
(function (L05_Cocktailbar) {
    window.addEventListener("load", handleload);
    let form;
    function handleload(_event) {
        L05_Cocktailbar.generateContent(L05_Cocktailbar.data);
        form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let submit = document.querySelector("button[type=button]");
        console.log(submit);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        displayOrder();
    }
    // L_05
    async function sendOrder(_event) {
        console.log("Send Order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        fetch("index.html?" + query.toString());
        alert("Order sent!");
    }
    // 
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(form);
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
            //console.log(item);
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
})(L05_Cocktailbar || (L05_Cocktailbar = {}));
//letzter Stand L05_V4_Diagrams 
//# sourceMappingURL=CocktailBar.js.map