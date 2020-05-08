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


            // if (entry[0] == "amount") {
            // let itemamount: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            // let priceamount: number = Number(itemamount.getAttribute("price"));
            // console.log(entry[0], entry[1]);
            // continue;
            // }

            if (entry[0] == "shopping") {
                let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(item.getAttribute("price"));
                order.innerHTML += item.value + " " + price + " € " + "<br>";
                // console.log(entry[0], entry[1]);
                continue;
            }
            if (entry[0] == "supermarket") {
                let supermarket: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += supermarket.value + "<br>";
                // console.log(entry[0], entry[1]);
                // continue;
            }
            if (entry[0] == "household") {
                console.log(entry[1]);
                let household: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(household.getAttribute("price"));
                order.innerHTML += household.value + " " + price + " €" + "<br>";
                // continue;
            }
 
            if (entry[0] == "money") {
                let money: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                let price: number = Number(money.getAttribute("price"));
                console.log(price);
   
            }
        }
    }
}
