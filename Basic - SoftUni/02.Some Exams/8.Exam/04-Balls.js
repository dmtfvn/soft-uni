function solveCurTask(input) {
  let ballCount = Number(input[0]);

  let score = 0;

  let red = 0;
  let orange = 0;
  let yellow = 0;
  let white = 0;
  let black = 0;
  let other = 0;

  for (let i = 1; i <= ballCount; i++) {
    let ballType = input[i];

    if (ballType === 'red') {
      score += 5;
      red++;
    } else if (ballType === 'orange') {
      score += 10;
      orange++;
    } else if (ballType === 'yellow') {
      score += 15;
      yellow++;
    } else if (ballType === 'white') {
      score += 20;
      white++;
    } else if (ballType === 'black') {
      score /= 2;
      black++;
    } else {
      other++;
    }
  }

  console.log(`Total points: ${Math.floor(score)}`);
  console.log(`Red balls: ${red}`);
  console.log(`Orange balls: ${orange}`);
  console.log(`Yellow balls: ${yellow}`);
  console.log(`White balls: ${white}`);
  console.log(`Other colors picked: ${other}`);
  console.log(`Divides from black balls: ${black}`);
}

solveCurTask(["3", "white", "black", "pink"]);