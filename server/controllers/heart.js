const express = require('express');

const heart= require('../models/Heart');
const router = express.Router();

router
 .get('/',(req,res)=>{
res.send({
    Heart:heart.BPTotal

});
 })  


 .post('/add20',(req,res)=>res.send(heart.add20()
 ))


 .post('/add40',(req,res)=>res.send(heart.add40()
 ))

 module.exports = router;