const express = require('express');

const nutrition= require('../models/Nutrition');
const router = express.Router();

router
 .get('/',(req,res)=>{
res.send({
    Nutrition:nutrition.dietList

})
 .get('/',(req,res)=>{
     res.send({
         Nutrition:nutrition.$List
     })
 })

 .post('/addF',(req,res)=>res.send(nutrition.addF(req.body.food,req.body.calorie)))

.post('/remove',(req,res)=>send(nutrition.remove(req.body.i)))
 
 });
 module.exports = router;