var router = require('express').Router();
var doubledutch = require('../Double Dutch Code.js');
var LB = false;
router.get("/anneal", function(req, res){
   res.send("This is the anneal page"); 
});

router.post("/anneal/fullFactorial", function(req, res){
   console.log("WORKED");
   var NLPF = req.body.numsLevelsPerFactor;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.annealingOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = {};
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.anneal_fullFactorial_solve(NLPF,PL,NMC,ANLO,WGT,CONS,LB));
   
});

router.post("/anneal/fractionalFactorial", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var RS = req.body.resolution;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.annealingOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.anneal_fractionalFactorial_solve(NF,RS,PL,NMC,ANLO,WGT,CONS,LB)); 
});

router.post("/anneal/plackettBurman", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.annealingOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.anneal_plackettBurman_solve(NF,PL,NMC,ANLO,WGT,CONS,LB)); 
});

router.post("/anneal/boxBehnken", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.annealingOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.anneal_boxBehnken_solve(NF,PL,NMC,ANLO,WGT,CONS,LB)); 
});

router.post("/anneal/custom", function(req, res){
   console.log("WORKED");
   var DT = req.body.data;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.annealingOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.anneal_custom_solve(DT,PL,NMC,ANLO,WGT,CONS,LB)); 
});

module.exports = router;