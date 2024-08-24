function solveCurTask(input) {
  let index = 0;

  let username = input[index];
  index++;

  let pass = input[index];
  index++;

  let passTry = input[index];
  index++;

  while (pass !== passTry) {
    passTry = input[index];

    index++;
  }

  console.log(`Welcome ${username}!`);
}

solveCurTask(["Nakov", "1234", "Pass", "1324", "1234"]);