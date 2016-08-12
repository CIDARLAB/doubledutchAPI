var router = require('express').Router();
var doubledutch = require('../Double Dutch Code.js');
var LB = false;
router.get("/greedy", function(req, res){
   res.send("This is the greedy page"); 
});

router.post("/greedy/fullFactorial", function(req, res){
   console.log("WORKED");
   var NLPF = req.body.numsLevelsPerFactor;
   var PL = req.body.partsLibrary;
   var GDO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = {};
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.greedy_fullFactorial_solve(NLPF,PL,NMC,GDO,WGT,CONS,LB));
   
});

router.post("/greedy/fractionalFactorial", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var RS = req.body.resolution;
   var PL = req.body.partsLibrary;
   var GDO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.greedy_fractionalFactorial_solve(NF,RS,PL,NMC,GDO,WGT,CONS,LB)); 
});

router.post("/greedy/plackettBurman", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var PL = req.body.partsLibrary;
   var GDO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.greedy_plackettBurman_solve(NF,PL,NMC,GDO,WGT,CONS,LB)); 
});

router.post("/greedy/boxBehnken", function(req, res){
   console.log("WORKED");
   var NF = req.body.numFactors;
   var PL = req.body.partsLibrary;
   var GDO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.greedy_boxBehnken_solve(NF,PL,NMC,GDO,WGT,CONS,LB)); 
});

router.post("/greedy/custom", function(req, res){
   console.log("WORKED");
   var DT = req.body.data;
   var PL = req.body.partsLibrary;
   var GDO = req.body.greedyOptions;
   var WGT = req.body.weights;
   var NMC = req.body.numClusterings;
   var CONS;
   if(req.body.hasOwnProperty('constraints'))
      CONS = req.body.constraints;
   else
      CONS = [];
   if (req.body.hasOwnProperty('libraries'))
      LB = req.body.libraries;
   res.json(doubledutch.greedy_custom_solve(DT,PL,NMC,GDO,WGT,CONS,LB)); 
});

module.exports = router;