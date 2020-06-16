const express = require('express');
const router = express.Router();
const path = require("path");
const bcrypt = require('bcrypt');
const users = require('../data/user')


router.get('/', async(req, res) =>{
    res.render('login/login');
});
router.post('/', async(req, res) => {
    res.json({ router: '/users', method: req.method })
})
router.post('/login', async(req,res) => {
    const { username, password } = req.body;

    for(let i = 0; i<users.length; i++){ 
        if(users[i]['username']==username) {
            let hashedPassword = users[i]['hashedPassword']
            let match = await bcrypt.compare(password, hashedPassword)
            if(match){
                //login
                req.session.name = 'AuthCookie'
                req.session.user = 
                {
                    _id: users[i]['_id'], 
                    username: users[i]['username'], 
                    firstName: users[i]['firstName'],
                    lastName: users[i]['lastName'], 
                    profession: users[i]['profession'], 
                    bio:users[i]['bio']
                }

                res.redirect('/private')
                
                return;

            } else {
                res.status(401).render('login/login',{
                    message: 'Username or password incorrect'
                })
                return;
        } 
        }
    }
})

router.get('/logout', async(req, res) => {
    req.session.destroy();
    res.send('Logged out')
})
module.exports = router;