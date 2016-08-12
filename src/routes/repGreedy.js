var router = require('express').Router();
var doubledutch = require('../Double Dutch Code.js');
var LB = false;
router.get("/rep", function(req, res){
   res.send("This is the rep greedy page"); 
});

router.post("/rep/fullFactorial", function(req, res){
   console.log("WORKED");
   var NLPF = req.body.numsLevelsPerFactor;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = {};
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.repGreedy_fullFactorial_solve(NLPF,PL,NMC,ANLO,WGT,CONS,LB));
   
});

router.post("/rep/fractionalFactorial", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var RS = req.body.resolution;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.repGreedy_fractionalFactorial_solve(NF,RS,PL,NMC,ANLO,WGT,CONS,LB)); 
});

router.post("/rep/plackettBurman", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.repGreedy_plackettBurman_solve(NF,PL,NMC,ANLO,WGT,CONS,LB)); 
});

router.post("/rep/boxBehnken", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.repGreedy_boxBehnken_solve(NF,PL,NMC,ANLO,WGT,CONS,LB)); 
});

router.post("/rep/custom", function(req, res){
   console.log("WORKED");
   var DG = req.body.designGrid;
   var PL = req.body.partsLibrary;
   var ANLO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.repGreedy_custom_solve(DG,PL,NMC,ANLO,WGT,CONS,LB)); 
});

module.exports = router;