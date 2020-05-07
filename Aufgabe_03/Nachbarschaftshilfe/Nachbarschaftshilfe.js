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
            // console.log(entry[0]);
            // if (entry[0] == "Drink") {
            //     let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("[value='" + entry[1] + "']");
            //     let pricedrink: number = Number(drink.getAttribute("price"));
            //     order.innerHTML += drink.value + "  € " + pricedrink + "<br>";
            //     continue;
            // }
            if (entry[0] == "amount") {
                let itemamount = document.querySelector("[value='" + entry[1] + "']");
                let priceamount = Number(itemamount.getAttribute("price"));
                console.log(entry[0], entry[1]);
                continue;
            }
            // if (entry[0] == "supermarked")
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            order.innerHTML += item.value + " " + price + " € " + "<br>";
            console.log(entry[0], entry[1]);
        }
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=Nachbarschaftshilfe.js.map