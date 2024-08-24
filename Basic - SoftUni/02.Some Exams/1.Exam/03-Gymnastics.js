function solveCurTask(input) {
  let country = input[0];
  let device = input[1];

  let maxResult = 20;
  let totalResult = 0;

  switch (country) {
    case 'Russia':
      if (device === 'ribbon') {
        totalResult = 9.100 + 9.400;
      } else if (device === 'hoop') {
        totalResult = 9.300 + 9.800;
      } else if (device === 'rope') {
        totalResult = 9.600 + 9.000;
      }
      break;
    case 'Bulgaria':
      if (device === 'ribbon') {
        totalResult = 9.600 + 9.400;
      } else if (device === 'hoop') {
        totalResult = 9.550 + 9.750;
      } else if (device === 'rope') {
        totalResult = 9.500 + 9.400;
      }
      break;
    case 'Italy':
      if (device === 'ribbon') {
        totalResult = 9.200 + 9.500;
      } else if (device === 'hoop') {
        totalResult = 9.450 + 9.350;
      } else if (device === 'rope') {
        totalResult = 9.700 + 9.150;
      }
      break;
  }

  let percentRemainingPoints = (maxResult - totalResult) / maxResult * 100;

  console.log(`The team of ${country} get ${totalResult.toFixed(3)} on ${device}.`);
  console.log(`${percentRemainingPoints.toFixed(2)}%`);
}

solveCurTask(["Bulgaria", "ribbon"]);