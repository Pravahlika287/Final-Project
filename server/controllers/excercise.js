const express = require('express');

const Excercise= require('../models/Excercise');
const router = express.Router();

router
 
 .get("/",(req,res)=>res.send({
     Excercise:Excercise.List
 }))

 .post('/addEx',(req,res)=>res.send(excercise.addEx(req.body.workout)
 ))


 .post('/remove',(req,res)=>res.send(excercise.remove(req.body.i)
 )
 )

 