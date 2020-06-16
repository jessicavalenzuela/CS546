const mongoCollections = require('./mongoCollections');
const bands = mongoCollections.bands;

async function addBand(bandName, bandMembers, yearFormed, genres, recordLabel){
    if(!Array.isArray(bandMembers) || !Array.isArray(genres)) throw `Error: must be an array`
    if((bandMembers||genres) <= 0) throw `Error: can't be 0`
    if(!bandName || !yearFormed || !recordLabel) throw `Error: must be provided`

    const bandCollection = await bands();

    let object = {
        'bandName': bandName,
        'bandMembers': bandMembers,
        'yearFormed': yearFormed,
        'genres': genres,
        'recordLabel': recordLabel
        }
        const add = await bandCollection.insertOne(object);
        if(add.insertedCount===0) throw `Error: could not add band`
        const newId = add.insertedId;
        
        return await this.getBand(newId);  
}
async function getAllBands(){
    const bandCollection = await bands();
    const band = await bandCollection.find({}).toArray();
    return band;
}
async function getBand(id){
    if(!id) throw `You must provide and if to search for`

    const bandCollection = await bands();
    const band = await bandCollection.findOne({_id:id})
    if(band===null) throw `No band with that id`
    return band;
}

async function updateBand(bandId,bandName, bandMembers, yearFormed, genres, recordLabel){
    if(!bandId) throw `You must provide an id to search for`;
    if(!bandName) throw `You must provide a band name`
    if(!Array.isArray(bandMembers) || !Array.isArray(genres)) throw `Error: must be an array`
    if(bandMembers<=0 || genres<= 0) throw `Error: can't be 0`
    const bandCollection = await bands();
    const updatedBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel
    }
    const updateinfo = await bandCollection.updateOne({_id: bandId}, {$set:updatedBand});
    if(updateinfo.modifiedCount===0) throw `Error: could not update band correctly`
    return await this.getBand(bandId);
}
async function removeBand(id){
    if(!id) throw `You must provide an id to search for`

    const bandCollection = await bands();
    const deleteInfo = await bandCollection.deleteOne({_id:id});

    if (deleteInfo.deletedCount === 0) throw `Could not delete band with id of ${id}`;
    return {deleted: true};
}




module.exports = {addBand, getAllBands, updateBand, removeBand, getBand}