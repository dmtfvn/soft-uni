function solveCurTask(input) {
  let goals = 0;
  let bestPlayer = '';

  for (let i = 0; i < input.length; i++) {
    let playerName = input[i];
    let playerScore = Number(input[i + 1]);

    if (playerScore > goals) {
      goals = playerScore;
      bestPlayer = playerName;
    }
  }

  console.log(`${bestPlayer} is the best player!`);

  if (goals >= 10) {
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    return;
  } else if (goals >= 3) {
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
  } else if (goals < 3) {
    console.log(`He has scored ${goals} goals.`);
  }
}

solveCurTask(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);