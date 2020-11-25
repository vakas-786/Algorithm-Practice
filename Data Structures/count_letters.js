const word = 'pneumonoultramicroscopicsilicovolcanoconiosis'

function getObjFromStr(word) {
    var letters = {}
    for (var i=0; i < word.length; i++) {
        var letter = word.charAt(i)
        if (letters[letter]) {
           letters[letter]++
        } else {
           letters[letter] = 1
        }
    }

    return letters
    
}

console.log(getObjFromStr(word))

/* solution should look like this 
{
	p: 2,
	n: 4,
	e: 1,
	...
}
*/

    