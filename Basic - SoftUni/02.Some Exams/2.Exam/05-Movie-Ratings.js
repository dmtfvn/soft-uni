function solveCurTask(input) {
  let movieCount = Number(input[0]);

  let highRating = Number.MIN_SAFE_INTEGER;
  let lowRating = Number.MAX_SAFE_INTEGER;

  let currMovieH = '';
  let currMovieL = '';

  let totalRating = 0;

  for (let i = 1; i <= movieCount * 2; i += 2) {
    let movie = input[i];
    let rating = Number(input[i + 1]);

    if (highRating < rating) {
      highRating = rating;
      currMovieH = movie;
    }

    if (lowRating > rating) {
      lowRating = rating;
      currMovieL = movie;
    }

    totalRating += rating;
  }

  let avgRating = totalRating / movieCount;

  console.log(`${currMovieH} is with highest rating: ${highRating.toFixed(1)}`);
  console.log(`${currMovieL} is with lowest rating: ${lowRating.toFixed(1)}`);
  console.log(`Average rating: ${avgRating.toFixed(1)}`);
}

solveCurTask(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);