function solveCurTask(arr) {
  let result = '';

  for (const curStr of arr) {
    function palindrome(iLeft, iRight) {
      while (iLeft >= 0 && iRight < curStr.length && curStr[iLeft] === curStr[iRight]) {
        iLeft--;
        iRight++;
      }

      return curStr.slice(iLeft + 1, iRight);
    }

    for (let i = 0; i < curStr.length; i++) {
      let evenPalindrome = palindrome(i, i);
      let oddPalindrome = palindrome(i, i + 1);

      if (evenPalindrome.length > result.length) {
        result = evenPalindrome;
      }

      if (oddPalindrome.length > result.length) {
        result = oddPalindrome;
      }
    }
  }

  console.log(`Longest palindrome: ${result} | Length: ${result.length}.`);
}

solveCurTask([
  'nano',
  'sister',
  'racecar1',
  'tenetMovie'
]);