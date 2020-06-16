const express = require("express");
const router = express.Router();

let story = {
    "storyTitle": "Story of Daniel",
    "story": "Daniel was born on April 2nd, 1998\n He first smiled on October 27th, 2019. \n Until then he was a sad boy. \n All is better now!"
  }
router.get("/", async (req, res) => {
    try{
        res.json(story);
    } catch(e){
    res.status(404).json({message:"This route was not found :( "});
    }
})
  

module.exports = router;