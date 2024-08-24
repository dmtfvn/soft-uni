function solveCurTask(input) {
  let examHour = Number(input[0]);
  let examMins = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMins = Number(input[3]);

  let examTotalMins = examHour * 60 + examMins;
  let arrivalTotalMins = arrivalHour * 60 + arrivalMins;

  if (arrivalTotalMins > examTotalMins) {
    console.log('Late');
  } else if (examTotalMins - arrivalTotalMins <= 30) {
    console.log('On time');
  } else if (examTotalMins - arrivalTotalMins > 30) {
    console.log('Early');
  }

  let examMinusArrival = examTotalMins - arrivalTotalMins;
  let arrivalMinusExam = arrivalTotalMins - examTotalMins;

  if (examMinusArrival > 0) {
    if (examMinusArrival < 60) {
      console.log(`${examMinusArrival} minutes before the start`);
    } else {
      if (examMinusArrival % 60 < 10) {
        console.log(`${parseInt(examMinusArrival / 60)}:0${examMinusArrival % 60} hours before the start`);
      } else {
        console.log(`${parseInt(examMinusArrival / 60)}:${examMinusArrival % 60} hours before the start`);
      }
    }
  } else if (arrivalMinusExam > 0) {
    if (arrivalMinusExam < 60) {
      console.log(`${arrivalMinusExam} minutes after the start`);
    } else {
      if (arrivalMinusExam % 60 < 10) {
        console.log(`${parseInt(arrivalMinusExam / 60)}:0${arrivalMinusExam % 60} hours after the start`);
      } else {
        console.log(`${parseInt(arrivalMinusExam / 60)}:${arrivalMinusExam % 60} hours after the start`);
      }
    }
  }
}

solveCurTask(["11", "30", "11", "27"]);