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
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        let householdprice = 0;
        let withdrawalprice = 0;
        let shoppingprice = 0;
        for (let entry of formData) {
            if (entry[0] == "supermarket") {
                let supermarket = document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += supermarket.value + "<br>";
            }
            if (entry[0] == "household") {
                if (entry[1] != null && entry[1] != "") {
                    let household = document.querySelector("[value='" + entry[1] + "']");
                    let price = Number(household.getAttribute("price"));
                    householdprice += price;
                    order.innerHTML += household.value + " " + price + "€" + "<br>";
                }
            }
            if (entry[0] == "money") {
                if (entry[1] != null && entry[1] != "") {
                    let money = document.querySelector("[name='" + entry[0] + "']");
                    let pricemoney = Number(money.value);
                    let fee = 5;
                    if (pricemoney == 0)
                        fee = 0;
                    withdrawalprice += pricemoney + fee,
                        order.innerHTML += "Withdrawal " + pricemoney + "€ + fee " + fee + " € " + "<br>";
                }
            }
            if (entry[0] == "shopping") {
                if (entry[1] != null && entry[1] != "") {
                    let item = document.querySelector("[value='" + entry[1] + "']");
                    let price = Number(item.getAttribute("price"));
                    shoppingprice += price;
                    order.innerHTML += item.value + " " + price + "€ " + "<br>";
                }
            }
        }
        let bill = 0;
        bill += householdprice + withdrawalprice + shoppingprice;
        order.innerHTML += "<br>" + "total " + bill + "€";
    }
})(Nachbarschaftshilfe_04 || (Nachbarschaftshilfe_04 = {}));
//# sourceMappingURL=Nachbarschaftshilfe.js.map