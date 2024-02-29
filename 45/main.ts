function storeCarInfo(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
    const carInfo: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    additionalInfo.forEach(info => {
        const key = Object.keys(info)[0];
        carInfo[key] = info[key];
    });

    return carInfo;
}

const carDetails = storeCarInfo("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);

console.log(carDetails);
