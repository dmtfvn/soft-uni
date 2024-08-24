function solveCurTask(input) {
  let aquariumLength = Number(input[0]);
  let aquariumWidth = Number(input[1]);
  let aquariumHigh = Number(input[2]);
  let reservedPercent = Number(input[3]);

  let aquariumVolume = aquariumLength * aquariumWidth * aquariumHigh;
  let volumeInLiters = aquariumVolume / 1000;
  let waterOnly = 100 - reservedPercent;
  let neededLiters = volumeInLiters * waterOnly / 100;

  console.log(neededLiters);
}

solveCurTask(["85", "75", "47", "17"]);