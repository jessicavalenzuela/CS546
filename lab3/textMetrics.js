function createMetrics(text){
    text = text.toLowerCase();

    //letters
    let totalVowels = text.match(/[aeiou]/gi).length
    let totalConsonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length  
    let totalLetters = text.match((/[a-z]/gi)).length;
    let totalNonLetters = text.match(/[^a-z]/gi).length


    //words
    let word = text.split(/[\W0-9]+/g).filter(Boolean)
    let totalWords = word.length;

    //UNIQUE WORDS
    let uniqueWords = 0;
    let uniqueword = []
    for(let i = 0;i<word.length;i++){
        if(uniqueword.includes(word[i])){
            continue; 
        } else{
            uniqueword = uniqueword.concat(word[i]);
        }
        uniqueWords = uniqueword.length
    }

    //LONG WORDS
    let longWords = 0;
    for(let i = 0; i<word.length;i++){
        if(word[i].length >= 6){
            longWords += 1;
        } else{
            continue;
        }
    }
    
    //AVERAGE WORD LENGTH
    let averageWordLength = 0;
    let total = 0;
    for(let i = 0; i<word.length;i++){
        total += word[i].length
        averageWordLength = total/totalWords
    }

    //WORD OCCURRENCES
    let wordOccurrences = {};
    word.sort().forEach(word => {
        if(wordOccurrences[word]){
            wordOccurrences[word] += 1;
        } else{
            wordOccurrences[word] = 1;
        }
    })

    
    
    let result = {
        'totalLetters': totalLetters,
        'totalNonLetters': totalNonLetters,
        'totalWords': totalWords,
        'totalVowels': totalVowels,
        'totalConsonants': totalConsonants,
        'uniqueWords': uniqueWords,
        'longWords': longWords,
        'averageWordLength': averageWordLength,
        'wordOccurrences': wordOccurrences,
    
    }
    return result;
}
module.exports = {createMetrics}