function matchingSubStrings(str1, str2) {
    let output = []
    for(let f = 0; f < str1.length; f++){
        for(let l = (f + 1); l <= str1.length; l++){
            let segment = str1.slice(f, l).toLowerCase()
            if (str2.toLowerCase().includes(segment)) output.push(segment)
        }
    }
    if (output.length === 0) output = false
    return output
}

const str1 = 'te'
const str2 = 'test'
console.log(matchingSubStrings(str1, str2))