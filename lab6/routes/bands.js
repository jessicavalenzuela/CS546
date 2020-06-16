//in bands.js you will have two methods (two routes), one that gets all the bands from the database 
//and one that gets a single band from the DB passing in a band ID, See lecture 5 code for an example.

const express = require("express");
const router = express.Router();

const data = require("../data")
const bands = data.bands;
const albums = data.albums;

router.get("/:id", async (req, res) => {
    try{
        const getBands = await bands.getBand(req.params.id);
        const albumList = getBands.albums;   
        const albumData = [];
        for(let i = 0; i<albumList.length; i++){
            albumData.push(await albums.getAlbum(albumList[i]))
        }
        getBands.albums = albumData
        res.json(getBands)
    } catch (e){
        res.status(404).json({message:"band not found"});
    }
});

router.get('/', async (req, res) => {  
    try {   
        let bandList = await bands.getAllBands();
        for(let j = 0; j<bandList.length; j++){
            let albumList = bandList[j].albums;   
            let albumData = [];
            for(let i = 0; i<albumList.length; i++){
                albumData.push(await albums.getAlbum(albumList[i]))
            }
            bandList[j].albums = albumData
        }
        res.json(bandList);  
    } catch (e) {   
        res.status(500).send();  
    } 
});

router.post('/', async (req, res) =>{
    const bandData = req.body;
    console.log(req.body)
    try {
      const {bandName, bandMembers, yearFormed, genres, recordLabel} = bandData;
      const newBand = await bands.addBand(bandName, bandMembers, yearFormed, genres, recordLabel);
      res.json(newBand);
    } catch (e) {
        console.log(e)
        res.status(400).json({error: e});
    }
})

router.put('/:id', async(req,res)=>{
    const {bandName, bandMembers, yearFormed, genres, recordLabel} = req.body;
    try{
        await bands.getBand(req.params.id);     
    } catch (e) {
        res.status(404).json({error: 'Band not found'});
        return;
    }
    try{
        const updatedBand = await bands.updateBand(req.params.id, bandName, bandMembers, yearFormed, genres, recordLabel);
        const getBands = await bands.getBand(req.params.id);
        const albumList = getBands.albums;   
        const albumData = [];
        for(let i = 0; i<albumList.length; i++){
            albumData.push(await albums.getAlbum(albumList[i]))
        }
        updatedBand.albums = albumData
        res.json(updatedBand);
    } catch(e){
        res.status(500).json({error:e});
    }
})

router.delete('/:id', async(req, res)=>{
    if(!req.params.id){
        res.status(400).json({error: 'You must supply an ID to delete'});
        return;
    }
    const getBands = await bands.getBand(req.params.id);

    try{
        getBands;
    } catch(e){
        res.status(404).json({error:'Band not found'});
        return;
    }
    try{
        const albumList = getBands.albums;   
        const albumData = [];
        for(let i = 0; i<albumList.length; i++){
            albumData.push(await albums.getAlbum(albumList[i]))
        }
        for(let j = 0; j<albumList.length; j++){
            await albums.deleteAlbum(albumList[j]);
        }
        const deletedBand = await bands.removeBand(req.params.id);
        deletedBand.data.albums = albumData
        res.status(200).json(deletedBand);
    } catch(e){
        res.status(500).json({error: e});
    }
});

module.exports = router;