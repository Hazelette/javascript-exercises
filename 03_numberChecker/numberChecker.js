function numberChecker(number) {
  if (number >= 10) { // Check if the number is 10 or greater as 6 and 9 are false while 10 and 1000 are true
    return true;
  } else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
