"use strict";
var L04_Cocktailbar;
(function (L04_Cocktailbar) {
    function generateContent(_data) {
        for (let category in _data) {
            //console.log(category);
            let items = _data[category];
            let group = null;
            switch (category) {
                case "Drink":
                    group = createSelect(items, category);
                    break;
                case "Container":
                    group = createSingle(items, category);
                    break;
                case "Extras":
                    group = createSMultiple(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Cocktailbar.generateContent = generateContent;
    function createSelect(_items, _category) {
        let group = document.createElement("select");
        group.name = _category;
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.value = option.textContent = item.name;
            option.id = item.name;
            group.appendChild(option);
        }
        return group;
    }
    function createSingle(_items, _category) {
        let group = document.createElement("span");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
    function createSMultiple(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(L04_Cocktailbar || (L04_Cocktailbar = {}));
//# sourceMappingURL=Generate_Content.js.map