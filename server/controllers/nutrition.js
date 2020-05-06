const express = require('express');

const nut= require('../models/Nutrition');
const router = express.Router();

router
 .get('/',(req,res)=>{
res.send({
    Nutrition:nutrition.diettotal

});
 })  


 .post('/add300',(req,res)=>res.send(nutrition.add300()
 ))


 .post('/add500',(req,res)=>res.send(nutrition.add500()
 ))



 module.exports = router;