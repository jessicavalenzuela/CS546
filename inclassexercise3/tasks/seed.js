const bands = require('../data/bands')
const connection = require('../config/mongoConnection');

const main = async () => {
    const createdBand = await bands.addBand("Pink Floyd", ["Roger Waters","David Gilmour", "Richard Wright", "Nick Mason"], 1965, ["Psychedelic rock", "Classic Rock", "Rock"],"Columbia Records");
    const createBand2 = await bands.addBand("name", ["Member1", "Mermber2"], 2020, ["genre, genre2"], "records");
    const createBand3 = await bands.addBand("Dan Pelis Band", ["Dan", "Ted", "Zumbo"], 2005,["punk, grunge"], "Jessica records" )
    const createBand4 = await bands.addBand("Band", [ "Ted", "Zumbo"], 2009,["punk, grunge"], "Jessica records" )
    const createBand5 = await bands.addBand("hi", ["hello", "sup", "hola"], 2019,["rock, pop"], "records records" )

    const db = await connection();
    await db.serverConfig.close()

}   

main().catch((error) =>{
    console.log(error);
});