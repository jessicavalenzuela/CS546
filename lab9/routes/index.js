const static = require('./static');

const constructorMethod = (app) => {
    app.use('/static', static);

    app.use('*', (req, res) =>{
        res.render("palindromechecker/static", {});
    });
};

module.exports = constructorMethod;