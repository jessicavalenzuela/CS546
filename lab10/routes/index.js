const user = (require('./users'));
const private = require('./private');
const path = require("path");



const constructorMethod = (app) => {
    app.use('/', user);
    app.use('/login', (req, res) => {
     res.render('login/login');
    })
    app.use('/private', private);

    app.use('*', (req, res) =>{
        res.sendStatus(404);
    });
}

module.exports = constructorMethod