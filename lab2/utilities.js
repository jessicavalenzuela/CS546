function deepEquality(obj1,obj2){
    //This method check each field (at every level deep) in obj1 and obj2 for equality. 
    //It will return true if each field is equal, and false if not.

    //checks that both arguments need to be provided  
    if(typeof(obj1) === 'undefined' || typeof(obj2) === 'undefined') throw `Error: argument must be provided`
    //checks that the type of obj1 and obj2 are objects
    if(typeof(obj1) != 'object' || typeof(obj2) != 'object') throw `Error: needs to be an object`

    let object1 = Object.keys(obj1);
    let object2 = Object.keys(obj2);
    //first check if the lengths are the same, if not it is false.
    if(object1.length !== object2.length){
        return false;
    } 

    //iterate through and check if fields in obj1 are the same as obj2.
    let i =0
    while(i<object1.length){
        let k =object1[i]
        //this is for when an object contains another object inside it.
        if(typeof(obj1[k]) === 'object') {
            deepEquality(obj1[k], obj2[k]);
            
          
        }
        else {
            if(obj1[k] !== obj2[k]){
                return false;
            }
        }
        i++
    } return true

}
function uniqueElements(arr){
    //This method will iterate throughout the array provided in arr 
    //and return how many unique elements are in the array.

    //check if arr is provided
    if(typeof(arr) === 'undefined') throw `Error: array is undefined`

    //check if arr is an array
    if(arr.constructor !== Array) throw `Error: ${arr} is not an array`

    
    //create an empty array
    let uniqueelements = []

    //go through each element in arr. if it's not in uniqueelements, then add it to uniqueelements. then return the length of unique elements.
    for(let i = 0;i<arr.length;i++){
        if(uniqueelements.includes(arr[i])){
            continue; 
        } else{
            uniqueelements = uniqueelements.concat(arr[i]);
        }
    }
    return uniqueelements.length
}
function countOfEachCharacterInString(str){
    //This method will traverse the string provided, str, and return an object. 
    //Each unique character in the array will be a key in the object, and the value will be 
    //how many times it appears in the string provided.

    //check if the strings is provided
    if(typeof(str) == 'undefined') throw `Error: string is not provided`;

    //check if str is a string
    if(typeof(str) !== 'string') throw `Error: ${str} is not a string`;

    //empty object
    let object = {};

    //str.split("") turns string into array of strings
    //if object has letter already add 1 if it doesn't make it equal to 1
    str.split("").sort().forEach(letter => {
        if(object[letter]){
            object[letter] += 1;
        } else{
            object[letter] = 1;
        }
    })
    return object;
}
module.exports = {deepEquality,uniqueElements, countOfEachCharacterInString}



