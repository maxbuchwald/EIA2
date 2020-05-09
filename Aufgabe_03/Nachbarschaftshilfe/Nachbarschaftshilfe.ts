namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        // console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);

    }

    function handleChange(): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        let householdprice: number = 0;
        let withdrawalprice: number = 0;
        let shoppingprice: number = 0;
        for (let entry of formData) {
            if (entry[0] == "supermarket") {
                let supermarket: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += supermarket.value + "<br>";
            }
            if (entry[0] == "household") {
                if (entry[1] != null && entry[1] != "") {
                    let household: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                    let price: number = Number(household.getAttribute("price"));
                    householdprice += price;
                    order.innerHTML += household.value + " " + price + "€" + "<br>";
                }
            }
            if (entry[0] == "money") {
                if (entry[1] != null && entry[1] != "") {
                    let money: HTMLInputElement = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
                    let pricemoney: number = Number(money.value);
                    let fee: number = 5;
                    if (pricemoney == 0)
                        fee = 0;
                    withdrawalprice += pricemoney + fee,
                        order.innerHTML += "Withdrawal " + pricemoney + "€ + fee " + fee + " € " + "<br>";
                }
            }
            if (entry[0] == "shopping") {
                if (entry[1] != null && entry[1] != "") {
                    let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                    let price: number = Number(item.getAttribute("price"));
                    shoppingprice += price;
                    order.innerHTML += item.value + " " + price + "€ " + "<br>";                     
                }
            }
        }
        let bill: number = 0;
        bill += householdprice + withdrawalprice + shoppingprice;
        order.innerHTML += "<br>" + "total " + bill + "€";
    }
}
