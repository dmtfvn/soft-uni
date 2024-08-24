function solveCurTask(input) {
  let stadiumCapacity = Number(input[0]);
  let fansCount = Number(input[1]);

  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;

  for (let i = 2; i <= fansCount + 1; i++) {
    let singleFan = input[i];

    switch (singleFan) {
      case 'A':
        sectorA++;
        break;
      case 'B':
        sectorB++;
        break;
      case 'V':
        sectorV++;
        break;
      case 'G':
        sectorG++;
        break;
    }
  }

  let percentFansA = sectorA / fansCount * 100;
  let percentFansB = sectorB / fansCount * 100;
  let percentFansV = sectorV / fansCount * 100;
  let percentFansG = sectorG / fansCount * 100;
  let percentFansToStadium = fansCount / stadiumCapacity * 100;

  console.log(`${percentFansA.toFixed(2)}%`);
  console.log(`${percentFansB.toFixed(2)}%`);
  console.log(`${percentFansV.toFixed(2)}%`);
  console.log(`${percentFansG.toFixed(2)}%`);
  console.log(`${percentFansToStadium.toFixed(2)}%`);
}

solveCurTask(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);