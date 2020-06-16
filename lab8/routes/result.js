const express = require('express')
const router = express.Router();
const data = require("../data")
const palindrome = data.palindrome


router.post('/', async(req,res) => {
    let palindromeData = req.body['text-to-test'];
    if(!palindromeData){
        res.render('palindromechecker/error', {
            message: "Uh oh! An error has occured. Looks like no phrase was submitted..."
        })
        return;
    }
    try{
        const phrase = await palindromeData
        if(palindrome.palindromeChecker(phrase)==true){
            res.render('palindromechecker/result',{
                textToTest: palindromeData,
                class: 'success',
                message: 'This is a palindrome!!'

        })
    }
        else{
            res.render('palindromechecker/result',{
                textToTest: palindromeData,
                class: 'failure',
                message: 'This is not a palindrome. Try again!'
        })
    }

    }catch(e){
        res.status(500).json({error:e});
    }
    
})

module.exports = router;