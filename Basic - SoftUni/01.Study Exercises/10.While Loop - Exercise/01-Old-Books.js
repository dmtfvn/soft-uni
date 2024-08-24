function solveCurTask(input) {
  let favBook = input[0];

  let i = 1;
  let nextBook = input[i];

  let bookFound = false;
  let totalBooksCheck = 0;

  while (nextBook !== 'No More Books') {
    if (nextBook === favBook) {
      bookFound = true;
      break;
    }

    totalBooksCheck++;

    i++;
    nextBook = input[i];
  }

  if (bookFound === false) {
    console.log('The book you search is not here!');
    console.log(`You checked ${totalBooksCheck} books.`);
  } else {
    console.log(`You checked ${totalBooksCheck} books and found it.`);
  }
}

solveCurTask(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);