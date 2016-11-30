//----------------------GLOBAL VARS-------------------
var FRAMES = 30;
//----------------------GAME RELATED VARS-------------
var currStage;
var museum;
//-----------------------PLAYER------------------------
var party;
var currPlayer

//---------------------GAME STATES---------------------
var states = {};
var currState = "movementPhase";

states["movementPhase"] = new movementPhase();
states["actionPhase"] = new actionPhase();

function stateManager(){
  states[currState].update();
};

function movementPhase(){
  this.begin = function(){

  }

  this.draw = function(){

  }

  this.update = function(){
    this.draw();
  }
};


function actionPhase(){
  this.begin = function(){

  }

  this.draw = function(){

  }

  this.update = function(){
    this.draw();
  }
};
//---------------------GAME FUNCTIONS------------------
function init(){
  currStage = 1;
  museum = [];
  party = [];
  currPlayer = 0;

};

function fillParty(){
  var roles = ["Thief", "Politician", "Veteran", "Professor"];
  for(var i = 0; i < 4; i++){
    party.push(new player(i+1, roles[i]))
  }
};

init();
setInterval(stateManager,FRAMES);
