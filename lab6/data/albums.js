const mongoCollections = require('../config/mongoCollections');
const albums = mongoCollections.albums;
const bands = mongoCollections.bands;
const ObjectId = require('mongodb').ObjectId

/*You will create and export the required methods to perform 
Create, Read, Update, and Delete methods on the albums structures. 
The function you create to create an album must also modify the band object 
and insert the album information into the album array in the band object*/

/*{
    "_id": "", //STRING OR OBJECT ID
    "title": "", // String title
    "author": "", // ID of band as string
    "songs": [] // Array of strings
} */

async function createAlbum(title, author, songs){
    if(!Array.isArray(songs)) throw `Error: must be an array`
    if(typeof(author) !== 'string' || typeof(title) !== 'string') throw `Error: must be a string`
    if(songs.length <= 0) throw `Error: can't be 0`
    if(!title || !author || !songs) throw `Error: must be provided`
    const albumCollection = await albums();
    const bandCollection = await bands();
    let object = {
        'title': title,
        'author': author,
        'songs': songs
    }
    const create = await albumCollection.insertOne(object);
    if(create.insertedCount===0) throw `Error: could not create album`
    const newId = create.insertedId;
    const newAuthor = ObjectId(author);
    const updateBand = await bandCollection.updateOne(
        {_id: newAuthor}, {$addToSet: {albums: newId.toString()}});
    if(!updateBand.matchedCount && !updateBand.modifiedCount) throw `Update failed`
    return await this.getAlbum(newId);
}
async function getAllAlbums(){
    const albumCollection = await albums();
    const album = await albumCollection.find({}).toArray();
    return album;
}

async function getAlbum(id){
    if(!id) throw `You must provide and id to search for`

    const newId = ObjectId(id)
    const albumCollection = await albums();
    const album = await albumCollection.findOne({_id: newId})
    if(album===null) throw `No album with that id`
    return album;
}

async function updateAlbum(albumId, title, author, songs){
    if(typeof(songs)=='string') throw `Error: must be string`
    if(!title || !author || !songs) throw `Error: must be provided`

    const updatedId = ObjectId(albumId)
    const albumCollection = await albums();
    const updatedAlbum = {
        title: title,
        author: author,
        songs: songs
    }
    const updateinfo = await albumCollection.updateOne({_id: updatedId}, {$set:updatedAlbum});
    if(updateinfo.modifiedCount===0) throw `Error: could not update album`
    return await this.getAlbum(updatedId)

}

async function deleteAlbum(id){
    if(!id) throw `You must provide an id to search for`

    const updatedId = ObjectId(id)
    const albumCollection = await albums();
    const album = await getAlbum(id);
    const deleteInfo = await albumCollection.deleteOne({_id: updatedId});
    const bandCollection = await bands()

    if(deleteInfo === 0) throw `Could not delete album with id of ${id}`;
    const updateBand = await bandCollection.updateOne(
        {_id: ObjectId(album.author)}, {$pull: {albums: id}});
            if(!updateBand.matchedCount && !updateBand.modifiedCount) throw `Update failed`
        
    return {
        deleted: true,
        data: album
    };
    
    
}

module.exports = {createAlbum, getAllAlbums, getAlbum, updateAlbum, deleteAlbum}