namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        // console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);

    }

    function handleChange(_event: Event): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {

            if (entry[0] == "supermarket") {
                let supermarket: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += supermarket.value + "<br>";
                // console.log(entry[0], entry[1]);
                // continue;
            }
            if (entry[0] == "household") {
                if (entry[1] != null && entry[1] != "") {
                    let household: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                    let price: number = Number(household.getAttribute("price"));
                    order.innerHTML += household.value + " " + price + " €" + "<br>";
                    // continue;
                }
            }

            if (entry[0] == "money") {
                if (entry[1] != null && entry[1] != "") {
                    let money: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                    let pricemoney: number = Number(money.value);
                    console.log(pricemoney);
                }
            }
            if (entry[0] == "shopping") {
                if (entry[1] != null && entry[1] != "") {
                    let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                    let price: number = Number(item.getAttribute("price"));
                    order.innerHTML += item.value + " " + price + " € " + "<br>";
                }
            }



        }
    }
}
