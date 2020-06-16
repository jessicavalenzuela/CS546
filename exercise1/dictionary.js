const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}
function checkInput(input){
    //check to see if it's a string.
    if(typeof(input) != "string") throw `Error: ${input} is not a string`
}
function lookupDefinition(string){
    checkInput(string);
    if(words[string] != undefined){
        return words[string];
    }
    if(words[string] == undefined) throw `Error: it is undefined`
    
}
function getWord(string){
    checkInput(string);
    let getWord = Object.keys(words).find(key => words[key]==string)
    if(getWord==undefined) throw `Error: Word not found`
    return getWord;
}
module.exports = {lookupDefinition, getWord}
