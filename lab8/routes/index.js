const result = require('./result');
const path = require("path");

const constructorMethod = (app) => {
    app.use('/result', result);
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('static/index.html'));
    })

    app.use('*', (req, res) =>{
        res.redirect('/result')
    });
};

module.exports = constructorMethod;