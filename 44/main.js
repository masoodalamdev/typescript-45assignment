function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("No items specified for the sandwich.");
    }
    else {
        console.log("Items on the sandwich:");
        items.forEach(function (item) {
            console.log("--> " + item);
        });
    }
}
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Banana");
