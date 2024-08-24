function solveCurTask(input) {
  let volume = Number(input[0]);
  let pipeOne = Number(input[1]);
  let pipeTwo = Number(input[2]);
  let timeAway = Number(input[3]);

  let pipeOneFill = pipeOne * timeAway;
  let pipeTwoFill = pipeTwo * timeAway;
  let totalWaterFilled = pipeOneFill + pipeTwoFill;

  let poolFilledPercentage = totalWaterFilled / volume * 100;
  let firstPipeFilled = pipeOneFill / totalWaterFilled * 100;
  let secondPipeFilled = pipeTwoFill / totalWaterFilled * 100;

  let excessWater = totalWaterFilled - volume;

  if (totalWaterFilled <= volume) {
    console.log(`The pool is ${poolFilledPercentage}% full. Pipe 1: ${firstPipeFilled}%. Pipe 2: ${secondPipeFilled}%.`);
  } else if (totalWaterFilled > volume) {
    console.log(`For ${timeAway} hours the pool overflows with ${excessWater} liters.`);
  }
}

solveCurTask(["100", "100", "100", "2.5"]);