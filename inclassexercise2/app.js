const bands = require('./bands')
const connection = require('./mongoConnection');

const main = async () => {
    const createdBand = await bands.addBand("Pink Floyd", ["Roger Waters","David Gilmour", "Richard Wright", "Nick Mason"], 1965, ["Psychedelic rock", "Classic Rock", "Rock"],"Columbia Records");
    console.log(createdBand);
    const createband2 = await bands.addBand("name", ["Member1", "Mermber2"], 2020, ["genre, genre2"], "records");
    const getAllBands = await bands.getAllBands();
    console.log(getAllBands);
    const removeBand = await bands.removeBand(getAllBands[0]._id);
    console.log(removeBand)
    const allBands = await bands.getAllBands();
    console.log(allBands);
    const update = await bands.updateBand(allBands[0]._id, "name", ["Member1", "Member2"], 2020, ["genre, genre2"], "records" )
    console.log(update)

    const db = await connection();
    await db.serverConfig.close();

    console.log("Done!")
}   

main().catch((error) =>{
    console.log(error);
});