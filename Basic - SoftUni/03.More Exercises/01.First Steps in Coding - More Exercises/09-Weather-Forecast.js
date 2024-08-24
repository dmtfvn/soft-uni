function solveCurTask(input) {
  let weather = input[0];
  
  switch (weather) {
    case 'sunny':
      console.log("It's warm outside!");
      break;
    case 'cloudy':
    case 'snowy':
      console.log("It's cold outside!");
      break;
    default:
      console.log("It's cold outside!");
      break;
  }
}

solveCurTask(["sunny"]);