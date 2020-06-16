const express = require("express");
const router = express.Router();

let info = {
    "name": "Jessica Valenzuela",
    "cwid": "10422958",
    "biography": "My name is Jessica Valenzuela.\n I was born on June 3rd 1999 in Staten Island New York",
    "favoriteShows": ["Parks & Rec", "How I Met Your Mother", "Avatar the Last Airbender", "Sugar Rush", "Chopped Junior"],
    "hobbies": ["Soccer", "Piano", "Sleeping", "Watching chopped junior with Dan"]
  }
router.get("/", async (req, res) => {
    try{
        res.json(info);
    } catch(e){
    res.status(404).json({message:"This route was not found :( "});
    }
})
  

module.exports = router;