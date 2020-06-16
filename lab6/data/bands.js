const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const {ObjectId} = require('mongodb').ObjectId

async function addBand(bandName, bandMembers, yearFormed, genres, recordLabel){
    if(!bandName || !bandMembers || !yearFormed || !genres || !recordLabel) throw `Error: must be provided`
    if(typeof(bandName) !== "string" || typeof(recordLabel) !== "string") throw `Error: must be a string`
    if(typeof(yearFormed) !== "number") throw `Error: must be a number`
    if(!Array.isArray(bandMembers) || !Array.isArray(genres)) throw `Error: must be an array`
    if((bandMembers.length||genres.length) <= 0) throw `Error: can't be 0`

    const bandCollection = await bands();

    let object = {
        'bandName': bandName,
        'bandMembers': bandMembers,
        'yearFormed': yearFormed,
        'genres': genres,
        'albums': [],
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
    if(!id) throw `You must provide and id to search for`
    let updatedId = ObjectId(id);
    const bandCollection = await bands();
    const band = await bandCollection.findOne({_id: updatedId})
    if(band===null) throw `No band with that id`
    return band;
}

async function updateBand(bandId, bandName, bandMembers, yearFormed, genres, recordLabel){
    if(!bandName || !bandMembers || !yearFormed || !genres || !recordLabel) throw `Error: must be provided`
    if(typeof(bandName) !== "string" || typeof(recordLabel) !== "string") throw `Error: must be a string`
    if(typeof(yearFormed) !== "number") throw `Error: must be a number`
    if(!Array.isArray(bandMembers) || !Array.isArray(genres)) throw `Error: must be an array`
    if((bandMembers.length||genres.length) <= 0) throw `Error: can't be 0`

    const bandCollection = await bands();
    const updatedId = ObjectId(bandId)
    const updatedBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel
    }
    const updateinfo = await bandCollection.updateOne({_id: updatedId}, {$set:updatedBand});
    if(updateinfo.modifiedCount===0) throw `Error: could not update band correctly`
    return await this.getBand(bandId);
}
async function removeBand(id){
    if(!id) throw `You must provide an id to search for`

    updatedId = ObjectId(id);
    const band = await getBand(id);
    const bandCollection = await bands();
    const deleteInfo = await bandCollection.deleteOne({_id:updatedId});
    if (deleteInfo.deletedCount === 0) throw `Could not delete band with id of ${id}`;
    return {deleted: true,
            data: band};
}




module.exports = {addBand, getAllBands, updateBand, removeBand, getBand}