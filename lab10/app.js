const express = require('express');
const app = express();
const session = require('express-session');
const configRoutes = require('./routes');

const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(
    session({
        name: 'AuthCookie',
        secret: 'This is a secret',
        saveUninitialized: true,
        resave: false
    })
);
app.use('/private', (req, res, next) =>{
    if(!req.session.user){
        //redirect to login html page
        res.status(403).render('login/error')
    } else{
        next();
    }
})
app.use('/login', (req, res, next) =>{
    if(req.session.user){
        return res.redirect('/private');
    } else{
        req.method = 'POST';
        next();
    }
});

app.use(async (req, res, next) => {
    let current = new Date().toUTCString()
    let method = req.method
    let route = req.originalUrl
    if(req.session.user){
        console.log(current + ': ' + method + route  + ' Authenticated User')

} else{
    console.log(current + ': ' + method + route + ' Non-Authenticated User')
}
next();
})

configRoutes(app);

app.listen(3000, () =>{
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');

});
