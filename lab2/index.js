const geometry = require('./geometry');
const utilities = require('./utilities');

// VOLUME RECTANGULAR PRISM
try {
    console.log(geometry.volumeOfRectangularPrism(1,2,3))
    //should return 6
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.volumeOfRectangularPrism(0,0,0))
    //should return error
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.volumeOfRectangularPrism('a','b','c'))
    //should return error
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.volumeOfRectangularPrism(-1,0,0))
    //should return error
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.volumeOfRectangularPrism(1,1,1))
    //should return 1
}catch (error){
    console.log(error)
}



//SURFACE AREA RECTANGULAR
try {
    console.log(geometry.surfaceAreaOfRectagularPrism(1,2,3))
    //should return 22
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.surfaceAreaOfRectagularPrism(0,0,0))
    //should return error
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.surfaceAreaOfRectagularPrism('a','b','c'))
    //should return error
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.surfaceAreaOfRectagularPrism(-1,0,0))
    //should return error
}catch (error){
    console.log(error)
}
try {
    console.log(geometry.surfaceAreaOfRectagularPrism(1,1,1))
    //should return 6
}catch (error){
    console.log(error)
}



//VOLUME OF SPHERE
try{
    console.log(geometry.volumeOfSphere(2))
    //shoud return 33.51

} catch(error){
    console.log(error)
}
try{
    console.log(geometry.volumeOfSphere(-1))
    //should return error
} catch(error){
    console.log(error)
    }
try{
    console.log(geometry.volumeOfSphere('a'))
    //should return error
} catch(error){
    console.log(error)
    }
try{
    console.log(geometry.volumeOfSphere(1))
    //should return 4.19
} catch(error){
    console.log(error)
}
try{
    console.log(geometry.volumeOfSphere(3/4))
    //should return 1.77
} catch(error){
    console.log(error)
}



//SURFACE AREA OF SPHERE
try{
    console.log(geometry.surfaceAreaofSphere(-1))
    //should return error
} catch(error){
    console.log(error)
    }
try{
    console.log(geometry.surfaceAreaofSphere('a'))
    //should return error
} catch(error){
    console.log(error)
}
try{
    console.log(geometry.surfaceAreaofSphere(2))
    //should return 50.27
} catch(error){
    console.log(error)
}
try{
    console.log(geometry.surfaceAreaofSphere(1))
    //should return 12.57
} catch(error){
    console.log(error)
    }
try{
    console.log(geometry.surfaceAreaofSphere(0))
    //should return error
} catch(error){
    console.log(error)
}



//DEEP EQUALITY
try{
    console.log(utilities.deepEquality({a:1, b:2 },{b:2, a:1}))
    //should return true
} catch(error){
    console.log(error)
}

try{
    console.log(utilities.deepEquality({b:1},{a:2}))
    //should return false
} catch(error){
    console.log(error)
}

try{
    console.log(utilities.deepEquality())
    //should return error
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.deepEquality('a',{b:1}))
    //should return error
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.deepEquality({a:[1,2,3]}, {a:[1,2,3]}))
    //should return true
} catch(error){
    console.log(error)
}

//UNIQUE ELEMENT
try{
    console.log(utilities.uniqueElements(["a", "a", "b", "a", "b", "c"]))
    //should return 3
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.uniqueElements())
    //should return error
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.uniqueElements(1))
    //should return error
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.uniqueElements(["a", "a", "b", "a", 1, 1, 2]))
    //should return 4
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.uniqueElements(["hello", "a", "b", "a", "b", "c"]))
    //should return 4
} catch(error){
    console.log(error)

}


//countOfEachCharacterInString
try{
    console.log(utilities.countOfEachCharacterInString("Hello, the pie is in the oven"))
    /* should return 
    " ": 6,
    ",": 1,
    "H": 1,
    "e": 5,
    "h": 2,
    "i": 3,
    "l": 2,
    "n": 2,
    "o": 2,
    "p": 1,
    "s": 1,
    "t": 2,
    "v": 1 */
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.countOfEachCharacterInString("Jessica"))
    /* should return
    J: 1
    a: 1
    c: 1
    e: 1
    i: 1
    s: 2 

    */
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.countOfEachCharacterInString([1,2,3]))
    //should return error
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.countOfEachCharacterInString())
    //shoud return error
} catch(error){
    console.log(error)
}
try{
    console.log(utilities.countOfEachCharacterInString('Today is February 6th, 2020'))
    /* should return
  '0': 2,
  '2': 2,
  '6': 1,
  ' ': 4,
  ',': 1,
  F: 1,
  T: 1,
  a: 2,
  b: 1,
  d: 1,
  e: 1,
  h: 1,
  i: 1,
  o: 1,
  r: 2,
  s: 1,
  t: 1,
  u: 1,
  y: 2*/
} catch(error){
    console.log(error)
}






