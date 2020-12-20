function reverseString(str) {
    let array = []
    for(let i = 0; i < str.length; i++){
      array.unshift(str[i])
    }
    reverse(array)
    function reverse(array){
        str = ''
        for(let i = 0; i < array.length; i++){
            str += array[i]
        }
    }
    return str;
  }
  
  console.log(reverseString("hello"));
