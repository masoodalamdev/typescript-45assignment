function storeCarInfo(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    additionalInfo.forEach(function (info) {
        var key = Object.keys(info)[0];
        carInfo[key] = info[key];
    });
    return carInfo;
}
var carDetails = storeCarInfo("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);
console.log(carDetails);
