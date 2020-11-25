// in order for something to be atriangle it must have 3 sides
// length of one side has to be less than the sum of the other two sides
// sides 1 1 2 false 

// 1 2 3 false 

// 3 4 5 true 

// 2 3 4 true 

function triangles(sides) {
   const triangles = []

   for(let i=0; i < (sides.length-2); i++){
       const side1= sides[i]
       const side2 = sides[i+1]
       const side3 = sides[i+2]
       const perimeter = side1+side2+side3
       if( (side1 < side2+side3) && (side2 < side1+side3) && (side3 < side1+side2)){
           triangles.push(perimeter)
       }

   }
   return Math.max(...triangles)>0? Math.max(...triangles) : "triangle not possible"

}




const vakas = [1,2,3,4,5,10]

console.log(triangles(vakas))

// maximum perimeter 
// string that says not possible 
// always assume that it is at least 3 numbers 


//alternate solution 

function triangles(sides) {
    const newArray = sides.reverse()
 
    for(let i=0; i < (sides.length-2); i++){
        const side1= newArray[i]
        const side2 = newArray[i+1]
        const side3 = newArray[i+2]
        const perimeter = side1+side2+side3
        if( (side1 < side2+side3) && (side2 < side1+side3) && (side3 < side1+side2)){
            return i+2
        }
 
    }
    return "triangle not possible"
 }