const express = require('express');

const hydrate= require('../models/Hydrate');
const router = express.Router();

router
 .get('/',(req,res)=>{
res.send({
    Hydrate:hydrate.HydrateSum

})
 })
 


 .post('/add3',(req,res)=>res.send(hydrate.add3()
 ))


 .post('/add6',(req,res)=>res.send(hydrate.add6()
 ))

 .post('/add15',(req,res)=>res.send(hydrate.add15()
 ))
 .post('/add25',(req,res)=>res.send(hydrate.add25()
 ))

 module.exports = router;