function solveCurTask(input) {
  let result1 = input[0];
  let result2 = input[1];
  let result3 = input[2];

  let first1 = result1.charAt(0);
  let first2 = result1.charAt(2);

  let secon1 = result2.charAt(0);
  let secon2 = result2.charAt(2);

  let third1 = result3.charAt(0);
  let third2 = result3.charAt(2);

  let win = 0;
  let lost = 0;
  let tie = 0;

  if (first1 > first2) {
    win += 1;
  } else if (first1 < first2) {
    lost += 1;
  } else if (first1 === first2) {
    tie += 1;
  }

  if (secon1 > secon2) {
    win += 1;
  } else if (secon1 < secon2) {
    lost += 1;
  } else if (secon1 === secon2) {
    tie += 1;
  }

  if (third1 > third2) {
    win += 1;
  } else if (third1 < third2) {
    lost += 1;
  } else if (third1 === third2) {
    tie += 1;
  }

  console.log(`Team won ${win} games.`);
  console.log(`Team lost ${lost} games.`);
  console.log(`Drawn games: ${tie}`);
}

solveCurTask(["4:2", "0:3", "1:0"]);