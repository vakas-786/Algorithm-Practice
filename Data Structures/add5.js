
    function solution(N) {
        const array = []
        const stringifyAbs = Math.abs(N).toString()
    
        for (i in stringifyAbs){
          let add = parseInt(stringifyAbs.substring(0, i) + '5' + stringifyAbs.substring(i))
          array.push(add)
        }
    
        if (N < 0){
            return Math.min(...array) * -1
        }else {
            return Math.max(...array)
        }
        
    }
    
  
  const num = -268
  console.log(solution(num))

