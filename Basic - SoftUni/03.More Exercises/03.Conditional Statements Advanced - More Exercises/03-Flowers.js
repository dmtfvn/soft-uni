function solveCurTask(input) {
  let chrysanthemumsCount = Number(input[0]);
  let rosesCount = Number(input[1]);
  let tulipsCount = Number(input[2]);
  let season = input[3];
  let isHoliday = input[4];

  let flowersTotalCount = chrysanthemumsCount + rosesCount + tulipsCount;

  let chrysanthemumsPriceSpringSummer = chrysanthemumsCount * 2.00;
  let chrysanthemumsPriceAutumnWinter = chrysanthemumsCount * 3.75;

  let rosesPriceSpringSummer = rosesCount * 4.10;
  let rosesPriceAutumnWinter = rosesCount * 4.50;

  let tulipsPriceSpringSummer = tulipsCount * 2.50;
  let tulipsPriceAutumnWinter = tulipsCount * 4.15;

  let bouquetArranging = 2;

  let bouquetPriceSpringSummer = chrysanthemumsPriceSpringSummer + rosesPriceSpringSummer + tulipsPriceSpringSummer;
  let bouquetPriceAutumnWinter = chrysanthemumsPriceAutumnWinter + rosesPriceAutumnWinter + tulipsPriceAutumnWinter;

  switch (season) {
    case 'Spring':
      if (isHoliday === 'Y') {
        bouquetPriceSpringSummer *= 1.15;

        if (tulipsCount > 7 && flowersTotalCount > 20) {
          bouquetPriceSpringSummer = bouquetPriceSpringSummer * 0.95 * 0.80;
        } else if (flowersTotalCount > 20) {
          bouquetPriceSpringSummer *= 0.80;
        }

        bouquetPriceSpringSummer += bouquetArranging;

        console.log(bouquetPriceSpringSummer.toFixed(2));
      } else if (isHoliday === 'N') {
        if (tulipsCount > 7 && flowersTotalCount > 20) {
          bouquetPriceSpringSummer = bouquetPriceSpringSummer * 0.95 * 0.80;
        } else if (flowersTotalCount > 20) {
          bouquetPriceSpringSummer *= 0.80;
        }

        bouquetPriceSpringSummer += bouquetArranging;

        console.log(bouquetPriceSpringSummer.toFixed(2));
      }
      break;
    case 'Summer':
      if (isHoliday === 'Y') {
        bouquetPriceSpringSummer *= 1.15;

        if (flowersTotalCount > 20) {
          bouquetPriceSpringSummer *= 0.80;
        } else {
          bouquetPriceSpringSummer;
        }

        bouquetPriceSpringSummer += bouquetArranging;

        console.log(bouquetPriceSpringSummer.toFixed(2));
      } else if (isHoliday === 'N') {
        if (flowersTotalCount > 20) {
          bouquetPriceSpringSummer *= 0.80;
        } else {
          bouquetPriceSpringSummer;
        }

        bouquetPriceSpringSummer += bouquetArranging;

        console.log(bouquetPriceSpringSummer.toFixed(2));
      }
      break;
    case 'Autumn':
      if (isHoliday === 'Y') {
        bouquetPriceAutumnWinter *= 1.15;

        if (flowersTotalCount > 20) {
          bouquetPriceAutumnWinter *= 0.80;
        } else {
          bouquetPriceAutumnWinter;
        }

        bouquetPriceAutumnWinter += bouquetArranging;

        console.log(bouquetPriceAutumnWinter.toFixed(2));
      } else if (isHoliday === 'N') {
        if (flowersTotalCount > 20) {
          bouquetPriceAutumnWinter *= 0.80;
        } else {
          bouquetPriceAutumnWinter;
        }

        bouquetPriceAutumnWinter += bouquetArranging;

        console.log(bouquetPriceAutumnWinter.toFixed(2));
      }
      break;
    case 'Winter':
      if (isHoliday === 'Y') {
        bouquetPriceAutumnWinter *= 1.15;

        if (rosesCount >= 10 && flowersTotalCount > 20) {
          bouquetPriceAutumnWinter = bouquetPriceAutumnWinter * 0.90 * 0.80;
        } else if (flowersTotalCount > 20) {
          bouquetPriceAutumnWinter *= 0.80;
        }

        bouquetPriceAutumnWinter += bouquetArranging;

        console.log(bouquetPriceAutumnWinter.toFixed(2));
      } else if (isHoliday === 'N') {
        if (rosesCount >= 10 && flowersTotalCount > 20) {
          bouquetPriceAutumnWinter = bouquetPriceAutumnWinter * 0.90 * 0.80;
        } else if (flowersTotalCount > 20) {
          bouquetPriceAutumnWinter *= 0.80;
        }

        bouquetPriceAutumnWinter += bouquetArranging;

        console.log(bouquetPriceAutumnWinter.toFixed(2));
      }
      break;
  }
}

solveCurTask(["3", "10", "9", "Winter", "N"]);