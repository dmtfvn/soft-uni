function solveCurTask(input) {
  let seasonHoliday = input[0];
  let groupType = input[1];
  let studentsCount = Number(input[2]);
  let nightStayCount = Number(input[3]);

  let finalPrice = 0;

  let gymnastics = 'Gymnastics';
  let judo = 'Judo';
  let ski = 'Ski';
  let athletics = 'Athletics';
  let tennis = 'Tennis';
  let cycling = 'Cycling';
  let volleyball = 'Volleyball';
  let football = 'Football';
  let swimming = 'Swimming';

  if (studentsCount >= 50) {
    if (seasonHoliday === 'Winter') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 9.60 * 0.50;

          console.log(`${judo} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 9.60 * 0.50;

          console.log(`${gymnastics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 10 * 0.50;

          console.log(`${ski} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Spring') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 7.20 * 0.50;

          console.log(`${tennis} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 7.20 * 0.50;

          console.log(`${athletics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 9.50 * 0.50;

          console.log(`${cycling} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Summer') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 15 * 0.50;

          console.log(`${football} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 15 * 0.50;

          console.log(`${volleyball} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 20 * 0.50;

          console.log(`${swimming} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    }
} else if (studentsCount >= 20 && studentsCount < 50) {
    if (seasonHoliday === 'Winter') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 9.60 * 0.85;

          console.log(`${judo} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 9.60 * 0.85;

          console.log(`${gymnastics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 10 * 0.85;

          console.log(`${ski} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Spring') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 7.20 * 0.85;

          console.log(`${tennis} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 7.20 * 0.85;

          console.log(`${athletics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 9.50 * 0.85;

          console.log(`${cycling} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Summer') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 15 * 0.85;

          console.log(`${football} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 15 * 0.85;

          console.log(`${volleyball} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 20 * 0.85;

          console.log(`${swimming} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    }
} else if (studentsCount >= 10 && studentsCount < 20) {
    if (seasonHoliday === 'Winter') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 9.60 * 0.95;

          console.log(`${judo} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 9.60 * 0.95;

          console.log(`${gymnastics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 10 * 0.95;

          console.log(`${ski} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Spring') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 7.20 * 0.95;

          console.log(`${tennis} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 7.20 * 0.95;

          console.log(`${athletics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 9.50 * 0.95;

          console.log(`${cycling} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Summer') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 15 * 0.95;

          console.log(`${football} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 15 * 0.95;

          console.log(`${volleyball} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 20 * 0.95;

          console.log(`${swimming} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    }
} else if (studentsCount < 10) {
    if (seasonHoliday === 'Winter') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 9.60;

          console.log(`${judo} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 9.60;

          console.log(`${gymnastics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 10;

          console.log(`${ski} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Spring') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 7.20;

          console.log(`${tennis} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 7.20;

          console.log(`${athletics} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 9.50;

          console.log(`${cycling} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    } else if (seasonHoliday === 'Summer') {
      switch (groupType) {
        case 'boys':
          finalPrice = studentsCount * nightStayCount * 15;

          console.log(`${football} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'girls':
          finalPrice = studentsCount * nightStayCount * 15;

          console.log(`${volleyball} ${finalPrice.toFixed(2)} lv.`);
          break;
        case 'mixed':
          finalPrice = studentsCount * nightStayCount * 20;

          console.log(`${swimming} ${finalPrice.toFixed(2)} lv.`);
          break;
      }
    }
  }
}

solveCurTask(["Spring", "mixed", "17", "14"]);