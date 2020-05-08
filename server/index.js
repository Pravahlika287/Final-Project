const express = require('express');
const path = require('path');

const Excontroller= require('./controllers/excercise');

const loginController = require('./controllers/login');

const hycontroller=require('./controllers/hydrate');
const hecontroller = require('./controllers/heart');
const ncontroller = require('./controllers/nutrition');
const usersController = require('./controllers/users');

const app = express();
const port = 4000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function(req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if(arr.length > 1 && arr[1] != null){
        req.userId = +arr[1];
    }
    next();
});


app
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(express.static( __dirname + '/../client/dist'))
    
    
    .use('/excercise',Excontroller) 
    .use('/hydrate', hycontroller)
    .use('/heart',hecontroller)
    .use('/nutrition',ncontroller)
    .use('/users', usersController)
    .use('/login', loginController)

    
    .use( (err, req, res, next ) => {
        console.error(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message });
    } )




app.listen(port, () => console.log(`Listening at http://localhost:${port}`));


   