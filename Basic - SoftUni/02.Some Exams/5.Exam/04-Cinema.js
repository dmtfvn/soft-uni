function solveCurTask(input) {
  let cinemaCapacity = Number(input[0]);

  let i = 1;
  let current = input[i];

  let singleTicket = 5;

  let totalPeople = 0;
  let profit = 0;

  while (current !== 'Movie time!') {
    let group = Number(input[i]);

    if (cinemaCapacity - totalPeople < current) {
      console.log('The cinema is full.');
      console.log(`Cinema income - ${profit} lv.`);
      break;
    }

    if (group % 3 === 0) {
      profit += (group * singleTicket - singleTicket);
    } else {
      profit += group * singleTicket;
    }

    totalPeople += group;

    i++;
    current = input[i];
  }

  if (current === 'Movie time!') {
    console.log(`There are ${cinemaCapacity - totalPeople} seats left in the cinema.`);
    console.log(`Cinema income - ${profit} lv.`);
  }
}

solveCurTask(["60", "10", "6", "3", "20", "15", "Movie time!"]);