const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;
const ObjectId = require('mongodb').ObjectId

module.exports = {

    async create(name, animalType){
        //Will return to the newly created animal object, with all fo the properties listed.
       
        if(!name || typeof(name)!="string") throw "Error: you must provide a name for the animal as a string";

        if(!animalType || typeof(animalType)!="string") throw "Error: you must provide the type of animal as a string";
        

        const animalCollection = await animals()
    
        let newAnimal = {
            name: name,
            animalType: animalType
        }

        const insertInfo = await animalCollection.insertOne(newAnimal)
        if (insertInfo.insertedCount === 0) throw "Error: could not create animal";

        const ID = insertInfo.insertedId;

        const animal = await this.get(ID);
        return animal;
        
    },
    async getAll(){
        //This function will return an array of all animals in the collection.
        const animalCollection = await animals();

        const animal = await animalCollection.find({}).toArray();

        return animal;
    },
    async get(id){
        //When given an id, this function will return an animal from the database.
        if(!id || !ObjectId.isValid(id)) throw "Error: must provide a valid ID to search for"

        const animalCollection = await animals();
        const animal = await animalCollection.findOne({_id: id});
        if(animal===null) throw "Error: No animal with that ID";

        return animal;
    },
    async remove(id){
        //This function will remove the animal from the database.
        if(!id || !ObjectId.isValid(id)) throw "Error: must provide a valid ID to search for";

        const animalCollection = await animals();
        const deletionInfo = await animalCollection.removeOne({_id:id});

        if(deletionInfo.deletedCount===0){
            throw `Could not delete animial with id of ${id}`;
        }
    },
    async rename(id, newName){
        //This function will update the name of an animal currently in the database.
        if(!newName || typeof(newName)!="string") throw "Error: you must provide a new name for the animal as a string";
        if(!id || !ObjectId.isValid(id)) throw "Error: must provide a valid ID"

        let animalCollection = await animals();
    
        const renameInfo = await animalCollection.updateOne({_id:id},{$set: {name:newName}});

        if(renameInfo.modifiedCount === 0) throw "Error: could not update animal successfully";

        return await this.get(id);


    }
    
};