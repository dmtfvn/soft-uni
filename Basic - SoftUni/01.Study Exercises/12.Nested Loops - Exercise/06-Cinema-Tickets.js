function solveCurTask(input) {
  let i = 0;
  let command = input[i];

  let student = 0;
  let standard = 0;
  let kid = 0;

  let total = 0;

  while (command !== 'Finish') {
    let movieName = input[i];
    let freeSpace = Number(input[i + 1]);

    i += 2;
    let ticketType = input[i];

    let ticketCounter = 0;

    while (ticketType !== 'End') {
      ticketCounter++;

      switch (ticketType) {
        case 'standard':
          standard++;
          break;
        case 'student':
          student++;
          break;
        case 'kid':
          kid++;
          break;
      }

      if (ticketCounter >= freeSpace) {
        break;
      }

      i++;
      ticketType = input[i];
    }

    total += ticketCounter;

    let percentSingleMovie = ticketCounter / freeSpace * 100;

    console.log(`${movieName} - ${percentSingleMovie.toFixed(2)}% full.`);

    i++;
    command = input[i];
  }

  console.log(`Total tickets: ${total}`);
  console.log(`${(student / total * 100).toFixed(2)}% student tickets.`);
  console.log(`${(standard / total * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(kid / total * 100).toFixed(2)}% kids tickets.`);
}

solveCurTask(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);