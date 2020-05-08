"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // console.log("Start");
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            // if (entry[0] == "amount") {
            // let itemamount: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            // let priceamount: number = Number(itemamount.getAttribute("price"));
            // console.log(entry[0], entry[1]);
            // continue;
            // }
            if (entry[0] == "shopping") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("price"));
                order.innerHTML += item.value + " " + price + " € " + "<br>";
                // console.log(entry[0], entry[1]);
                continue;
            }
            if (entry[0] == "supermarket") {
                let supermarket = document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += supermarket.value + "<br>";
                // console.log(entry[0], entry[1]);
                // continue;
            }
            if (entry[0] == "household") {
                console.log(entry[1]);
                let household = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(household.getAttribute("price"));
                order.innerHTML += household.value + " " + price + " €" + "<br>";
                // continue;
            }
            if (entry[0] == "money") {
                let money = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(money.getAttribute("price"));
                console.log(price);
            }
        }
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=Nachbarschaftshilfe.js.map