"use strict";
var Nachbarschaftshilfe_04;
(function (Nachbarschaftshilfe_04) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "Shopping":
                    group = createShopping(items, category);
                    break;
                case "Supermarked":
                    group = createSupermarked(items, category);
                    break;
                case "Household":
                    group = createHousehold(items, category);
                    break;
                case "Withdrawals":
                    group = createWithdrawals(items, category);
                    break;
                case "Money":
                    group = createMoney(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
        // createAmount();
    }
    Nachbarschaftshilfe_04.generateContent = generateContent;
    function createShopping(_items, _category) {
        let input = document.createElement("input");
        input.name = _category;
        input.type = "text";
        input.setAttribute("list", "shopping");
        let datalist = document.createElement("datalist");
        datalist.id = "shopping";
        input.append(datalist);
        for (let item of _items) {
            let option = document.createElement("option");
            option.value = item.name;
            option.setAttribute("name", item.name);
            option.setAttribute("price", item.price.toFixed(2));
            option.textContent = item.name;
            datalist.appendChild(option);
        }
        return input;
    }
    function createSupermarked(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let input = document.createElement("input");
            input.id = item.name;
            input.value = item.name;
            input.type = "radio";
            input.name = _category;
            let label = document.createElement("label");
            label.textContent = item.name;
            group.appendChild(input);
            group.appendChild(label);
        }
        return group;
    }
    function createHousehold(_items, _category) {
        let input = document.createElement("input");
        input.name = _category;
        input.type = "text";
        input.setAttribute("list", "household");
        let datalist = document.createElement("datalist");
        datalist.id = "household";
        input.append(datalist);
        for (let item of _items) {
            let option = document.createElement("option");
            option.value = item.name;
            option.setAttribute("name", item.name);
            option.setAttribute("price", item.price.toFixed(2));
            option.textContent = item.name;
            datalist.appendChild(option);
        }
        return input;
    }
    function createWithdrawals(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let input = document.createElement("input");
            input.id = item.name;
            input.value = item.name;
            input.type = "radio";
            input.name = _category;
            let label = document.createElement("label");
            label.textContent = item.name;
            group.appendChild(input);
            group.appendChild(label);
        }
        return group;
    }
    function createMoney(_items, _category) {
        let input = document.createElement("input");
        for (let item of _items) {
            input.id = item.name;
            input.type = "number";
            input.step = "5";
            input.min = "0";
            input.max = "500";
            input.setAttribute("price", item.price.toFixed(2));
        }
        return input;
    }
})(Nachbarschaftshilfe_04 || (Nachbarschaftshilfe_04 = {}));
//# sourceMappingURL=GenerateContent.js.map