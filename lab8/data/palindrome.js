function palindromeChecker(str){
    let string = str.replace(/[\W_]/g, "").toLowerCase();
    let arr = string.split("");
    let reversedArr= string.split("").reverse();
    for(let i=0; i<arr.length; i++){
            if(arr[i]==reversedArr[i]){
                return true;
            } else {
                return false;
            }
        }
}

module.exports = {palindromeChecker};