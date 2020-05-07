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
            // console.log(entry[0]);
            // if (entry[0] == "Drink") {
            //     let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("[value='" + entry[1] + "']");
            //     let pricedrink: number = Number(drink.getAttribute("price"));
            //     order.innerHTML += drink.value + "  € " + pricedrink + "<br>";
            //     continue;
            // }

            if (entry[0] == "amount") {
            let itemamount: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            let priceamount: number = Number(itemamount.getAttribute("price"));
            console.log(entry[0], entry[1]);
            continue;
            }

            // if (entry[0] == "supermarked")
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));
            order.innerHTML += item.value + " " + price + " € " + "<br>";

            console.log(entry[0], entry[1]);
        }
    }
}
