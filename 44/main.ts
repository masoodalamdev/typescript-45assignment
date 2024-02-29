function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log("No items specified for the sandwich.");
    } else {
        console.log("Items on the sandwich:");
        items.forEach(item => {
            console.log("--> " + item);
        });
    }
}

orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Banana");
