var seqType = {DNA: "DNA", schema: "org.clothocad.model.SequenceType"};
var featRole = {PROMOTER: "promoter", RBS: "ribosome binding site", UTR: "untranslated region", CDS: "coding sequence", TERMINATOR: "terminator",
    SPACER: "spacer", SCAR: "scar", VECTOR: "vector", schema: "org.clothocad.model.FeatureRole"};
var modRole = {TRANSCRIPTION: "transcription", TRANSLATION: "translation", EXPRESSION: "expression", INSULATION: "insulation",
    REPLICATION: "replication", schema: "org.clothocad.model.ModuleRole"};


var plackettBurmanSeeds = {};
plackettBurmanSeeds[hash(4)] = [1, 1, -1];
plackettBurmanSeeds[hash(8)] = [1, 1, 1, -1, 1, -1, -1];
plackettBurmanSeeds[hash(12)] = [1, 1, -1, 1, 1, 1, -1, -1, -1, 1, -1];
plackettBurmanSeeds[hash(16)] = [1, 1, 1, 1, -1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
plackettBurmanSeeds[hash(20)] = [1, 1, -1, -1, 1, 1, 1, 1, -1, 1, -1, 1, -1, -1, -1, -1, 1, 1, -1];
plackettBurmanSeeds[hash(24)] = [1, 1, 1, 1, 1, -1, 1, -1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, -1, -1, -1, -1];

var boxBehnkenSeeds = {};
boxBehnkenSeeds[hash(3)] = [[1, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
    [3]];
boxBehnkenSeeds[hash(4)] = [[1, 1, 0, 0],
    [0, 0, 1, 1],
    [1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1]];
boxBehnkenSeeds[hash(5)] = [[1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
    [3],
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [3]];
boxBehnkenSeeds[hash(6)] = [[1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 1],
    [6]];
boxBehnkenSeeds[hash(7)] = [[0, 0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0],
    [6]];
boxBehnkenSeeds[hash(9)] = [[1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [2],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [2],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 0],
    [2],
    [1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [2],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [2]];
boxBehnkenSeeds[hash(10)] = [[0, 1, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [10]];
boxBehnkenSeeds[hash(11)] = [[0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [12]];
boxBehnkenSeeds[hash(12)] = [[1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [12]];
function variable(name) {
    this.name = name;
    this.schema = "org.clothocad.model.Variable";
}

var dummyVaria = new variable("");

function units(name) {
    this.name = name;
    this.schema = "org.clothocad.model.Units";
}

var dummyUnits = new units("");

function parameter(value, varia, units) {
    this.value = value;
    this.variable = varia;
    this.units = units;
    this.schema = "org.clothocad.model.Parameter";
    this.copy = function() {
        return new parameter(this.parameter.value, this.parameter.variable, this.parameter.units);
    }
}

function unitlessParameter(value, varia) {
    this.value = value;
    this.variable = varia;
    this.schema = "org.clothocad.model.Parameter";
    this.copy = function() {
        return new parameter(this.parameter.value, this.parameter.variable);
    }
}

function module(feats, subMods, role, schema) {
    this.schema = schema;
    if (schema === "org.clothocad.model.BasicModule") {
        this.features = feats;
    } else if (schema === "org.clothocad.model.CompositeModule") {
        this.subModules = subMods;
    }
    this.role = role;
    this.getFeatures = function() {
        var feats;
        var i, f;
        if (this.schema === "org.clothocad.model.BasicModule") {
            return this.features;
        } else {
            feats = [];
            var subFeats;
            for (i = 0; i < this.subModules.length; i++) {
                subFeats = this.subModule[i].getFeatures();
                for (f = 0; f < subFeats.length; f++) {
                    feats.push(subFeats[f]);
                }
            }
            return feats;
        }
    };
    this.constructNameFromFeatures = function() {
        var feats = this.getFeatures();
        var name = "";
        var i;
        for (i = 0; i < feats.length; i++) {
            name = name + ", " + feats[i].name;
        }
        return name.substring(2);
    };
    this.name = this.constructNameFromFeatures();
}

function bioDesign(mod, params) {
    this.module = mod;//new module(mod.features, mod.subMods, mod.role, mod.schema);
    this.constructNameFromFeatures = function() {
        return this.module.constructNameFromFeatures();
    };
    if (arguments.length > 0) {
        this.name = this.constructNameFromFeatures();
    }
    this.parameters = params;
    this.schema = "org.clothocad.model.BioDesign";
    this.copy = function() {
        var bioDesignCopy = new bioDesign(this.module, []);
        var i;
        for (i = 0; i < this.parameters.length; i++) {
            bioDesignCopy.parameters.push(this.parameters[i].copy());
        }
        return bioDesignCopy;
    };
}

function sequence(seq) {
    this.sequence = seq;
    this.type = seqType.DNA;
    this.schema = "org.clothocad.model.Sequence";
}

function feature(name, role, seq) {
    this.name = name;
    this.role = role;
    this.sequence = seq;
    this.schema = "org.clothocad.model.Feature";
}

function level(param, bioDesign) {
    this.parameter = param;
    this.bioDesign = bioDesign;
    this.schema = "org.clothocad.model.Level";
}

function factor(varia, bioDesign) {
    this.variable = varia;
    this.bioDesign = bioDesign;
    this.levels = [];
    this.schema = "org.clothocad.model.Factor";
}

function experimentalDesign(factors) {
    this.factors = factors;
    this.schema = "org.clothocad.model.ExperimentalDesign";
}

function hash(value) {
    return (typeof value) + ' ' + (value instanceof Object ?
            (value.__hash || (value.__hash = ++arguments.callee.current)) :
            value.toString());
};
hash.current = 0;

function factorial(n) {
    var factorialStore = [];
    if (n == 0 || n == 1)
        return 1;
    if (factorialStore[n] > 0)
        return factorialStore[n];
    return factorialStore[n] = factorial(n - 1)*n;
};

function combinatorial(n, k) {
    return factorial(n)/(factorial(k)*factorial(n - k));
};

function arrayProduct(arr1, arr2) {
    var product = [];
    var i;
    for (i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (i >= arr1.length) {
            product.push(arr2[i]);
        } else if (i >= arr2.length) {
            product.push(arr1[i]);
        } else {
            product.push(arr1[i]*arr2[i]);
        }
    }
    return product;
};

function fNode(bioDesign) {
    this.bioDesign = bioDesign;
    this.isFNode = true;
    this.depth = 1;
    this.labelColor = "color:#ffffff";
    this.backgroundColor = "background-color:#787878"
    this.parameter = new parameter(0, new variable(""), new units(""));
    this.levelTargets = [];
    this.isTargetShown = false;
    this.isToggleShown = false;
    this.isConstraintShown = false;
    this.isMoveTopShown = true;
    this.children = [];
    this.copy = function() {
        return new fNode(this.bioDesign);
    };
}

function lNode(bioDesignx, pIndex) {
    this.bioDesign = bioDesignx;//new bioDesign(bioDesignx.module, bioDesignx.parameters);
    this.isFNode = false;
    this.depth = 2;
    this.labelColor = "";
    this.backgroundColor = ""
    this.parameter = this.bioDesign.parameters[pIndex];
    this.pIndex = pIndex;
    this.isTargetShown = false;
    this.isToggleShown = false;
    this.isConstraintShown = false;
    this.isConstraint = false;
    this.isMoveTopShown = true;
    this.constraintIcon = "glyphicon glyphicon-star-empty";
    this.constraintColor = "pull-right btn btn-default btn-xs";
    this.children = [];
    /*this.copy = function() {
     return new lNode(this.bioDesign, this.pIndex);
     };
     this.cost = function(target) {
     return Math.abs(this.parameter.value - target);
     };*/
}

lNode.prototype.copy = function(){
    return new lNode(this.bioDesign, this.pIndex);
}

lNode.prototype.cost = function(target){
    return Math.abs(this.parameter.value - target);
}

function LinearRegression(x, y) {
    var n = y.length;
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumXX = 0;
    var sumYY = 0;
    var i;
    for (i = 0; i < y.length; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += (x[i]*y[i]);
        sumXX += (x[i]*x[i]);
        sumYY += (y[i]*y[i]);
    }
    var diffXY = n*sumXY - sumX*sumY;
    var diffX = n*sumXX - Math.pow(sumX, 2);
    var diffY = n*sumYY - Math.pow(sumY, 2);
    this.slope = diffXY/diffX;
    this.intercept = (sumY - this.slope*sumX)/n;
    this.se = Math.sqrt((diffY - Math.pow(diffXY, 2)/diffX)/(n - 2));
};

LinearRegression.prototype.estimate = function(x) {
    return this.slope*x + this.intercept;
};

function LogYRegression (x, y) {
    var logY = [];
    var i;
    for (i = 0; i < y.length; i++) {
        logY[i] = Math.log(y[i])/Math.LN10;
    }
    LinearRegression.call(this, x, logY);
};

LogYRegression.prototype = Object.create(LinearRegression.prototype);
LogYRegression.prototype.constructor = LinearRegression;

function lCluster(lNodes, target) {
    this.lNodes = lNodes;
    this.target = target;
    this.levelCosts = [];
    this.isEqualTo = function(otherCluster) {
        if (this.lNodes.length != otherCluster.lNodes.length) {
            return false;
        } else {
            var i;
            for (i = 0; i < this.lNodes.length; i++) {
                if (this.lNodes[i] != otherCluster.lNodes[i]) {
                    return false;
                }
            }
            return true;
        }
    };
    this.copy = function() {
        var clusterCopy = new lCluster([], this.target);
        var i;
        for (i = 0; i < this.lNodes.length; i++) {
            clusterCopy.lNodes.push(this.lNodes[i]);
        }
        for (i = 0; i < this.levelCosts.length; i++) {
            clusterCopy.levelCosts.push(this.levelCosts[i]);
        }
        return clusterCopy;
    };
    this.calculateLevelCosts = function() {
        this.levelCosts = [];
        var maxCost = -1;
        var minCost = -1;
        var i;
        for (i = 0; i < this.lNodes.length; i++) {
            this.levelCosts[i] = this.lNodes[i].cost(this.target);
            if (maxCost < 0 || this.levelCosts[i] > maxCost) {
                maxCost = this.levelCosts[i];
            }
            if (minCost < 0 || this.levelCosts[i] < minCost) {
                minCost = this.levelCosts[i];
            }
        }
        for (i = 0; i < this.levelCosts.length; i++) {
            if (minCost == maxCost) {
                this.levelCosts[i] = 0;
            } else {
                this.levelCosts[i] = (this.levelCosts[i] - minCost)/(maxCost - minCost);
            }
        }
        return this.levelCosts;
    };
    this.calculateClusterCost = function() {
        var clusterCost = 0;
        this.calculateLevelCosts();
        for (var i = 0; i < this.levelCosts.length; i++) {
            clusterCost += this.levelCosts[i];
        }
        return clusterCost;
    };
    this.isConstrained = function() {
        return this.lNodes.length > 0 && this.lNodes[0].isConstraint;
    };
    this.isBioDesignConstraint = function(bioDesign) {
        if (this.lNodes.length > 0) {
            var j = 0;
            while (j < this.lNodes.length && this.lNodes[j].isConstraint && this.lNodes[j].bioDesign !== bioDesign) {
                j++;
            }
            return j < this.lNodes.length && this.lNodes[j].isConstraint && this.lNodes[j].bioDesign === bioDesign;
        } else {
            return false;
        }
    };
    this.isEmpty = function() {
        return this.lNodes.length == 0;
    };
    this.calculateMaxFeatures = function() {
        this.maxFeats = 0;
        var numFeats;
        var j;
        for (j = 0; j < this.lNodes.length; j++) {
            numFeats = this.lNodes[j].bioDesign.module.getFeatures().length;
            if (numFeats > this.maxFeats) {
                this.maxFeats = numFeats;
            }
        }
        return this.maxFeats;
    };
    this.calculateMinFeatures = function() {
        this.minFeats = 0;
        var numFeats;
        var j;
        for (j = 0; j < this.lNodes.length; j++) {
            numFeats = this.lNodes[j].bioDesign.module.getFeatures().length;
            if (this.minFeats == 0 || numFeats < this.minFeats) {
                this.minFeats = numFeats;
            }
        }
        return this.minFeats;
    };
}

function fullFactorialTemplate(name, numsLevelsPerFactor, type) { //class
    this.name = name;
    this.numsLevelsPerFactor = numsLevelsPerFactor;
    this.designGrid = [];
    this.type = type;
    this.resolution;
    this.generators;
    this.rangeGrid = [];
    this.rangeFreqGrid = []; //aka costModGrid
    this.rangeMaps = [];
    var i, j;
    for (i = 0; i < numsLevelsPerFactor.length; i++) {
        this.rangeGrid[i] = [];
        this.rangeFreqGrid[i] = [];
        this.rangeMaps[i] = {};
        if (numsLevelsPerFactor[i] == 1) {
            this.rangeGrid[i].push(1);
        } else {
            for (j = -Math.floor(numsLevelsPerFactor[i]/2); j <= Math.floor(numsLevelsPerFactor[i]/2); j++) {
                if (j != 0 || numsLevelsPerFactor[i]%2 != 0) {
                    this.rangeGrid[i].push(j);
                }
            }
        }
        for (j = 0; j < this.rangeGrid[i].length; j++) {
            this.rangeMaps[i][hash(this.rangeGrid[i][j])] = j;
            this.rangeFreqGrid[i][j] = 1;
        }
    }
    this.isEmpty = function() {
        return this.getDesignGrid().length == 0;
    };
    this.isGridValid = function() {
        var k;
        for (k = 0; k < this.getDesignGrid().length; k++) {
            if (this.getDesignGrid()[k].length == 0 || (k > 0 && this.getDesignGrid()[k].length != this.getDesignGrid()[k - 1].length)) {
                return false;
            }
        }
        return true;
    };
    this.isRangeValid = function(numsLevelsPerFactor) {
        var i;
        for (i = 0; i < this.rangeGrid.length; i++) {
            if (this.rangeGrid[i].length == 0) {
                return false;
            }
        }
        if (arguments.length > 0) {
            if (this.rangeGrid.length != numsLevelsPerFactor.length) {
                return false;
            } else {
                for (i = 0; i < this.rangeGrid.length; i++) {
                    if (this.rangeGrid[i].length != numsLevelsPerFactor[i]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    this.isRangeValidVsDesign = function(numsLevelsPerFactor) {
        var i;
        if (this.rangeGrid.length != numsLevelsPerFactor.length) {
            return false;
        } else {
            for (i = 0; i < this.rangeGrid.length; i++) {
                if (this.rangeGrid[i].length != numsLevelsPerFactor[i]) {
                    return false;
                }
            }
        }
        return true;
    };
    this.isGridValidVsDesign = function(numFactors) {
        if (this.isEmpty()) {
            return false;
        } else {
            var k;
            for (k = 0; k < this.getDesignGrid().length; k++) {
                if (this.getDesignGrid()[k].length != numFactors) {
                    return false;
                }
            }
        }
        return true;
    };
    this.indexDesignVsRange = function(k, i) {
        return this.rangeMaps[i][hash(this.getDesignGrid()[k][i])];
    };
    this.getDesignGrid = function() {
        if (designGrid.length == 0 && numsLevelsPerFactor.length > 0) {
            var ranges = [];
            var numDesigns = 1;
            var i, j;
            for (i = 0; i < numsLevelsPerFactor.length; i++) {
                ranges.push([]);
                numDesigns *= numsLevelsPerFactor[i];
                if (numsLevelsPerFactor[i] == 1) {
                    ranges[i].push(1);
                } else {
                    for (j = -Math.floor(numsLevelsPerFactor[i]/2); j <= Math.floor(numsLevelsPerFactor[i]/2); j++) {
                        if (j != 0 || numsLevelsPerFactor[i]%2 != 0) {
                            ranges[i].push(j);
                        }
                    }
                }
            }

            var k;
            for (k = 0; k < numDesigns; k++) {
                designGrid.push([]);
            }
            var designsPerLevel = 1;
            j = 0;
            for (i = 0; i < numsLevelsPerFactor.length; i++) {
                for (k = 0; k < numDesigns; k++) {
                    designGrid[k].push(ranges[i][j]);
                    if ((k + 1)%designsPerLevel == 0) {
                        j++;
                    }
                    if (j == numsLevelsPerFactor[i]) {
                        j = 0;
                    }
                }
                designsPerLevel *= numsLevelsPerFactor[i];
            }
        }
        return designGrid;
    };
}

function doeTemplate(name, designGrid, type, resolution, generators) { //class
    this.name = name;
    this.designGrid = designGrid;
    this.type = type;
    this.resolution = resolution;
    this.generators = generators;
    this.rangeGrid = [];
    this.rangeFreqGrid = []; //aka costModGrid
    this.rangeMaps = [];
    this.isEmpty = function() {
        return this.getDesignGrid().length == 0;
    };
    this.isGridValid = function() {
        var k;
        for (k = 0; k < this.getDesignGrid().length; k++) {
            if (this.getDesignGrid()[k].length == 0 || (k > 0 && this.getDesignGrid()[k].length != this.getDesignGrid()[k - 1].length)) {
                return false;
            }
        }
        return true;
    };
    if (!this.isEmpty() && this.isGridValid()) {
        var rangeFreqMaps = [];
        var i;
        for (i = 0; i < this.designGrid[0].length; i++) {
            this.rangeGrid[i] = [];
            this.rangeFreqGrid[i] = [];
            this.rangeMaps[i] = {};
            rangeFreqMaps[i] = {};
        }
        var rangeHash;
        var k;
        for (k = 0; k < this.designGrid.length; k++) {
            for (i = 0; i < this.designGrid[k].length; i++) {
                rangeHash = hash(this.designGrid[k][i]);
                if (this.rangeMaps[i][rangeHash]) {
                    rangeFreqMaps[i][rangeHash]++;
                } else {
                    this.rangeGrid[i].push(this.designGrid[k][i]);
                    this.rangeMaps[i][rangeHash] = -1;
                    rangeFreqMaps[i][rangeHash] = 1;
                }
            }
        }
        var fullFactorialFreqs = [];
        var j;
        for (i = 0; i < this.rangeGrid.length; i++) {
            this.rangeGrid[i].sort(function(a, b) {return a - b});
            fullFactorialFreqs[i] = designGrid.length/this.rangeGrid[i].length;
            for (j = 0; j < this.rangeGrid[i].length; j++) {
                this.rangeMaps[i][hash(this.rangeGrid[i][j])] = j;
                this.rangeFreqGrid[i][j] = rangeFreqMaps[i][hash(this.rangeGrid[i][j])]/fullFactorialFreqs[i];
            }
        }
    }
    this.isRangeValid = function(numsLevelsPerFactor) {
        var i;
        for (i = 0; i < this.rangeGrid.length; i++) {
            if (this.rangeGrid[i].length == 0) {
                return false;
            }
        }
        if (arguments.length > 0) {
            if (this.rangeGrid.length != numsLevelsPerFactor.length) {
                return false;
            } else {
                for (i = 0; i < this.rangeGrid.length; i++) {
                    if (this.rangeGrid[i].length != numsLevelsPerFactor[i]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    this.isRangeValidVsDesign = function(numsLevelsPerFactor) {
        var i;
        if (this.rangeGrid.length != numsLevelsPerFactor.length) {
            return false;
        } else {
            for (i = 0; i < this.rangeGrid.length; i++) {
                if (this.rangeGrid[i].length != numsLevelsPerFactor[i]) {
                    return false;
                }
            }
        }
        return true;
    };
    this.isGridValidVsDesign = function(numFactors) {
        if (this.isEmpty()) {
            return false;
        } else {
            var k;
            for (k = 0; k < this.getDesignGrid().length; k++) {
                if (this.getDesignGrid()[k].length != numFactors) {
                    return false;
                }
            }
        }
        return true;
    };
    this.indexDesignVsRange = function(k, i) {
        return this.rangeMaps[i][hash(this.getDesignGrid()[k][i])];
    };
    this.getDesignGrid = function() {
        return designGrid;
    };
}


function doeTemplater() { //function
    this.doeTypes = {fullFactorial: "fullFactorial", fractionalFactorial: "fractionalFactorial", plackettBurman: "plackettBurman",
        boxBehnken: "boxBehnken"};
    this.makeFullFactorial = function(numsLevelsPerFactor) {
        return new fullFactorialTemplate(this.makeFullFactorialName(numsLevelsPerFactor), numsLevelsPerFactor, this.doeTypes.fullFactorial);
    };
    this.makeFullFactorialName = function(numsLevelsPerFactor) {
        var templateName;
        if (numsLevelsPerFactor.length > 0) {
            templateName = "Full Factorial (" + numsLevelsPerFactor.length + "x";
            var isLPFConstant = function(numsLevelsPerFactor) {
                for (var i = 1; i < numsLevelsPerFactor.length; i++) {
                    if (numsLevelsPerFactor[i] != numsLevelsPerFactor[i - 1]) {
                        return false;
                    }
                }
                return true;
            };
            if (isLPFConstant(numsLevelsPerFactor)) {
                templateName += numsLevelsPerFactor[0] + ")";
            } else {
                for (var i = 0; i < numsLevelsPerFactor.length; i++) {
                    templateName += numsLevelsPerFactor[i] + ",";
                }
                templateName = templateName.substring(0, templateName.length - 1) + ")";
            }
        } else {
            templateName = "Full Factorial (Any Size)";
        }
        return templateName;
    };
    this.makeFractionalFactorial = function(numFactors, resolution) {
        var designGrid = [];
        if (numFactors > 0) {
            var calculateBaseFactors = function(numFactors, resolution, templater) {
                var numBaseFactors = resolution - 1;
                var calculateNumAliasedFactors = function(numBaseFactors, resolution) {
                    var numAliasedFactors = 0;
                    var i;
                    for (var i = resolution - 1; i <= numBaseFactors; i++) {
                        numAliasedFactors += combinatorial(numBaseFactors, i);
                    }
                    return numAliasedFactors;
                };
                while (numBaseFactors + calculateNumAliasedFactors(numBaseFactors, resolution) < numFactors) {
                    numBaseFactors++;
                }
                var baseFactors = [];
                var numsLevelsPerFactor = [];
                var i;
                for (i = 0; i < numBaseFactors; i++) {
                    baseFactors[i] = [];
                    numsLevelsPerFactor[i] = 2;
                }
                var fullFactorial = templater.makeFullFactorial(numsLevelsPerFactor);
                var k;
                for (k = 0; k < fullFactorial.getDesignGrid().length; k++) {
                    for (i = 0; i < fullFactorial.getDesignGrid()[k].length; i++) {
                        baseFactors[i].push(fullFactorial.getDesignGrid()[k][i]);
                    }
                }
                return baseFactors;
            };
            var baseFactors = calculateBaseFactors(numFactors, resolution, this);
            var aliasFactors = function(baseFactors, resolution) {
                var aliasFactorsHelper = function(baseFactors, aliasSize, start) {
                    var aliasedFactors = [];
                    var generators = [];
                    aliasSize--;
                    var i;
                    if (aliasSize > 0) {
                        var aliasingResults;
                        var r;
                        for (i = start + 1; i < baseFactors.length; i++) {
                            aliasingResults = aliasFactorsHelper(baseFactors, aliasSize, i);
                            for (r = 0; r < aliasingResults.aliasedFactors.length; r++) {
                                aliasedFactors.push(arrayProduct(baseFactors[i - 1], aliasingResults.aliasedFactors[r]));
                                generators.push([i - 1].concat(aliasingResults.generators[r]));
                            }
                        }
                    } else {
                        aliasedFactors = aliasedFactors.concat(baseFactors.slice(start));
                        for (i = start; i < baseFactors.length; i++) {
                            generators.push([i]);
                        }
                    }
                    return {aliasedFactors: aliasedFactors, generators: generators};
                };
                var aliasedFactors = [];
                var generators = [];
                var aliasSize;
                var aliasingResults;
                var i = baseFactors.length - 1;
                var g;
                for (aliasSize = resolution - 1; aliasSize <= baseFactors.length; aliasSize++) {
                    aliasingResults = aliasFactorsHelper(baseFactors, aliasSize, 0);
                    aliasedFactors = aliasedFactors.concat(aliasingResults.aliasedFactors);
                    for (g = 0; g < aliasingResults.generators.length; g++) {
                        i++;
                        generators.push(aliasingResults.generators[g].concat([i]));
                    }
                }
                return {aliasedFactors: aliasedFactors, generators: generators};
            };
            var aliasingResults = aliasFactors(baseFactors, resolution);
            var designsByFactor = baseFactors.concat(aliasingResults.aliasedFactors);
            if (designsByFactor.length > numFactors) {
                designsByFactor = designsByFactor.slice(0, numFactors);
                aliasingResults.generators = aliasingResults.generators.slice(0, numFactors);
            }
            var i, k;
            for (k = 0; k < designsByFactor[0].length; k++) {
                designGrid.push([]);
            }
            for (i = 0; i < designsByFactor.length; i++) {
                for (k = 0; k < designsByFactor[i].length; k++) {
                    designGrid[k].push(designsByFactor[i][k]);
                }
            }
            return new doeTemplate(this.makeFractionalFactorialName(numFactors, 2, resolution), designGrid, this.doeTypes.fractionalFactorial,
                resolution, aliasingResults.generators);
        } else {
            return new doeTemplate(this.makeFractionalFactorialName(numFactors, 2, resolution), designGrid, this.doeTypes.fractionalFactorial,
                resolution);
        }

    };
    this.makeFractionalFactorialName = function(numFactors, numLevelsPerFactor, resolution) {
        var templateName;
        if (numFactors > 0) {
            templateName = "Fractional Factorial (" + numFactors + "x" + numLevelsPerFactor + ")";
        } else {
            templateName = "Fractional Factorial (Nx2)";
        }
        if (resolution == 3) {
            templateName += " III";
        } else if (resolution == 4) {
            templateName += " IV";
        } else if (resolution == 5) {
            templateName += " V";
        }
        return templateName;
    };
    this.makePlackettBurman = function(numFactors) {
        var designGrid = [];
        if (numFactors > 0 && numFactors < 24) {
            var numDesigns = numFactors + 1;
            while (numDesigns % 4 != 0) {
                numDesigns++;
            }
            designGrid.push([]);
            var pbSeed = plackettBurmanSeeds[hash(numDesigns)];
            var i;
            for (i = 0; i < pbSeed.length; i++) {
                designGrid[0].push(pbSeed[i]);
            }
            var k;
            for (k = 1; k < numDesigns - 1; k++) {
                designGrid.push([]);
                designGrid[k].push(designGrid[k - 1][pbSeed.length - 1]);
                for (i = 0; i < pbSeed.length - 1; i++) {
                    designGrid[k].push(designGrid[k - 1][i]);
                }
            }
            designGrid.push([]);
            for (i = 0; i < pbSeed.length; i++) {
                designGrid[numDesigns - 1].push(-1);
            }
            if (numFactors < pbSeed.length) {
                var factorDifference = pbSeed.length - numFactors;
                for (k = 0; k < numDesigns; k++) {
                    designGrid[k].splice(numFactors, factorDifference);
                }
            }
        }
        return new doeTemplate(this.makePlackettBurmanName(numFactors), designGrid, this.doeTypes.plackettBurman);
    };
    this.makePlackettBurmanName = function(numFactors) {
        if (numFactors > 0) {
            return "Plackett Burman (" + numFactors + "x2)";
        } else {
            return "Plackett Burman (N<24x2)"
        }
    };
    this.makeBoxBehnken = function(numFactors) {
        var designGrid = [];
        if (numFactors > 2 && numFactors < 13 && numFactors != 8) {
            var bbSeed = boxBehnkenSeeds[hash(numFactors)];
            var numsLevelsPerFactor = [];
            var i;
            for (i = 0; i < bbSeed[0].length; i++) {
                if (bbSeed[0][i] == 1) {
                    numsLevelsPerFactor.push(2);
                }
            }
            var fullFactorial = this.makeFullFactorial(numsLevelsPerFactor);
            var k = 0;
            var b, m, n;
            for (b = 0; b < bbSeed.length; b++) {
                if (bbSeed[b].length == 1) {
                    for (m = 0; m < bbSeed[b][0]; m++) {
                        designGrid.push([]);
                        for (i = 0; i < numFactors; i++) {
                            designGrid[k].push(0);
                        }
                        k++;
                    }
                } else {
                    for (m = 0; m < fullFactorial.getDesignGrid().length; m++) {
                        n = 0;
                        designGrid.push([]);
                        for (i = 0; i < bbSeed[b].length; i++) {
                            if (bbSeed[b][i] == 1) {
                                designGrid[k].push(fullFactorial.getDesignGrid()[m][n]);
                                n++;
                            } else {
                                designGrid[k].push(bbSeed[b][i]);
                            }
                        }
                        k++;
                    }
                }
            }
        }
        return new doeTemplate(this.makeBoxBehnkenName(numFactors), designGrid, this.doeTypes.boxBehnken);
    };
    this.makeBoxBehnkenName = function(numFactors) {
        if (numFactors > 0) {
            return "Box Behnken (" + numFactors + "x3)";
        } else {
            return "Box Behnken (2<N<13x3, N/=8)"
        }
    };
    this.parseTemplate = function(name, data) {
        var designGrid = [];
        var ranges = [];
        if (data != null) {
            var i, k;
            var minK;
            var minI = -1;
            var maxI = -1;
            for (k = 0; k < data.length; k++) {
                i = 0;
                while (minI < 0 && i < data[k].length) {
                    if (i > 0 && !isNaN(data[k][i]) && data[k][i] !== ""
                        && !isNaN(data[k][i - 1]) && data[k][i - 1] !== "") {
                        minI = i;
                        minK = k;
                    } else {
                        i++;
                    }
                }
                while (maxI < 0 && i < data[k].length) {
                    if (!isNaN(data[k][i]) && data[k][i] !== ""
                        && (i + 1 == data[k].length || isNaN(data[k][i + 1]) || data[k][i + 1] === "")) {
                        maxI = i;
                    } else {
                        i++;
                    }
                }
                if (minI >= 0 && maxI >= minI && minI < data[k].length) {
                    i = minI;
                    designGrid.push([]);
                    while (!isNaN(data[k][i]) && data[k][i] !== "" && i <= maxI) {
                        designGrid[k - minK].push(data[k][i]);
                        i++;
                    }
                }
            }
        }
        return new doeTemplate(name, designGrid);
    };
    this.serializeTemplate = function(template) {
        var outputData = [[]];
        outputData[0].push(template.name);
        var i;
        for (i = 0; i < template.rangeGrid.length; i++) {
            outputData[0][i + 1] = "Factor " + i;
        }
        var k;
        for (k = 0; k < template.getDesignGrid().length; k++) {
            outputData.push([k + 1].concat(template.getDesignGrid()[k]));
        }
        if (template.generators != null) {
            outputData[0].push("Generators");
            var g;
            for (g = 0; g < template.generators.length; g++) {
                if (g + 1 == outputData.length) {
                    outputData.push([]);
                    for (i = 0; i < template.rangeGrid.length + 1; i++) {
                        outputData[g + 1].push("");
                    }
                }
                outputData[g + 1].push(template.generators[g].toString());
            }
        }
        return outputData;
    };
}



function lClusterer() {
    this.templateCluster = function(fNodes, lNodes, doeTemplate, numClusterings) {
        var numsClusters = [];
        var i;
        for (i = 0; i < doeTemplate.rangeGrid.length; i++) {
            numsClusters[i] = doeTemplate.rangeGrid[i].length;
        }
        var clusterGrid = this.lfMeansCluster(fNodes, lNodes, numsClusters, numClusterings);
        fNodes = this.retargetNodes(fNodes, clusterGrid, doeTemplate);
        return this.targetedCluster(fNodes, lNodes);
    };
    this.lfMeansCluster = function(fNodes, lNodes, numsClusters, numClusterings) {
        var processNumsClusters = function(numsClusters, numFactors) {
            if (numsClusters.constructor !== Array) {
                numsClusters = [numsClusters];
                var i;
                for (i = 1; i < numFactors; i++) {
                    numsClusters[i] = numsClusters[0];
                }
            }
            return numsClusters;
        };
        var composeConstraints = function(fNodes, numsClusters) {
            var constraintMap = {};
            var constraintKeys;
            var constraintNodes;
            var i, j;
            for (i = 0; i < fNodes.length; i++) {
                constraintKeys = [];
                constraintNodes = [];
                for (j = 0; j < fNodes[i].children.length; j++) {
                    if (fNodes[i].children[j].isConstraint) {
                        constraintKeys.push(hash(fNodes[i].children[j].bioDesign));
                        constraintNodes.push(fNodes[i].children[j]);
                    }
                }
                if (constraintKeys.length > 0) {
                    constraintKeys.sort();
                } else {
                    constraintKeys[0] = "unconstrained";
                }
                constraintKeys.push(numsClusters[i]);
                if (constraintMap[constraintKeys.toString()]) {
                    constraintMap[constraintKeys.toString()].indices.push(i);
                } else {
                    constraintMap[constraintKeys.toString()] = {indices: [i], nodes: constraintNodes, numClusters: numsClusters[i]};
                }
            }
            var constraints = [];
            var constraintKey;
            for (constraintKey in constraintMap) {
                if (constraintMap.hasOwnProperty(constraintKey)) {
                    constraints.push(constraintMap[constraintKey]);
                }
            }
            return constraints;
        };
        var makeClusterGrid = function(lNodes, kMeansCluster, constraints) {
            var clusterGrid = [];
            var clusters;
            var m, n;
            for (m = 0; m < constraints.length; m++) {
                clusters = kMeansCluster(lNodes, constraints[m].numClusters, constraints[m].nodes);
                for (n = 0; n < constraints[m].indices.length; n++) {
                    clusterGrid[constraints[m].indices[n]] = clusters;
                }
            }
            return clusterGrid;
        };
        var calculateClusteringCost = function(clusterGrid, constraints) {
            var totalClusteringCost = 0;
            var clusteringCost;
            var m, i, j;
            for (m = 0; m < constraints.length; m++) {
                clusteringCost = 0;
                i = constraints[m].indices[0];
                for (j = 0; j < clusterGrid[i].length; j++) {
                    clusteringCost += clusterGrid[i][j].calculateClusterCost();
                }
                totalClusteringCost += constraints[m].indices.length*clusteringCost;
            }
            return totalClusteringCost;
        };
        numsClusters = processNumsClusters(numsClusters, fNodes.length);
        var constraints = composeConstraints(fNodes, numsClusters);
        var clusterGrid;
        var clusteringCost;
        var bestClusterGrid;
        var bestClusteringCost = -1;
        var clusteringCount = 0;
        while (clusteringCount <= numClusterings) {
            clusterGrid = makeClusterGrid(lNodes, this.kMeansCluster, constraints);
            clusteringCost = calculateClusteringCost(clusterGrid, constraints);
            if (bestClusteringCost < 0 || clusteringCost < bestClusteringCost) {
                bestClusteringCost = clusteringCost;
                bestClusterGrid = clusterGrid;
            }
            clusteringCount++;
        }
        var i, j;
        for (i = 0; i < bestClusterGrid.length; i++) {
            bestClusterGrid[i].sort(function(a, b) {return a.target - b.target});
            for (j = 0; j < bestClusterGrid[i].length; j++) {
                bestClusterGrid[i][j].calculateMaxFeatures();
                bestClusterGrid[i][j].calculateMinFeatures();
            }
        }
        return bestClusterGrid;
    };
    this.kMeansCluster = function(lNodes, numClusters, constraintNodes) {
        if (arguments.length < 3) {
            constraintNodes = [];
        }
        var initializeClusters = function(lNodes, numClusters, constraintNodes) {
            var clusters = [];
            var i;
            for (i = 0; i < constraintNodes.length; i++) {
                clusters[i] = new lCluster([constraintNodes[i]], constraintNodes[i].parameter.value);
            }
            var targetNodes = [];
            var k;
            for (k = 0; k < lNodes.length; k++) {
                targetNodes[k] = lNodes[k];
            }
            var targetNode;
            var targetRecord = {};
            var j = 0;
            while (j < numClusters - constraintNodes.length && targetNodes.length > 0) {
                targetNode = targetNodes.splice(Math.floor(Math.random()*targetNodes.length), 1)[0];
                if (!targetRecord[hash(targetNode.parameter.value)]) {
                    targetRecord[hash(targetNode.parameter.value)] = true;
                    clusters.push(new lCluster([], targetNode.parameter.value));
                    j++;
                }
            }
            return clusters;
        };
        var populateClusters = function(clusters, lNodes) {
            var levelCost;
            var bestLevelCost;
            var bestJ;
            var j, k;
            for (k = 0; k < lNodes.length; k++) {
                bestLevelCost = -1;
                for (j = 0; j < clusters.length; j++) {
                    levelCost = lNodes[k].cost(clusters[j].target);
                    if (bestLevelCost < 0 || levelCost < bestLevelCost) {
                        bestJ = j;
                        bestLevelCost = levelCost;
                    }
                }

                if (!clusters[bestJ].isBioDesignConstraint(lNodes[k].bioDesign)) {
                    clusters[bestJ].lNodes.push(lNodes[k]);
                }
            }
            return clusters;
        };
        var areClustersEqual = function(clusters, otherClusters) {
            if (clusters.length != otherClusters.length) {
                return false;
            } else {
                var j;
                for (j = 0; j < clusters.length; j++) {
                    if (!clusters[j].isEqualTo(otherClusters[j])) {
                        return false;
                    }
                }
                return true;
            }
        };
        var recalculateClusters = function(clusters) {
            var clusterTotal;
            var j, k;
            for (j = 0; j < clusters.length; j++) {
                if (!clusters[j].isConstrained()) {
                    clusterTotal = 0;
                    for (k = 0; k < clusters[j].lNodes.length; k++) {
                        clusterTotal += clusters[j].lNodes[k].parameter.value;
                    }
                    clusters[j].target = clusterTotal/clusters[j].lNodes.length;
                }
            }
            return clusters;
        };
        var clusters = initializeClusters(lNodes, numClusters, constraintNodes);
        var hasConverged;
        var oldClusters = [];
        var j;
        do{
            clusters = populateClusters(clusters, lNodes);
            hasConverged = areClustersEqual(clusters, oldClusters);
            if (!hasConverged) {
                clusters = recalculateClusters(clusters);
                oldClusters = [];
                for (j = 0; j < clusters.length; j++) {
                    oldClusters[j] = clusters[j].copy();
                    clusters[j].lNodes = [];
                    if (oldClusters[j].isConstrained()) {
                        clusters[j].lNodes[0] = oldClusters[j].lNodes[0];
                    }
                }
            }
        } while (!hasConverged);
        return clusters;
    };
    this.targetedCluster = function(fNodes, lNodes) {
        var initializeClusterGrid = function(fNodes) {
            var clusterGrid = [];
            var i, j;
            var $minTarget = 0;
            var $maxTarget = 1000000;
            for (i = 0; i < fNodes.length; i++) {
                clusterGrid[i] = [];
                for (j = 0; j < fNodes[i].levelTargets.length; j++) {
                    if (fNodes[i].levelTargets.length == 0) {
                        clusterGrid[i][0] = new lCluster([], $minTarget);
                        clusterGrid[i][1] = new lCluster([], $maxTarget);
                    } else {
                        clusterGrid[i][j] = new lCluster([], fNodes[i].levelTargets[j]);
                    }
                }
            }
            return clusterGrid;
        };
        var makeConstraintGrid = function(fNodes) {
            var constraintGrid = [];
            var i, j;
            for (i = 0; i < fNodes.length; i++) {
                constraintGrid[i] = [];
                for (j = 0; j < fNodes[i].children.length; j++) {
                    if (fNodes[i].children[j].isConstraint) {
                        constraintGrid[i].push(fNodes[i].children[j]);
                    }
                }
            }
            return constraintGrid;
        };
        var constrainClusterGrid = function(clusterGrid, constraintGrid) {
            var clusters;
            var constraintNodes;
            var bestJ;
            var targetConstraintToCluster = function(constraintNode, clusters) {
                var targetCost;
                var bestTargetCost = -1;
                var bestJ = -1;
                var j;
                for (j = 0; j < clusters.length; j++) {
                    targetCost = constraintNode.cost(clusters[j].target);
                    if (bestTargetCost < 0 || targetCost < bestTargetCost) {
                        bestTargetCost = targetCost;
                        bestJ = j;
                    }
                }
                return bestJ;
            };
            var unconstrainedClusters = [];
            var unusedConstraints = [];
            var i, j, c;
            for (i = 0; i < clusterGrid.length; i++) {
                clusters = clusterGrid[i];
                constraintNodes = constraintGrid[i];
                clusterGrid[i] = [];
                constraintGrid[i] = [];
                while (clusters.length > 0 && constraintNodes.length > 0) {
                    for (c = 0; c < constraintNodes.length; c++) {
                        bestJ = targetConstraintToCluster(constraintNodes[c], clusters);
                        if (clusters[bestJ].isConstrained()) {
                            if (constraintNodes[c].cost(clusters[bestJ].target)
                                < clusters[bestJ].lNodes[0].cost(clusters[bestJ].target)) {
                                unusedConstraints.push(clusters[bestJ].lNodes[0]);
                                clusters[bestJ].lNodes[0] = constraintNodes[c];
                            } else {
                                unusedConstraints.push(constraintNodes[c]);
                            }
                        } else {
                            clusters[bestJ].lNodes[0] = constraintNodes[c];
                        }
                    }
                    for (j = 0; j < clusters.length; j++) {
                        if (clusters[j].isConstrained()) {
                            clusterGrid[i].push(clusters[j]);
                        } else {
                            unconstrainedClusters.push(clusters[j]);
                        }
                    }
                    clusters = unconstrainedClusters;
                    constraintNodes = unusedConstraints;
                    unusedConstraints = [];
                    unconstrainedClusters = [];
                }
                for (j = 0; j < clusters.length; j++) {
                    clusterGrid[i].push(clusters[j]);
                }
                for (j = 0; j < constraintNodes.length; j++) {
                    bestJ = targetConstraintToCluster(constraintNodes[j], clusterGrid[i]);
                    clusterGrid[i][bestJ].lNodes.push(constraintNodes[j]);
                }
            }
            return clusterGrid;
        };
        var clusterGrid = initializeClusterGrid(fNodes);
        var constraintGrid = makeConstraintGrid(fNodes);
        clusterGrid = constrainClusterGrid(clusterGrid, constraintGrid);
        var levelCost;
        var bestLevelCost;
        var bestJ;
        var i, j, k;
        for (k = 0; k < lNodes.length; k++) {
            for (i = 0; i < clusterGrid.length; i++) {
                bestLevelCost = - 1;
                for (j = 0; j < clusterGrid[i].length; j++) {
                    levelCost = lNodes[k].cost(clusterGrid[i][j].target);
                    if (bestLevelCost < 0 || levelCost < bestLevelCost) {
                        bestLevelCost = levelCost;
                        bestJ = j;
                    }
                }
                if (!clusterGrid[i][bestJ].isBioDesignConstraint(lNodes[k].bioDesign)) {
                    clusterGrid[i][bestJ].lNodes.push(lNodes[k]);
                }
            }
        }
        for (i = 0; i < clusterGrid.length; i++) {
            clusterGrid[i].sort(function(a, b) {return a.target - b.target});
            for (j = 0; j < clusterGrid[i].length; j++) {
                clusterGrid[i][j].calculateLevelCosts();
                // clusterGrid[i][j].calculateMaxFeatures();
                // clusterGrid[i][j].calculateMinFeatures();
            }
        }
        return clusterGrid;
    };
    this.retargetNodes = function(fNodes, clusterGrid, doeTemplate) {
        var linReg;
        var logReg;
        var xData;
        var yData;
        var i, j;
        for (i = 0; i < fNodes.length; i++) {
            fNodes[i].levelTargets = [];
            xData = [];
            yData = [];
            for (j = 0; j < doeTemplate.rangeGrid[i].length; j++) {
                xData[j] = doeTemplate.rangeGrid[i][j];
            }
            for (j = 0; j < clusterGrid[i].length; j++) {
                yData[j] = clusterGrid[i][j].target;
            }
            if (xData.length <= 2) {
                for (j = 0; j < yData.length; j++) {
                    fNodes[i].levelTargets[j] = parseFloat(yData[j].toFixed(2));
                }
            } else {
                linReg = new LinearRegression(xData, yData);
                logReg = new LogYRegression(xData, yData);
                if (linReg.se < logReg.se) {
                    for (j = 0; j < xData.length; j++) {
                        if (clusterGrid[i][j].isConstrained()) {
                            fNodes[i].levelTargets[j] = parseFloat(yData[j].toFixed(2));
                        } else {
                            fNodes[i].levelTargets[j] = parseFloat(linReg.estimate(xData[j]).toFixed(2));
                        }
                    }
                } else {
                    for (j = 0; j < xData.length; j++) {
                        if (clusterGrid[i][j].isConstrained()) {
                            fNodes[i].levelTargets[j] = parseFloat(yData[j].toFixed(2));
                        } else {
                            fNodes[i].levelTargets[j] = parseFloat(Math.pow(10, logReg.estimate(xData[j])).toFixed(2));
                        }
                    }
                }
            }
        }
        return fNodes;
    };
}

function flSolver() {
    this.randomSolve = function(clusterGrid, weights, synthesisOption, numTrials, costModGrid) {
        if (arguments.length < 6) {
            //timer = new Timer();
        }
        var soln;
        var solnCost;
        var bestSoln;
        var bestSolnCost;
        var trialCount = 0;
        var i, j;
        while (trialCount < numTrials) {
            soln = new $FLSolution(clusterGrid);
            for (i = 0; i < soln.levelSelections.length; i++) {
                for (j = 0; j < soln.levelSelections[i].length; j++) {
                    if (!soln.clusterGrid[i][j].isConstrained()) {
                        soln = this.mutateSolution(soln, i, j);
                    }
                }
            }
            solnCost = soln.calculateCost(weights, synthesisOption, costModGrid);
            if (trialCount == 0 || solnCost.weightedTotal < bestSoln.weightedTotal) {
                bestSoln = soln;
                bestSolnCost = solnCost;
            }
            trialCount++;
        }
        return bestSoln;
    };
    this.mutateSolution = function(soln, i, j) {
        var mutantSoln = soln.copy();
        if (mutantSoln.clusterGrid[i][j].lNodes.length > 1) {
            var k;
            do {
                k = Math.floor(Math.random()*mutantSoln.clusterGrid[i][j].lNodes.length);
            } while (k == mutantSoln.levelSelections[i][j]);
            mutantSoln.levelSelections[i][j] = k;
        }
        return mutantSoln;
    };
    this.greedySolve = function(clusterGrid, synthesisOption, weights, numTrials, costModGrid, solution){
        console.log();
        console.log("GREEDY");
        var t1;
        var t2;
        var totaltime = 0;
        var totalOverallSolnCost = 0;
        var LevelCost = 0;
        var DNACost = 0;
        var PathwayCost = 0;
        var numTrials = 1;
        for (var x = 0; x < numTrials; x++) {
            t1 = Date.now();
            var soln;
            var solnCost;
            var bestSoln = solution.copy();
            var bestSolnCost = bestSoln.calculateCost(weights, synthesisOption, costModGrid);
            for (var i = 0; i < bestSoln.levelSelections.length; i++) {
                for (var j = 0; j < bestSoln.levelSelections[i].length; j++) {
                    if (!bestSoln.clusterGrid[i][j].isConstrained() && bestSoln.clusterGrid[i][j].lNodes.length > 1) {
                        soln = bestSoln.copy();
                        for (var k = 0; k < soln.clusterGrid[i][j].lNodes.length; k++){
                            soln.levelSelections[i][j] = k;
                            solnCost = soln.calculateCost(weights, synthesisOption, costModGrid);
                            if (solnCost.weightedTotal < bestSolnCost.weightedTotal){
                                bestSoln = soln.copy();
                                bestSolnCost = bestSoln.calculateCost(weights, synthesisOption, costModGrid);
                            }
                        }
                    }
                }
            }
            t2 = Date.now();
            if (x == 0 || bestSolnCost.weightedTotal < bestOverallSolnCost.weightedTotal){
                bestOverallSoln = bestSoln.copy();
                bestOverallSolnCost = bestOverallSoln.calculateCost(weights, synthesisOption, costModGrid);
            }
            totaltime += (t2-t1)/1000;
            totalOverallSolnCost += bestOverallSolnCost.weightedTotal;
            LevelCost += bestOverallSolnCost.levelMatch;
            DNACost += bestOverallSolnCost.synthesis;
            PathwayCost += bestOverallSolnCost.homology;

        }
        console.log("AVERAGE TOTAL COST:");
        console.log(totalOverallSolnCost/numTrials);
        /*console.log("Level Matching Cost:");
         console.log(LevelCost/numTrials);
         console.log("DNA Synthesis Cost:");
         console.log(DNACost/numTrials);
         console.log("Pathway Homology Cost:");
         console.log(PathwayCost/numTrials);
         console.log("AVERAGE TIME:");
         console.log(totaltime/numTrials);*/
        return totalOverallSolnCost;
    };
    this.repGreedySolve = function(clusterGrid, synthesisOption, weights, numMaxIterations, costModGrid, solution){
        console.log();
        console.log("REP GREEDY");
        var t1;
        var t2;
        var totaltime = 0;
        var totalOverallSolnCost = 0;
        var LevelCost = 0;
        var DNACost = 0;
        var PathwayCost = 0;
        var numTrials = 1;
        for (var x = 0; x < numTrials; x++) {
            t1 = Date.now();
            var bestSoln = solution.copy();
            var bestSolnCost = bestSoln.calculateCost(weights, synthesisOption, costModGrid);
            console.log("Inital Cost: " + bestSolnCost.weightedTotal);
            var bestOverallSoln;
            var bestOverallSolnCost;
            var counter = 0;
            var sameCost = false;
            while(counter < numMaxIterations && !sameCost) {
                var soln;
                var solnCost;
                for (var i = 0; i < bestSoln.levelSelections.length; i++) {
                    for (var j = 0; j < bestSoln.levelSelections[i].length; j++) {
                        if (!bestSoln.clusterGrid[i][j].isConstrained() && bestSoln.clusterGrid[i][j].lNodes.length > 1) {
                            soln = bestSoln.copy();
                            for (var k = 0; k < soln.clusterGrid[i][j].lNodes.length; k++){
                                soln.levelSelections[i][j] = k;
                                solnCost = soln.calculateCost(weights, synthesisOption, costModGrid);
                                //console.log(solnCost.weightedTotal);
                                if (solnCost.weightedTotal < bestSolnCost.weightedTotal){
                                    //console.log("cluster " + i + " " + j + " was changed");
                                    bestSoln = soln.copy();
                                    bestSolnCost = bestSoln.calculateCost(weights, synthesisOption, costModGrid);
                                }
                            }
                        }
                    }
                }
                if (counter == 0 || bestSolnCost.weightedTotal < bestOverallSolnCost.weightedTotal){
                    bestOverallSoln = bestSoln.copy();
                    bestOverallSolnCost = bestOverallSoln.calculateCost(weights, synthesisOption, costModGrid);
                }
                else if (bestSolnCost.weightedTotal == bestOverallSolnCost.weightedTotal){
                    sameCost = true;
                }
                console.log("Counter: " + counter + " Cost: " + bestOverallSolnCost.weightedTotal);
                counter++;
            }
            t2 = Date.now();
            totaltime += (t2-t1)/1000;
            totalOverallSolnCost += bestOverallSolnCost.weightedTotal;
            LevelCost += bestOverallSolnCost.levelMatch;
            DNACost += bestOverallSolnCost.synthesis;
            PathwayCost += bestOverallSolnCost.homology;

        }
        console.log("AVERAGE TOTAL COST:");
        console.log(totalOverallSolnCost/numTrials);
        /*console.log("Level Matching Cost:");
         console.log(LevelCost/numTrials);
         console.log("DNA Synthesis Cost:");
         console.log(DNACost/numTrials);
         console.log("Pathway Homology Cost:");
         console.log(PathwayCost/numTrials);
         console.log("AVERAGE TIME:");
         console.log(totaltime/numTrials);*/
        return totalOverallSolnCost;
    };
    this.posGreedySolve = function(clusterGrid, synthesisOption, weights, numMaxIterations, costModGrid){
        var t1;
        var t2;
        var totaltime = 0;
        var totalOverallSolnCost = 0;
        var LevelCost = 0;
        var DNACost = 0;
        var PathwayCost = 0;
        var numTrials = 100;
        for (var x = 0; x < numTrials; x++) {
            t1 = Date.now();
            var bestSoln = this.randomSolve(clusterGrid, weights, synthesisOption, 1, costModGrid);
            var bestSolnCost = bestSoln.calculateCost(weights, synthesisOption, costModGrid);
            var InitalSoln = bestSoln.copy();
            //console.log("Inital Cost: " + bestSolnCost.weightedTotal);
            var bestOverallSoln;
            var bestOverallSolnCost;
            var counter = 0;
            var size = 0;
            var a;
            var b;
            for (a = 0; a < bestSoln.levelSelections.length; a++) {
                for (b = 0; b < bestSoln.levelSelections[a].length; b++) {
                    size++;
                }
            }
            while(counter < size) {
                var innercounter = 0;
                var soln;
                var solnCost;
                var i;
                var j;
                for (i = 0; i < bestSoln.levelSelections.length; i++) {
                    for (j = 0; j < bestSoln.levelSelections[i].length; j++) {
                        if (innercounter == counter)
                            break;
                        else
                            innercounter++;
                    }
                    if (innercounter == counter)
                        break;
                }
                innercounter = 0;
                //soln = InitalSoln.copy();
                bestSoln = InitalSoln.copy();
                bestSolnCost = bestSoln.calculateCost(weights, synthesisOption, costModGrid);
                while (i < bestSoln.levelSelections.length && innercounter < size){
                    while (j < bestSoln.levelSelections[i].length && innercounter < size){
                        if (!bestSoln.clusterGrid[i][j].isConstrained() && bestSoln.clusterGrid[i][j].lNodes.length > 1) {
                            soln = bestSoln.copy();
                            //console.log("cluster " + i + " " + j + "checking");
                            for (var k = 0; k < soln.clusterGrid[i][j].lNodes.length; k++){
                                soln.levelSelections[i][j] = k;
                                solnCost = soln.calculateCost(weights, synthesisOption, costModGrid);
                                //console.log(solnCost.weightedTotal);
                                if (solnCost.weightedTotal < bestSolnCost.weightedTotal){
                                    //console.log("cluster " + i + " " + j + " was changed");
                                    bestSoln = soln.copy();
                                    bestSolnCost = bestSoln.calculateCost(weights, synthesisOption, costModGrid);
                                }
                            }
                        }
                        j++;
                        innercounter++;
                    }
                    i++;
                    if (i == a && j == b){
                        i = 0;
                    }
                    j = 0;
                }
                //console.log();
                //console.log("Counter: " + counter + " Best Curret Cost: " + bestSolnCost.weightedTotal);
                if (counter == 0 || bestSolnCost.weightedTotal < bestOverallSolnCost.weightedTotal){
                    bestOverallSoln = bestSoln.copy();
                    bestOverallSolnCost = bestOverallSoln.calculateCost(weights, synthesisOption, costModGrid);
                }
                //console.log("Counter: " + counter + " Best Overall Cost: " + bestOverallSolnCost.weightedTotal);
                counter++;
            }
            t2 = Date.now();
            totaltime += (t2-t1)/1000;
            totalOverallSolnCost += bestOverallSolnCost.weightedTotal;
            LevelCost += bestOverallSolnCost.levelMatch;
            DNACost += bestOverallSolnCost.synthesis;
            PathwayCost += bestOverallSolnCost.homology;

        }
        console.log("AVERAGE TOTAL COST:");
        console.log(totalOverallSolnCost/numTrials);
        console.log("Level Matching Cost:");
        console.log(LevelCost/numTrials);
        console.log("DNA Synthesis Cost:");
        console.log(DNACost/numTrials);
        console.log("Pathway Homology Cost:");
        console.log(PathwayCost/numTrials);
        console.log("AVERAGE TIME:");
        console.log(totaltime/numTrials);
        return bestOverallSoln;
    };
    this.annealSolve = function(clusterGrid, annealingOptions, weights, costModGrid, solution) {
        if (arguments.length < 5) {
            //timer = new Timer();
        }
        var t1;
        var t2;
        var totaltime = 0;
        var totalOverallSolnCost = 0;
        var LevelCost = 0;
        var DNACost = 0;
        var PathwayCost = 0;
        var numTrials = 1;
        for (var x = 0; x < numTrials; x++) {
            t1 = Date.now();
            var soln;
            var solnCost;
            var bestSoln = this.randomSolve(clusterGrid, weights, annealingOptions.synthesisOption, 1, costModGrid);
            var bestSolnCost = bestSoln.calculateCost(weights, annealingOptions.synthesisOption, costModGrid);
            var annealCount = 0;
            var temp;
            var phi = Math.pow(1/annealingOptions.initialTemp, 1/annealingOptions.iterPerAnnealing);
            var mutantSoln;
            var mutantCost;
            var i, j;
            while (annealCount < annealingOptions.numAnnealings) {
                soln = this.randomSolve(clusterGrid, weights, annealingOptions.synthesisOption, 1, costModGrid);
                solnCost = soln.calculateCost(weights, annealingOptions.synthesisOption, costModGrid);
                temp = annealingOptions.initialTemp;
                while (temp >= 1) {
                    i = Math.floor(Math.random()*soln.levelSelections.length);
                    j = Math.floor(Math.random()*soln.levelSelections[i].length);
                    if (!soln.clusterGrid[i][j].isConstrained()) {
                        mutantSoln = this.mutateSolution(soln, i, j);
                        mutantCost = mutantSoln.calculateCost(weights, annealingOptions.synthesisOption, costModGrid);
                        if (mutantCost.weightedTotal <= solnCost.weightedTotal
                            || Math.random() <= Math.exp((solnCost.weightedTotal - mutantCost.weightedTotal)*annealingOptions.probDecay*annealingOptions.initTemp/temp)) {
                            soln = mutantSoln;
                            solnCost = mutantCost;
                        }
                    }
                    temp *= phi;
                }
                if (solnCost.weightedTotal < bestSolnCost.weightedTotal) {
                    bestSoln = soln;
                    bestSolnCost = solnCost;
                }
                annealCount++;
            }
            t2 = Date.now();
            totaltime += (t2-t1)/1000;
            totalOverallSolnCost += bestSolnCost.weightedTotal;
            LevelCost += bestSolnCost.levelMatch;
            DNACost += bestSolnCost.synthesis;
            PathwayCost += bestSolnCost.homology;

        }
        console.log("AVERAGE TOTAL COST:");
        console.log(totalOverallSolnCost/numTrials);
        console.log("Level Matching Cost:");
        console.log(LevelCost/numTrials);
        console.log("DNA Synthesis Cost:");
        console.log(DNACost/numTrials);
        console.log("Pathway Homology Cost:");
        console.log(PathwayCost/numTrials);
        console.log("AVERAGE TIME:");
        console.log(totaltime/numTrials);
        return bestSoln;
    };
    this.boundSolve = function(clusterGrid, annealingOptions, weights, costModGrid, levelSelections) {
        var soln = new $FLSolution(clusterGrid);
        var bestSoln;
        if (arguments.length > 5) {
            soln.levelSelections = levelSelections;
            bestSoln = soln;
            bestSoln.levelSelections = levelSelections;
        } else {
            bestSoln = this.annealSolve(clusterGrid, annealingOptions, weights, costModGrid);
        }
        var solnCost;
        var bestSolnCost = bestSoln.calculateCost(weights, annealingOptions.synthesisOption, costModGrid);
        var backtrack = false;
        var i = 0;
        var j = 0;
        while (!backtrack) {
            while (!backtrack && j < soln.levelSelections[i].length) {
                backtrack = (soln.levelSelections[i][j] == soln.clusterGrid[i][j].lNodes.length
                || (soln.clusterGrid[i][j].isConstrained() && soln.levelSelections[i][j] > 0));
                if (!backtrack) {
                    solnCost = soln.calculateCost(weights, annealingOptions.synthesisOption, costModGrid, i, j);
                    if (solnCost.weightedTotal >= bestSolnCost.weightedTotal) {
                        soln.levelSelections[i][j]++;
                    } else if (i == soln.levelSelections.length - 1 && j == soln.levelSelections[i].length - 1) {
                        bestSoln = soln.copy();
                        bestSolnCost = solnCost;
                        soln.levelSelections[i][j]++;
                    } else {
                        j++;
                    }
                } else {
                    soln.levelSelections[i][j] = 0;
                    if (j > 0) {
                        j--;
                        soln.levelSelections[i][j]++;
                        backtrack = false;
                    }
                }
            }
            if (!backtrack) {
                i++;
                j = 0;
            } else if (i > 0) {
                i--;
                j = soln.levelSelections[i].length - 1;
                soln.levelSelections[i][j]++;
                backtrack = false;
            }
        }
        if (i == 0 && j == 0) {
            bestSoln.isOptimal = true;
        }
        return bestSoln;
    };
}










function $FLSolution(clusterGrid) {
    this.levelSelections = [];
    var i, j;
    for (i = 0; i < clusterGrid.length; i++) {
        this.levelSelections[i] = [];
        for (j = 0; j < clusterGrid[i].length; j++) {
            this.levelSelections[i][j] = 0;
        }
    }
    this.clusterGrid = clusterGrid;
};

$FLSolution.prototype.synthesisOptions = {MINIMIZE: "minimize", MAXIMIZE: "maximize"};

$FLSolution.prototype.calculateCost = function(weights, synthesisOption, costModGrid, iBound, jBound) {
    if (arguments.length < 5) {
        if (arguments.length < 4) {
            iBound = this.levelSelections.length - 1;
            if (arguments.length < 2) {
                synthesisOption = this.synthesisOptions.MINIMIZE;
                if (arguments.length < 1) {
                    weights = {levelMatch: 1, homology: 1, synthesis: 1};
                }
            }
        }
        jBound = this.levelSelections[iBound].length - 1;
    }
    var calculateNumUniqueFeatures = function(clusterGrid) {
        var featRecord = {};
        var numUniqueFeats = 0;
        var feats;
        var i, j, k, f;
        for (i = 0; i < clusterGrid.length; i++) {
            for (j = 0; j < clusterGrid[i].length; j++) {
                for (k = 0; k < clusterGrid[i][j].lNodes.length; k++) {
                    feats = clusterGrid[i][j].lNodes[k].bioDesign.module.getFeatures();
                    for (f = 0; f < feats.length; f++) {
                        if (!featRecord[hash(feats[f])]) {
                            featRecord[hash(feats[f])] = true;
                            numUniqueFeats++;
                        }
                    }
                }
            }
        }
        return numUniqueFeats;
    };
    if (!this.clusterGrid.numUniqueFeats) {
        this.clusterGrid.numUniqueFeats = calculateNumUniqueFeatures(this.clusterGrid);
    }
    var levelMatchCost = this.calculateLevelMatchCost(iBound, jBound, costModGrid);
    var synthesisCost = this.calculateSynthesisCost(iBound, jBound);
    var homologyCost = this.calculateHomologyCost(iBound, jBound, costModGrid);
    if (synthesisOption === this.synthesisOptions.MAXIMIZE) {
        synthesisCost = 1 - synthesisCost;
    }
    return {weightedTotal: weights.levelMatch*levelMatchCost + weights.homology*homologyCost + weights.synthesis*synthesisCost,
        total: levelMatchCost + homologyCost + synthesisCost, levelMatch: levelMatchCost, homology: homologyCost, synthesis: synthesisCost};
};

$FLSolution.prototype.calculateLevelMatchCost = function(iBound, jBound, costModGrid) {
    if (arguments.length < 2) {
        if (arguments.length < 1) {
            iBound = this.levelSelections.length - 1;
        }
        jBound = this.levelSelections[iBound].length - 1;
    }
    var calculateMaxLevelMatchCost = function(levelSelections, costModGrid) {
        var maxLevelMatchCost = 0;
        var i, j;
        for (i = 0; i < levelSelections.length; i++) {
            for (j = 0; j < levelSelections[i].length; j++) {
                if (costModGrid) {
                    maxLevelMatchCost += costModGrid[i][j];
                } else {
                    maxLevelMatchCost++;
                }
            }
        }
        return maxLevelMatchCost;
    };
    var levelMatchCost = 0;
    var i, j, k;
    for (i = 0; i <= iBound; i++) {
        for (j = 0; j <= (i == iBound ? jBound : this.levelSelections[i].length - 1); j++) {
            k = this.levelSelections[i][j];
            if (costModGrid) {
                levelMatchCost += this.clusterGrid[i][j].levelCosts[k]*costModGrid[i][j];
            } else {
                levelMatchCost += this.clusterGrid[i][j].levelCosts[k];
            }
        }
    }
    if (!this.maxLevelMatchCost) {
        this.maxLevelMatchCost = calculateMaxLevelMatchCost(this.levelSelections, costModGrid);
    }
    levelMatchCost /= this.maxLevelMatchCost;
    return levelMatchCost;
};

$FLSolution.prototype.calculateSynthesisCost = function(iBound, jBound) {
    if (arguments.length < 2) {
        if (arguments.length < 1) {
            iBound = this.levelSelections.length - 1;
        }
        jBound = this.levelSelections[iBound].length - 1;
    }
    var calculateMaxSynthesisCost = function(clusterGrid) {
        var maxSynthesisCost = 0;
        var i;
        for (i = 0; i < clusterGrid.length; i++) {
            maxSynthesisCost += clusterGrid[i].length*clusterGrid[i][0].lNodes[0].bioDesign.module.getFeatures().length;
        }
        return Math.min(maxSynthesisCost, clusterGrid.numUniqueFeats);
    };
    var calculateMinSynthesisCost = function(clusterGrid) {
        var minSynthesisCost = 1;
        var minFeats;
        var i, j;
        for (i = 0; i < clusterGrid.length; i++) {
            minFeats = clusterGrid[i].length - 1 + clusterGrid[i][0].lNodes[0].bioDesign.module.getFeatures().length;
            if (minSynthesisCost < minFeats) {
                minSynthesisCost = minFeats;
            }
        }
        return minSynthesisCost;
    };
    var featRecord = {};
    var feats;
    var synthesisCost = 0;
    var i, j, k, f;
    for (i = 0; i <= iBound; i++) {
        for (j = 0; j <= (i == iBound ? jBound : this.levelSelections[i].length - 1); j++) {
            k = this.levelSelections[i][j];
            feats = this.clusterGrid[i][j].lNodes[k].bioDesign.module.getFeatures();
            for (f = 0; f < feats.length; f++) {
                if (!featRecord[hash(feats[f])]) {
                    synthesisCost++;
                    featRecord[hash(feats[f])] = true;
                }
            }
        }
    }
    if (!this.maxSynthesisCost) {
        this.maxSynthesisCost = calculateMaxSynthesisCost(this.clusterGrid);
    }
    if (!this.minSynthesisCost) {
        this.minSynthesisCost = calculateMinSynthesisCost(this.clusterGrid);
    }
    synthesisCost = (synthesisCost - this.minSynthesisCost)/(this.maxSynthesisCost - this.minSynthesisCost);
    return synthesisCost;
};

$FLSolution.prototype.calculateHomologyCost = function(iBound, jBound, costModGrid) {
    if (arguments.length < 2) {
        if (arguments.length < 1) {
            iBound = this.levelSelections.length - 1;
        }
        jBound = this.levelSelections[iBound].length - 1;
    }
    var initializeFrequencies = function(numFreqs) {
        var freqs = [];
        var i;
        for (i = 0; i < numFreqs; i++) {
            freqs[i] = 0;
        }
        return freqs;
    };
    var calculateFeatureFrequencies = function(levelSelections, clusterGrid, iBound, jBound, costModGrid, initializeFrequencies) {
        var featFreqs = {};
        var feats;
        var i, j, k, f;
        for (i = 0; i <= iBound; i++) {
            for (j = 0; j <= (i == iBound ? jBound : levelSelections[i].length - 1); j++) {
                k = levelSelections[i][j];
                feats = clusterGrid[i][j].lNodes[k].bioDesign.module.getFeatures();
                for (f = 0; f < feats.length; f++) {
                    if (!featFreqs[hash(feats[f])]) {
                        featFreqs[hash(feats[f])] = initializeFrequencies(levelSelections.length);
                    }
                    if (costModGrid) {
                        featFreqs[hash(feats[f])][i] += costModGrid[i][j];
                    } else {
                        featFreqs[hash(feats[f])][i]++;
                    }
                }
            }
        }
        return featFreqs;
    };
    var calculateMaxFeatureFrequencies = function(clusterGrid, costModGrid, initializeFrequencies) {
        var maxFeatFreqs = {};
        var maxFeatHash;
        var i, j, f;
        for (i = 0; i < clusterGrid.length; i++) {
            for (j = 0; j < clusterGrid[i].length; j++) {
                for (f = 0; f < clusterGrid[i][0].lNodes[0].bioDesign.module.getFeatures().length; f++) {
                    maxFeatHash = "maxFeat" + f;
                    if (f == clusterGrid[i][0].lNodes[0].bioDesign.module.getFeatures().length - 1) {
                        maxFeatHash += j;
                    }
                    if (!maxFeatFreqs[maxFeatHash]) {
                        maxFeatFreqs[maxFeatHash] = initializeFrequencies(clusterGrid.length);
                    }
                    if (costModGrid) {
                        maxFeatFreqs[maxFeatHash][i] += costModGrid[i][j];
                    } else {
                        maxFeatFreqs[maxFeatHash][i]++;
                    }
                }
            }
        }
        return maxFeatFreqs;
    };
    var calculateMinFeatureFrequencies = function(clusterGrid, costModGrid, initializeFrequencies) {
        var costFeatures = function(clusterGrid, costModGrid) {
            var costedFeats = [];
            var featCount = 0;
            var i, j, f;
            for (i = 0; i < clusterGrid.length; i++) {
                costedFeats[i] = [];
                for (j = 0; j < clusterGrid[i].length; j++) {
                    costedFeats[i][j] = {featHashes: [], f: 0};
                    if (costModGrid) {
                        costedFeats[i][j].cost = costModGrid[i][j];
                    } else {
                        costedFeats[i][j].cost = 1;
                    }
                    for (f = 0; f < clusterGrid[i][0].lNodes[0].bioDesign.module.getFeatures().length; f++) {
                        costedFeats[i][j].featHashes[f] = "minFeat" + featCount;
                        featCount++;
                    }
                }
            }
            return costedFeats;
        };
        var countFeatures = function(clusterGrid) {
            var featCount = 0;
            var i, j;
            for (i = 0; i < clusterGrid.length; i++) {
                for (j = 0; j < clusterGrid[i].length; j++) {
                    featCount += clusterGrid[i][0].lNodes[0].bioDesign.module.getFeatures().length;
                }
            }
            return featCount;
        };
        var sortFeaturesByCost = function(costedFeats) {
            var i;
            for (i = 0; i < costedFeats.length; i++) {
                costedFeats[i].sort(function(a, b) {return a.cost - b.cost});
            }
            return costedFeats;
        };
        var consolidateFeatures = function(costedFeats, numConsolidations) {
            var consolidationCount = 0;
            var bestI, nextBestI;
            var i;
            do {
                bestI = -1;
                for (i = 0; i < costedFeats.length; i++) {
                    if (bestI < 0 || costedFeats[i][0].cost < costedFeats[bestI][0].cost) {
                        bestI = i;
                    }
                }
                nextBestI = -1;
                for (i = 0; i < costedFeats.length; i++) {
                    if (i != bestI && (nextBestI < 0 || costedFeats[i][0].cost < costedFeats[nextBestI][0].cost)) {
                        nextBestI = i;
                    }
                }
                do {
                    costedFeats[nextBestI][0].featHashes[costedFeats[nextBestI][0].f]
                        = costedFeats[bestI][0].featHashes[costedFeats[bestI][0].f];
                    costedFeats[bestI][0].f++;
                    costedFeats[nextBestI][0].f++;
                    consolidationCount++;
                } while (consolidationCount < numConsolidations
                && costedFeats[bestI][0].f < costedFeats[bestI][0].featHashes.length
                && costedFeats[nextBestI][0].f < costedFeats[nextBestI][0].featHashes.length);
                if (costedFeats[bestI][0].f == costedFeats[bestI][0].featHashes.length) {
                    costedFeats[bestI].push(costedFeats[bestI].shift());
                }
                if (costedFeats[nextBestI][0].f == costedFeats[nextBestI][0].featHashes.length) {
                    costedFeats[nextBestI].push(costedFeats[nextBestI].shift());
                }
            } while (consolidationCount < numConsolidations);
            return costedFeats;
        };
        var minFeatFreqs = {};
        var costedFeats = costFeatures(clusterGrid, costModGrid);
        var featCount = countFeatures(clusterGrid);
        if (featCount > clusterGrid.numUniqueFeats) {
            if (costModGrid) {
                costedFeats = sortFeaturesByCost(costedFeats);
            }
            costedFeats = consolidateFeatures(costedFeats, featCount - clusterGrid.numUniqueFeats)
        }
        var featHash;
        var i, j, f;
        for (i = 0; i < costedFeats.length; i++) {
            for (j = 0; j < costedFeats[i].length; j++) {
                for (f = 0; f < costedFeats[i][j].featHashes.length; f++) {
                    featHash = costedFeats[i][j].featHashes[f];
                    if (!minFeatFreqs[featHash]) {
                        minFeatFreqs[featHash] = initializeFrequencies(clusterGrid.length);
                    }
                    minFeatFreqs[featHash][i] += costedFeats[i][j].cost;
                }
            }
        }
        return minFeatFreqs;
    };
    var calculateTotalHomologyCost = function(featFreqs, costModGrid) {
        var getMinCostMod = function(costModGrid) {
            var minCostMod = -1;
            var i, j;
            for (i = 0; i < costModGrid.length; i++) {
                for (j = 0; j < costModGrid[i].length; j++) {
                    if (minCostMod < 0 || costModGrid[i][j] < minCostMod) {
                        minCostMod = costModGrid[i][j];
                    }
                }
            }
            return minCostMod;
        };
        var totalHomologyCost = 0;
        var featHomologyCost;
        var factorHomologyCount;
        var homologousFeatCount = 0;
        var featHash;
        var i;
        for (featHash in featFreqs) {
            if (featFreqs.hasOwnProperty(featHash)) {
                featHomologyCost = 0;
                factorHomologyCount = 0;
                for (i = 0; i < featFreqs[featHash].length; i++) {
                    if (featFreqs[featHash][i] > 0) {
                        featHomologyCost += featFreqs[featHash][i];
                        factorHomologyCount++;
                    }
                }
                if (factorHomologyCount > 1) {
                    totalHomologyCost += featHomologyCost;
                    homologousFeatCount++;
                }
            }
        }
        if (homologousFeatCount > 1) {
            if (costModGrid) {
                if (!costModGrid.minCostMod) {
                    costModGrid.minCostMod = getMinCostMod(costModGrid);
                }
                totalHomologyCost -= (costModGrid.minCostMod*(homologousFeatCount - 1));
            } else {
                totalHomologyCost -= (homologousFeatCount - 1);
            }
        }
        return totalHomologyCost;
    };
    var featFreqs = calculateFeatureFrequencies(this.levelSelections, this.clusterGrid, iBound, jBound, costModGrid, initializeFrequencies);
    var totalHomologyCost = calculateTotalHomologyCost(featFreqs);
    if (!this.maxHomologyCost) {
        var maxFeatFreqs = calculateMaxFeatureFrequencies(this.clusterGrid, costModGrid, initializeFrequencies);
        this.maxHomologyCost = calculateTotalHomologyCost(maxFeatFreqs);
    }
    if (!this.minHomologyCost) {
        if (this.clusterGrid.length < 2) {
            this.minHomologyCost = 0;
        } else {
            var minFeatFreqs = calculateMinFeatureFrequencies(this.clusterGrid, costModGrid, initializeFrequencies);
            this.minHomologyCost = calculateTotalHomologyCost(minFeatFreqs);
        }
    }
    return (totalHomologyCost - this.minHomologyCost)/(this.maxHomologyCost - this.minHomologyCost);
};

$FLSolution.prototype.copy = function() {
    var solnCopy = new $FLSolution(this.clusterGrid);
    var i, j;
    for (i = 0; i < solnCopy.levelSelections.length; i++) {
        for (j = 0; j < solnCopy.levelSelections[i].length; j++) {
            solnCopy.levelSelections[i][j] = this.levelSelections[i][j];
        }
    }
    if (this.maxLevelMatchCost) {
        solnCopy.maxLevelMatchCost = this.maxLevelMatchCost;
    }
    if (this.maxHomologyCost) {
        solnCopy.maxHomologyCost = this.maxHomologyCost;
    }
    if (this.minHomologyCost) {
        solnCopy.minHomologyCost = this.minHomologyCost;
    }
    if (this.maxSynthesisCost) {
        solnCopy.maxSynthesisCost = this.maxSynthesisCost;
    }
    if (this.minSynthesisCost) {
        solnCopy.minSynthesisCost = this.minSynthesisCost;
    }
    return solnCopy;
};

/*var testAnnealSolver = function(clusterGrid) {
 var results = {};
 var solver = new flSolver();
 //var timer = new Timer($timeout);
 results.soln = solver.annealSolve(clusterGrid, $annealingOptions, $weights);
 //results.time = timer.getElapsedTimeSec();
 results.cost = results.soln.calculateCost($weights, $annealingOptions.synthesisOption);
 return results;
 };*/

function output(result, template, $fldNodes, weightsobj, costobj){

    function generateLibrary($fldNodes, $selectedTemplateA) {
        var outputData = [[]];
        for (i = 0; i < $fldNodes.length; i++) {
            outputData[0].push($fldNodes[i].bioDesign.name);
            $fldNodes[i].children.sort(function(a, b) {return a.parameter.value - b.parameter.value});
        }
        var j, k;
        for (k = 0; k < $selectedTemplateA.getDesignGrid().length; k++) {
            outputData.push([]);
            for (i = 0; i < $selectedTemplateA.getDesignGrid()[k].length; i++) {
                j = $selectedTemplateA.indexDesignVsRange(k, i);
                outputData[k + 1].push($fldNodes[i].children[j].bioDesign.name);
            }
        }
        return outputData;
    };

    function generateLevelLibrary($fldNodes, $selectedTemplateA) {
        var outputData = [[]];
        for (i = 0; i < $fldNodes.length; i++) {
            outputData[0].push($fldNodes[i].bioDesign.name);
            $fldNodes[i].children.sort(function(a, b) {return a.parameter.value - b.parameter.value});
        }
        var j, k;
        for (k = 0; k < $selectedTemplateA.getDesignGrid().length; k++) {
            outputData.push([]);
            for (i = 0; i < $selectedTemplateA.getDesignGrid()[k].length; i++) {
                j = $selectedTemplateA.indexDesignVsRange(k, i);
                outputData[k + 1].push($fldNodes[i].children[j].parameter.value);
            }
        }
        return outputData;
    };

    function generateModuleAssignment($fldNodes) {
        var outputData = {};
        for (var i = 0; i < $fldNodes.length; i++) {
            var genedata = [];
            for (var j = 0; j < $fldNodes[i].children.length; j++) {
                genedata.push($fldNodes[i].children[j].bioDesign.name);
            }
            outputData[$fldNodes[i].bioDesign.name] = genedata;
        }
        return outputData;
    }

    var j, k;
    for (var i = 0; i < result.levelSelections.length; i++) {
        for (j = 0; j < result.levelSelections[i].length; j++) {
            k = result.levelSelections[i][j];
            if (result.clusterGrid[i][j].lNodes[k].isConstraint) {
                $fldNodes[i].children[j] = result.clusterGrid[i][j].lNodes[k];
            }
            else {
                $fldNodes[i].children[j] = result.clusterGrid[i][j].lNodes[k].copy();
                $fldNodes[i].children[j].isConstraintShown = true;
                $fldNodes[i].children[j].isMoveTopShown = false;
            }
        }
    }
    var jsonoutput = new Object();
    jsonoutput["Level Matching Weight"] = weightsobj.levelMatch;
    jsonoutput["Pathway Homology Weight"] = weightsobj.homology;
    jsonoutput["DNA Synthesis Weight"] = weightsobj.synthesis;
    jsonoutput["Level Matching Cost"] = costobj.levelMatch;
    jsonoutput["Pathway Homology Cost"] = costobj.homology;
    jsonoutput["DNA Synthesis Cost"] = costobj.synthesis;
    jsonoutput["Total Assignment Cost"] = costobj.total;
    jsonoutput["Weighted Total Assignment Cost"] = costobj.weightedTotal;
    jsonoutput["Module Assignment"] = generateModuleAssignment($fldNodes);
    //jsonoutput["Library"] = generateLibrary($fldNodes, template);
    //jsonoutput["LevelLibrary"] = generateLevelLibrary($fldNodes, template);
    return jsonoutput;

}


var expressGrammar = {
    name: "Expression Grammar",
    variables: {TRANSCRIPTION: new variable("Transcription Strength"), TRANSLATION: new variable("Translation Strength"),
        EXPRESSION: new variable("Expression Strength"), TERMINATION: new variable("Termination Efficiency")},
    units: {REU: new units("REU")},
    inferModule: function(feats) {
        var transcFeats = [];
        var translFeats = [];
        var expressFeats = [];
        var insulationFeats = [];
        var replicationFeats = [];
        var hasPromoter = false;
        var hasRBS = false;
        var hasCDS = false;
        var hasTerminator = false;
        var i;
        for (i = 0; i < feats.length; i++) {
            if (feats[i].role === featRole.PROMOTER || feats[i].role === featRole.TERMINATOR) {
                transcFeats.push(feats[i]);
                if (feats[i].role === featRole.PROMOTER) {
                    hasPromoter = true;
                } else {
                    hasTerminator = true;
                }
            } else if (feats[i].role === featRole.RBS || feats[i].role === featRole.UTR) {
                translFeats.push(feats[i]);
                hasRBS = true;
            } else if (feats[i].role === featRole.CDS) {
                expressFeats.push(feats[i]);
                hasCDS = true;
            } else if (feats[i].role === featRole.SPACER || feats[i].role === featRole.SCAR) {
                insulationFeats.push(feats[i]);
            } else if (feats[i].role === featRole.VECTOR) {
                replicationFeats.push(feats[i]);
            }
        }
        if (replicationFeats.length > 0) {
            return new module(replicationFeats, [], modRole.REPLICATION, "org.clothocad.model.BasicModule");
        } else if (insulationFeats.length > 0) {
            return new module(insulationFeats, [], modRole.INSULATION, "org.clothocad.model.BasicModule");
        }
        var expressMod;
        var transcMod;
        if (hasPromoter || hasTerminator) {
            return new module(transcFeats, [], modRole.EXPRESSION, "org.clothocad.model.BasicModule");
        }
        var translMod;
        if (hasRBS) {
            return new module(translFeats, [], modRole.EXPRESSION, "org.clothocad.model.BasicModule");
        }
        if (hasCDS) {
            return new module(expressFeats, [], modRole.EXPRESSION, "org.clothocad.model.BasicModule");
        }
        return null;
        // if ((hasCDS && (hasPromoter || hasTerminator || hasRBS)) || ((hasPromoter || hasTerminator) && hasRBS)) {
        //  var subMods = [];
        //  if (hasCDS) {
        //      subMods.push(expressMod);
        //  }
        //  if (hasPromoter || hasTerminator) {
        //      subMods.push(transcMod);
        //  }
        //  if (hasRBS) {
        //      subMods.push(translMod);
        //  }
        //  return new module([], subMods, modRole.EXPRESSION, "org.clothocad.model.CompositeModule");
        // } else if (hasCDS) {
        //  return expressMod;
        // } else if (hasPromoter || hasTerminator) {
        //  return transcMod;
        // } else if (hasRBS) {
        //  return translMod;
        // } else {
        //  return null;
        // }
    }, inferVariable: function(mod) {
        if (mod.role === modRole.EXPRESSION) {
            return this.variables.EXPRESSION;
        } else if (mod.role === modRole.TRANSCRIPTION) {
            var feats = mod.getFeatures();
            if (feats.length == 1 && feats[0].role === featRole.TERMINATOR) {
                return this.variables.TERMINATION;
            } else {
                return this.variables.TRANSCRIPTION;
            }
        } else if (mod.role === modRole.TRANSLATION) {
            return this.variables.TRANSLATION;
        } else {
            return null;
        }
    }, inferUnits: function(varia) {
        if (varia == this.variables.EXPRESSION || varia == this.variables.TRANSCRIPTION || varia == this.variables.TRANSLATION) {
            return this.units.REU;
        } else if (varia == this.variables.TERMINATION) {
            return null;
        }
    }, schema: "org.clothocad.model.FunctionalGrammar"
};

var gridParser = {
    grammar: expressGrammar,
    parseDesign: function(data) {
        grid = [];
        var rowel = data.rowPartIDs;
        rowel.unshift("");
        grid.push(rowel);
        for (var l = 0; l < data.columnPartIDs.length; l++)
        {
            var col = data.partParameters[l];
            col.unshift(data.columnPartIDs[l]);
            grid.push(col);
        }
        for (var p = 0; p < data.geneIDs.length; p++)
        {
            var genestring = [];
            genestring.push(data.geneIDs[p]);
            for (var x = 0; x < data.rowPartIDs.length; x++)
            {
                genestring.push("");
            }
            grid.push(genestring);
        }
        data = grid;
        var bioDesigns = [];
        var inferredMod;
        var rowFeats = [];
        var i;
        for (i = 0; i < data.length; i++) {
            if (data[i].length > 0) {
                rowFeats[i] = this.parseFeature(data[i][0]);
                if (rowFeats[i] != null) {
                    inferredMod = this.grammar.inferModule([rowFeats[i]]);
                    if (inferredMod != null) {
                        bioDesigns.push(new bioDesign(inferredMod, []));
                    }
                }
            }
        }
        var colFeats = [];
        var j;
        for (j = 1; data.length > 0 && j < data[0].length; j++) {
            colFeats[j] = this.parseFeature(data[0][j]);
            if (colFeats[j] != null) {
                inferredMod = this.grammar.inferModule([colFeats[j]]);
                if (inferredMod != null) {
                    bioDesigns.push(new bioDesign(inferredMod, []));
                }
            }
        }
        var parsedParam;
        for (i = 1; i < data.length; i++) {
            for (j = 1; j < data[i].length; j++) {
                if (rowFeats[i] != null && colFeats[j] != null) {
                    inferredMod = this.grammar.inferModule([rowFeats[i], colFeats[j]]);
                    if (inferredMod != null) {
                        parsedParam = this.parseParameter(data[i][j], inferredMod);
                        if (parsedParam != null) {
                            bioDesigns.push(new bioDesign(inferredMod, parsedParam));
                        } else {
                            bioDesigns.push(new bioDesign(inferredMod, []));
                        }
                    }
                }
            }
        }
        return bioDesigns;
    }, parseFeature: function(data) {
        if (data.length > 0) {
            var roleChar = data.charAt(0);
            var parsedRole;
            if (roleChar === 'p') {
                parsedRole = featRole.PROMOTER;
            } else if (roleChar === 'r') {
                parsedRole = featRole.RBS;
            } else if (roleChar === 'u') {
                parsedRole = featRole.UTR;
            } else if (roleChar === 'c') {
                parsedRole =  featRole.CDS;
            } else if (roleChar === 't') {
                parsedRole = featRole.TERMINATOR;
            } else {
                return null;
            }
            if (parsedRole === featRole.CDS) {
                return new feature(data.substring(1), parsedRole, new sequence(""));
            } else {
                return new feature(data, parsedRole, new sequence(""));
            }
        } else {
            return null;
        }
    }, parseParameter: function(data, mod) {
        if (!isNaN(data) && data !== "") {
            var inferredVaria = this.grammar.inferVariable(mod);
            if (inferredVaria != null) {
                var inferredUnits = this.grammar.inferUnits(inferredVaria);
                if (inferredUnits != null) {
                    return [new parameter(data, inferredVaria, inferredUnits)];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
};


function $parseFileData(data) {
    this.$lNodes = [];
    this.$fNodes = [];
    var $numModsUploaded = 0;
    var $numFeatsUploaded = 0;
    var $feats = [];
    var $featNameDict = {};
    var bioDesigns = gridParser.parseDesign(data);
    if (bioDesigns.length == 0) {
        if (arguments.length > 1) {
            console.log("md", "Error", "Failed to parse contents of table" + ". Check file format.");
        } else {
            console.log("md", "Error", "Failed to parse contents of file. Check file format.");
        }
    }
    else {
        var isCodedExpression = function(bioDesign) {
            if ('module' in bioDesign) {
                if (bioDesign.module.role === modRole.EXPRESSION) {
                    var feats = bioDesign.module.getFeatures();
                    var i;
                    for (i = 0; i < feats.length; i++) {
                        if (feats[i].role === featRole.CDS) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        };
        var isParameterizedExpression = function(bioDesign) {
            if ('module' in bioDesign && 'parameters' in bioDesign) {
                var inferredVaria = expressGrammar.inferVariable(bioDesign.module);
                if (inferredVaria == null) {
                    return -1;
                } else {
                    var i = 0;
                    while (i < bioDesign.parameters.length) {
                        if (bioDesign.parameters[i].variable.name === inferredVaria.name) {
                            return i;
                        } else {
                            i++;
                        }
                    }
                    return -1;
                }
            } else {
                return -1;
            }
        };
        var i, j;
        var feats;
        for (i = 0; i < bioDesigns.length; i++) {
            if (isCodedExpression(bioDesigns[i])) {
                this.$fNodes.push(new fNode(bioDesigns[i]));
                $numModsUploaded++;
            } else {
                j = isParameterizedExpression(bioDesigns[i]);
                if (j >= 0) {
                    this.$lNodes.push(new lNode(bioDesigns[i], j));
                    $numModsUploaded++;
                }
            }
            feats = bioDesigns[i].module.getFeatures();
            for (j = 0; j < feats.length; j++) {
                if ($featNameDict[hash(feats[j])] == null) {
                    $featNameDict[hash(feats[j])] = true;
                    $feats.push(feats[j]);
                    $numFeatsUploaded++;
                }
            }
        }
        this.$lNodes.sort(function(a, b) {return a.parameter.value - b.parameter.value});

    }
};

function addConstraints(fnodes, lnodes, constraints)
{
    for (var key in constraints) {
        console.log("CONSTRAINT USED");
        if (constraints.hasOwnProperty(key)) {
            var index = -1;
            for (var k = 0; k < fnodes.length; k++)
            {
                if (fnodes[k].bioDesign.name == key)
                {
                    index = k;
                    break;
                }
            }
            if (index != -1)
            {
                for (var j = 0; j < constraints[key].length; j++)
                {
                    for (var m = 0; m < lnodes.length; m++)
                    {
                        if(constraints[key][j] == lnodes[m].bioDesign.name)
                        {
                            var clnode = lnodes[m].copy();
                            clnode.isConstraint = true;
                            fnodes[k].children.push(clnode);
                            break;
                        }
                    }
                }
            }

        }
    }

    return fnodes;
}

function fullFactorial_solve_greedy(numsLevelsPerFactor, grid, numClusterings, annealingOptions, weights, constraints) {
    var fulltemplater = new doeTemplater();
    var fulltemplate = fulltemplater.makeFullFactorial(numsLevelsPerFactor);
    var fullclusterer = new lClusterer();
    console.log("TEST");
    var allnodes = new $parseFileData(grid);
    var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
    var lNodes = allnodes.$lNodes;
    var fullclustergrid = fullclusterer.templateCluster(fNodes, lNodes, fulltemplate, numClusterings);
    var fullsolver = new flSolver();
    var results = fullsolver.greedySolve(fullclustergrid, annealingOptions.synthesisOption, weights, 100, fulltemplate.rangeFreqGrid);
    var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
    return output(results, fulltemplate, fNodes, weights, costobj);
}

function fullFactorial_solve_repgreedy(numsLevelsPerFactor, grid, numClusterings, annealingOptions, weights, constraints) {
    var fulltemplater = new doeTemplater();
    var fulltemplate = fulltemplater.makeFullFactorial(numsLevelsPerFactor);
    var fullclusterer = new lClusterer();
    console.log("TEST");
    var allnodes = new $parseFileData(grid);
    var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
    var lNodes = allnodes.$lNodes;
    var fullclustergrid = fullclusterer.templateCluster(fNodes, lNodes, fulltemplate, numClusterings);
    var fullsolver = new flSolver();
    var results = fullsolver.repGreedySolve(fullclustergrid, annealingOptions.synthesisOption, weights, 100, fulltemplate.rangeFreqGrid);
    var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
    return output(results, fulltemplate, fNodes, weights, costobj);
}

function fullFactorial_solve_posgreedy(numsLevelsPerFactor, grid, numClusterings, annealingOptions, weights, constraints) {
    var fulltemplater = new doeTemplater();
    var fulltemplate = fulltemplater.makeFullFactorial(numsLevelsPerFactor);
    var fullclusterer = new lClusterer();
    console.log("TEST");
    var allnodes = new $parseFileData(grid);
    var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
    var lNodes = allnodes.$lNodes;
    var fullclustergrid = fullclusterer.templateCluster(fNodes, lNodes, fulltemplate, numClusterings);
    var fullsolver = new flSolver();
    var results = fullsolver.posGreedySolve(fullclustergrid, annealingOptions.synthesisOption, weights, 100, fulltemplate.rangeFreqGrid);
    var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
    return output(results, fulltemplate, fNodes, weights, costobj);
}

function fullFactorial_solve_anneal(numsLevelsPerFactor, grid, numClusterings, annealingOptions, weights, constraints) {
    var fulltemplater = new doeTemplater();
    var fulltemplate = fulltemplater.makeFullFactorial(numsLevelsPerFactor);
    var fullclusterer = new lClusterer();
    console.log("TEST");
    var allnodes = new $parseFileData(grid);
    var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
    var lNodes = allnodes.$lNodes;
    var fullclustergrid = fullclusterer.templateCluster(fNodes, lNodes, fulltemplate, numClusterings);
    var fullsolver = new flSolver();
    var results = fullsolver.annealSolve(fullclustergrid, annealingOptions, weights,fulltemplate.rangeFreqGrid);
    var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
    return output(results, fulltemplate, fNodes, weights, costobj);
}

function fullFactorial_compare_greedy(numsLevelsPerFactor, grid, numClusterings, annealingOptions, weights, constraints) {
    var fulltemplater = new doeTemplater();
    var fulltemplate = fulltemplater.makeFullFactorial(numsLevelsPerFactor);
    var fullclusterer = new lClusterer();
    console.log("TEST");
    var allnodes = new $parseFileData(grid);
    var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
    var lNodes = allnodes.$lNodes;
    var fullclustergrid = fullclusterer.templateCluster(fNodes, lNodes, fulltemplate, numClusterings);
    var fullsolver = new flSolver();
    var greedybetter = 0;
    var repgreedybetter = 0;
    for (var j = 0; j < 100; j++)
    {
        var solution = fullsolver.randomSolve(fullclustergrid, annealingOptions.synthesisOption, weights, 1, fulltemplate.rangeFreqGrid);
        var greedycost = fullsolver.greedySolve(fullclustergrid, annealingOptions.synthesisOption, weights, 100, fulltemplate.rangeFreqGrid, solution);
        var repgreedycost = fullsolver.repGreedySolve(fullclustergrid, annealingOptions.synthesisOption, weights, 100, fulltemplate.rangeFreqGrid, solution);
        if (repgreedycost < greedycost)
            repgreedybetter++;
        else
            greedybetter++;
    }
    console.log("Greedy was better: " + greedybetter + " times.");
    console.log("Rep Greedy was better: " + repgreedybetter + " times.");
    var results = fullsolver.annealSolve(fullclustergrid, annealingOptions, weights,fulltemplate.rangeFreqGrid);
    var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
    return output(results, fulltemplate, fNodes, weights, costobj);
}

/*function fractionalFactorial_solve(numFactors, resolution, grid, numClusterings, annealingOptions, weights, constraints) {
 var factemplater = new doeTemplater();
 var factemplate = factemplater.makeFractionalFactorial(numFactors, resolution);
 var facclusterer = new lClusterer();
 console.log("TEST");
 var allnodes = new $parseFileData(grid);
 var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
 var lNodes = allnodes.$lNodes;
 var facclustergrid = facclusterer.templateCluster(fNodes, lNodes, factemplate, numClusterings);
 var facsolver = new flSolver();
 var results = facsolver.annealSolve(facclustergrid, annealingOptions, weights, factemplate.rangeFreqGrid);
 var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
 return output(results, factemplate, fNodes, weights, costobj);
 }

 function plackettBurman_solve(numfactors, grid, numClusterings, annealingOptions, weights, constraints) {
 var plaburtemplater = new doeTemplater();
 var plaburtemplate = plaburtemplater.makePlackettBurman(numfactors);
 var plaburclusterer = new lClusterer();
 console.log("TEST");
 var allnodes = new $parseFileData(grid);
 var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
 var lNodes = allnodes.$lNodes;
 var plaburclustergrid = plaburclusterer.templateCluster(fNodes, lNodes, plaburtemplate, numClusterings);
 var plabursolver = new flSolver();
 var results = plabursolver.annealSolve(plaburclustergrid, annealingOptions, weights, plaburtemplate.rangeFreqGrid);
 var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
 return output(results, plaburtemplate, fNodes, weights, costobj);
 }

 function boxBehnken_solve(numfactors, grid, numClusterings, annealingOptions, weights, constraints) {
 var boxtemplater = new doeTemplater();
 var boxtemplate = boxtemplater.makeBoxBehnken(numfactors);
 var boxclusterer = new lClusterer();
 console.log("TEST");
 var allnodes = new $parseFileData(grid);
 var fNodes = addConstraints(allnodes.$fNodes,allnodes.$lNodes,constraints);
 var lNodes = allnodes.$lNodes;
 var boxclustergrid = boxclusterer.templateCluster(fNodes, lNodes, boxtemplate, numClusterings);
 var boxsolver = new flSolver();
 var results = boxsolver.annealSolve(boxclustergrid, annealingOptions, weights, boxtemplate.rangeFreqGrid);
 var costobj = results.calculateCost(weights, annealingOptions.synthesisOption);
 return output(results, boxtemplate, fNodes, weights, costobj);
 }*/

/*exports.fullFactorial_solve = fullFactorial_solve;
 exports.fractionalFactorial_solve = fractionalFactorial_solve;
 exports.plackettBurman_solve = plackettBurman_solve;
 exports.boxBehnken_solve = boxBehnken_solve;*/

var NLPF = require("./numsLevelsPerFactor.json");
/*var FN = require("./fNodes.json");
 var LN = require("./lNodes.json");
 for (var i = 0; i<LN.length; i++)
 {
 LN[i] = new lNode(LN[i].bioDesign,LN[i].pIndex);
 }
 */
var PL = require("./pl.json");

/*for (var i = 0; i<FN.length; i++)
 {
 FN[i] = new fNode(FN[i].bioDesign);
 }
 for (var i = 0; i<LN.length; i++)
 {
 LN[i] = new lNode(LN[i].bioDesign,LN[i].pIndex);
 }*/
var NMC = 10;
var ANLO = require("./annealingOptions.json");
var WGT = require("./weights.json");
var CONS = {};/*{ "nifS": ["t3, p2", "t11, p18", "t11, p2"],
 "nifD": ["t4, p20", "t4, p22", "t5, p22"],
 "nifU": ["t25, p1", "t25, p7", "t7, p7"],
 "nifH": ["t1, p11", "t1, p44", "t12, p44"],
 "nifK": ["t28, p26", "t19, p26", "t19, p24"],
 "nifM": ["t27, p25", "t17, p25", "t17, p36"]
 };*/
var NF = 6;
function isObject(val) {
    if (val === null) {
        return false;
    }
    return ( (typeof val === 'function') || (typeof val === 'object') );
}
console.log("NUM FACTORS");
console.log(NLPF.length);
console.log(PL.geneIDs.length);
console.log("NUM FACTOR LEVEL");
console.log(NLPF[0]);


/*console.log("Greedy Solve");
 console.log(fullFactorial_solve_greedy(NLPF,PL,NMC,ANLO,WGT,CONS));
 console.log();*/

/*console.log("Rep Greedy Solve");
 console.log(fullFactorial_solve_repgreedy(NLPF,PL,NMC,ANLO,WGT,CONS));
 console.log();*/

/*console.log("Pos Greedy Solve");
 console.log(fullFactorial_solve_posgreedy(NLPF,PL,NMC,ANLO,WGT,CONS));
 console.log();

 console.log("Anneal Greedy Solve");
 console.log(fullFactorial_solve_anneal(NLPF,PL,NMC,ANLO,WGT,CONS));
 console.log();*/

console.log("Compare Greedy");
console.log(fullFactorial_compare_greedy(NLPF,PL,NMC,ANLO,WGT,CONS));
console.log();

/*console.log("fractionalFactorial_solve");
 console.log(fractionalFactorial_solve(NF,5,PL,NMC,ANLO,WGT,CONS));
 console.log("plackettBurman_solve");
 console.log(plackettBurman_solve(NF,PL,NMC,ANLO,WGT,CONS));
 console.log("boxBehnken_solve");
 console.log(boxBehnken_solve(NF,PL,NMC,ANLO,WGT,CONS));*/
console.log("done");