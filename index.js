const batteryBatches = [4, 5, 6, 7, 9];

const totalBatteries = batteryBatches.reduce((acc, batch) => acc + batch, 0);

console.log(totalBatteries); // Should output 31

