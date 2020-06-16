const dictionary = require('./dictionary');
try {
    console.log(dictionary.lookupDefinition("programming"))
}catch (error){
    console.log(error)
}
try {
    console.log(dictionary.lookupDefinition("hi"))
}catch (error){
    console.log(error)
}
try {
    console.log(dictionary.lookupDefinition("yo"))
}catch (error){
    console.log(error)
}
try{
    console.log(dictionary.getWord("The action or process of writing computer programs."))
}catch (error){
    console.log(error)
}
try{
    console.log(dictionary.getWord("A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)"))
}catch (error){
    console.log(error)
}
try{
    console.log(dictionary.getWord("The action of writing computer programs."))
}catch (error){
    console.log(error)
}