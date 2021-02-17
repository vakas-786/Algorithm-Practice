function solution(S) {
    let map = {};   
  let slow = 0;
  let cnt = +Infinity;
  for(fast in S) {
   let char = S[fast];
   map[char] = ++map[char] || 1;

   if(char == char.toLowerCase()) {
    if(map[char.toUpperCase()] == undefined || map[char.toUpperCase()] == 0) continue;
     while(map[char.toUpperCase()]) {
         if(char.isValid()) result = Math.min(result, fast - slow + 1);
         slow++;
    }
  } else if(char == char.toUpperCase()){
    if(map[char.toLowerCase()] == undefined || map[char.toLowerCase()] == 0) continue;
     while(map[char.toLowerCase()]) {
         if(char.isValid()) result = Math.min(result, fast - slow + 1);
         slow++;
    }
  }
 }
  return result == +Inifnity ? -1  : result;
}
const num = 'TacoCat'
console.log(solution(num))