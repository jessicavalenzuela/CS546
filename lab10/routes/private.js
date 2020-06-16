const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {

    let user = req.session.user
    res.render('login/private', {
    _id:`_id: ${user['_id']},`,
    username: `username: ${user['username']},`,
    firstName: `firstName: ${user['firstName']},`,
    lastName: `lastName: ${user['lastName']},`,
    profession: `profession: ${user['profession']},`,
    bio: `bio:${user['bio']}`
})
    
 })



 
module.exports = router;