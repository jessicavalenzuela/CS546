const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

function checkInput(input){
    //check to see if it's a string.
    if(typeof(input) != "string") throw `Error: ${input} is not a string`;
    //check if input is provided
    if(!input) throw `Error: no ${input} provided`;
}

async function getFileAsString(path){
    //This method will, when given a path, return a promise, that resolves to a string with the contents of the files.
    checkInput(path)    
    try{
        const content = await fs.readFileAsync(path, "utf8");
        return content;

    }catch(error){
        console.log(error)
   }
}

async function getFileAsJSON(path){
    //This method will, when given a path, return a promise that resolves to a JavaScript object. 
    checkInput(path);
    try{
        const content = await fs.readFileAsync(path, "utf-8");
        const JsonFile = JSON.parse(content);
        return JsonFile;
    } catch(error){
        console.log(error);
    }
}

async function saveStringToFile(path, text){
    //This method will take the text supplied, and store it in the file specified by path. 
    //The function should return a promise that will resolve to true when saving is completed.
    checkInput(path);
    checkInput(text);
    try{
        const writtencontent = await fs.writeFileAsync(path,text);
        return writtencontent;
    }catch{
        console.log(error);
    }
}
async function saveJSONToFile(path, obj){
    //This method will take the obj supplied and convert it into a JSON string so that it may stored as in a file. 
    //The function should return a promise that will resolve to true when saving is completed.
    checkInput(path);
    if(typeof(obj) !== "object") throw `Error: must be an object`
    if(!obj) throw `Error: object must be provided`
    try{
        const writtencontent = await fs.writeFileAsync(path, JSON.stringify(obj));
        return writtencontent;
    } catch(error){
        console.log(error)
    }
}

module.exports = {getFileAsString,getFileAsJSON,saveStringToFile,saveJSONToFile};




