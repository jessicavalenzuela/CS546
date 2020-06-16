const fileData = require('./fileData')
const textMetrics = require('./textMetrics.js') 

async function main(file){
    if(typeof file !== 'string' || !file) throw `Error : incorrect file path`

    const resultPath = file.slice(0,file.lastIndexOf(".")) + ".result.json"

    try{
        
        const content = await fileData.getFileAsJSON(resultPath);
        console.log(content);
        if(content == undefined){
            const content = await fileData.getFileAsString(file);
            const metrics = textMetrics.createMetrics(content);
            await fileData.saveJSONToFile(resultPath, metrics);
            console.log(metrics);
        }
    } catch(error) {
        console.log(error)
    }
}
main("./chapter1.txt").catch(console.error);
main("./chapter2.txt").catch(console.error);
main("./chapter3.txt").catch(console.error);
