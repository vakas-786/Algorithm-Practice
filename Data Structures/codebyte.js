const SearchingChallenge = function(str) { 

  var leftPCount = 0;
  var rightPCount = 0;
  var leftBCount = 0;
  var rightBCount = 0;

  for (var i = 0; i <= str.length; i++) {
    if (str[i] === '(') {
      leftPCount++;
    } else if (str[i] === ')') {
      rightPCount++;
    }
    if (rightPCount > leftPCount) {
      return 0;
    }

    if (str[i] === '[') {
      leftBCount++;
    } else if (str[i] === ']') {
      rightBCount++;
    }
    if (rightBCount > leftBCount) {
      return 0;
    }
  }

  if ((leftPCount === rightPCount) && (leftBCount === rightBCount)) {
    return '1 ' + (leftPCount + leftBCount);
  }
  return 0;
}

    const quote = "(c([od]er)) b(yte)"

    console.log(SearchingChallenge(quote));


//     Have the function SearchingChallenge(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1.
// Examples
// Input: "(coder)[byte)]"
// Output: 0
// Input: "(c([od]er)) b(yt[e])"
// Output: 1 5