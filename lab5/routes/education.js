const express = require("express");
const router = express.Router();

let education = [
    //school 1
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "Bachelors of Science",
      "favoriteClass": "Algorithms",
      "favoriteMemory": "Joining a sorority!"
    },
    //school 2
    {
      "schoolName": "East Brunswick High School",
      "degree": "Highschool Diploma",
      "favoriteClass": "Game Design",
      "favoriteMemory": "Singing at Carnegie Hall with high school choir"
    },
    //school 3
    {
      "schoolName": "Hammerskjold Middle School",
      "degree": "Middle School Degree",
      "favoriteClass": "Pre Algrebra",
      "favoriteMemory": "Track and Field Day!"
    }
]
router.get("/", async (req, res) => {
    try{
        res.json(education);

    } catch(e){
    res.status(404).json({message:"This route was not found :( "});
    }
})


  

module.exports = router;