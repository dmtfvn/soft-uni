function solveCurTask(num)  {
  let row = 1;
  let field = 1;

  console.log('<div class="chessboard">');

  for (let i = 0; i < num; i++) {
    console.log('  <div>');

    for (let j = 0; j < num; j++) {
      let curColor = '';

      if (field % 2 === 0) {
        curColor = 'white';
      } else {
        curColor = 'black';
      }

      console.log(`    <span class="${curColor}"></span>`);

      field++;
    }

    console.log('  </div>');

    if (row % 2 === 0) {
      field = 1;
    } else {
      field = 2;
    }

    row++;
  }

  console.log('</div>');
}

solveCurTask(3);