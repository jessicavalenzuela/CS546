//in bands.js you will have two methods (two routes), one that gets all the bands from the database 
//and one that gets a single band from the DB passing in a band ID, See lecture 5 code for an example.

const express = require("express");
const router = express.Router();

const data = require("../data")
const getBands = data.bands;

router.get("/:id", async (req, res) => {
    try{
        const get = await getBands.getBand(req.params.id)
        res.json(get)

    } catch (e){
        res.status(404).json({message:"band not found"});
    }
});

router.get('/', async (req, res) => {  
    try {   
        const bandList = await getBands.getAllBands();
        res.json(bandList);  
    } catch (e) {   
        res.status(500).send();  
    } 
});  

module.exports = router;