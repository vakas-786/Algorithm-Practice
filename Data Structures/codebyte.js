
const SearchingChallenge = function(str) { 

    let stack = [];
    const map = {
      '(': ')',
      '[': ']'
    }
    let counter = 0
    let tester = 0
    for (let i = 0; i <str.length; i++){
      if (str[i] === '(' || '['){
        let c = str[i]
        switch(c){
          case '(': stack.push(map[c]);
            break;
          case '[': stack.push(map[c]);
            break;
        default: 
          if (map[c] !== stack.pop()){
            counter ++
            tester ++
          }else {
              tester --
          }
        }
      }
    }

    if (Math.abs(tester) !== counter){
        return 0 
    }else {
        return `${1} ${counter}`;
    }
}

    const quote = "(c([od]er)) b(yt[e])"

    console.log(SearchingChallenge(quote));


//     Have the function SearchingChallenge(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1.
// Examples
// Input: "(coder)[byte)]"
// Output: 0
// Input: "(c([od]er)) b(yt[e])"
// Output: 1 5