function solveCurTask(input) {
  let inheritance = Number(input[0]);
  let yearToLive = Number(input[1]);

  let boyCurAge = 18;

  for (let i = 1800; i <= yearToLive; i++) {
    let curYear = i;

    if (curYear % 2 === 0) {
      inheritance -= 12000;
      boyCurAge += 1;
    } else {
      inheritance -= 12000 + 50 * boyCurAge;
      boyCurAge += 1;
    }
  }

  if (inheritance >= 0) {
    console.log(`Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`);
  } else {
    console.log(`He will need ${Math.abs(inheritance).toFixed(2)} dollars to survive.`);
  }
}

solveCurTask(["50000", "1802"]);