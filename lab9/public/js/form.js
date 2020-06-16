function palindromeChecker(str){
    if(typeof str !== "string") throw "Error: Must provide a string";
    
    let string = str.replace(/[\W_]/g, "").toLowerCase();
    let arr = string.split("");
    let reversedArr = string.split("").reverse();
    for(let i=0; i<arr.length; i++){
            if(arr[i]==reversedArr[i]){
                return true;
            } else {
                return false;
            }
        }
}
const staticForm = document.getElementById("static-form");

if (staticForm){

    staticForm.addEventListener("submit", event => {
         event.preventDefault();
        const phrase = document.getElementById("phrase");
        const phraseValue = phrase.value
        const attempts = document.createElement("li")
        const ol = document.getElementById("attempts")

        if(!phraseValue){
            alert("Please enter a phrase!")
        }
        if(palindromeChecker(phraseValue) == true){
            attempts.className += "is-palindrome";
            attempts.innerHTML = (phraseValue)
        } 
        else {
            attempts.className += "not-palindrome";
            attempts.innerHTML = (phraseValue)
        } 
        ol.appendChild(attempts);
    })
   
    }