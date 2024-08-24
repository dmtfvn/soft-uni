function solveCurTask(input) {
    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPrice = mackerelPrice * 1.60;
    let bonitoCost = bonitoPrice * bonitoKg;

    let safridPrice = spratPrice * 1.80;
    let safridCost = safridPrice * safridKg;

    let musselsCost = 7.50 * musselsKg;

    let totalCost = bonitoCost + safridCost + musselsCost;
    
    console.log(totalCost.toFixed(2));
}

solveCurTask(["7.79", "5.35", "9.3", "0", "0"]);