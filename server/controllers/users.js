const express = require('express');

const users = require('../models/Users');

const router = express.Router();


router
    .post('/login', (req, res) => {
        try {
            const user = users.Login(req.body.email, req.body.password);
            res.send( { ...user, Password: undefined } );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })
    .get('/',(req,res)=>{res.send({person:users.Users[req.userID]})})

module.exports = router;