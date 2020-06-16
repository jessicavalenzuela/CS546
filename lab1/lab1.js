const questionOne = function questionOne(arr) {
    // Implement question 1 here
    //Sum of squares
    var sum = 0;
    for(var i = 0;i<arr.length; i++){
        sum = sum + arr[i] * arr[i]; 
    }
    return sum;
}
const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    //Fibonacci
    if(typeof(num) != "number"){
        return NaN;
    }
    if(num <= 0){
        return 0;
    }
    if(num < 2){
        return 1;
    } 
    else {
        return questionTwo(num-1) + questionTwo(num-2);
    }
}


const questionThree = function questionThree(text) {
    // Implement question 3 here
    //Check vowels
    if (text.match(/[AEIOUaeiou]/gi)){
        return text.match(/[AEIOUaeiou]/gi).length;
        } else return 0;
}
const questionFour = function questionFour(num) {
    // Implement question 4 here
    //Factorial
    if(typeof(num) != "number"){
        return NaN;
    }
    if(num<0){
        return NaN;
    }
    if(num<=1){
        return 1;
    }
    return num*questionFour(num-1)
}

module.exports = {
    firstName: "Jessica", 
    lastName: "Valenzuela", 
    studentId: "10422958",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};