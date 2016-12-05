//----------------------GLOBAL VARS-------------------
var FRAMES = 30;
//----------------------GAME RELATED VARS-------------
var currStage;
var museum;
//-----------------------PLAYER------------------------
var party;
var currPlayer

function player(myPlayerNum, myType){
  this.playerNum = myPlayerNum;
  this.type = myType;
  this.inventory = [];
  this.currRoom = "Lobby";
  this.currPath = [];
  this.modifier = 1;

  this.currBadGoal = 0;
  this.currGoodGoal = 0;
  this.badGoals = [];
  this.goodGoals = [];

  this.modHealth = function(value){
    this.health += value;
  }

  this.fillGoals = function(){
    this.badGoals = badGoals[this.type];
    this.goodGoals = goodGoals[this.type];
  }

  this.advanceBadGoal = function(){
    this.currBadGoal++;
    currStage++;
  }

  this.advancedGoodGoal = function(){
    this.currGoodGoal++;
    currStage++;
  }

  this.pickup = function(target){
    this.inventory.push(target);
  }

  this.interact = function(target){
    target.action();
  }

  this.damage = function(value){
    this.health -= (value*this.modifier);
  }

  this.drop = function(target){
    for(let myItem of this.inventory){
      if (myItem.name == target.name) {
        var i = this.inventory.indexOf(myItem);
        this.inventory.splice(i,1);
      }
    }
  }

  this.searchInventory = function(target){
    for(let item of this.inventory){
      if(item.name == target) return true;
      else return false;
    }
  }
}

function thief(myPlayerNum, myType){
  player.call(this, myPlayerNum, myType);

  this.skills = ["Pick Up", "Drop", "Pilfer", "Preparation"];
  this.actionPoints = 7;
  this.health = 10;

  this.pilfer = function(target){
    if(target.inventory.length > 0 && currPlayerAP[currPlayer] > 1){
      //print stuff
      var index;
      currPlayerAP[currPlayer] -= 2;
      index = Math.random() * target.inventory.length;
      this.pickup(target.inventory[index]);
      target.drop(target.inventory[index]);
    }else{
      //print stuff
    }
  }

  this.preparation = function(target){

  }
}

function politician(myPlayerNum, myType){
  player.call(this, myPlayerNum, myType);

  this.skills = ["Pick Up", "Drop", "Chant Spell"];
  this.actionPoints = 5;
  this.health = 9;

  this.chant = function(target){
    if(currStage == 1){
      currPlayerAP[currPlayer] = party[currPlayer].actionPoints;
    }else if(currStage == 2){
      currPlayerAP[currPlayer] = party[currPlayer].actionPoints;
      currPlayerHealth[currPlayer] = party[currPlayer].health;
    }else if(currStage == 3){

    }else if(currStage == 4){

    }
  }
}

function veteran(myPlayerNum, myType){
  player.call(this, myPlayerNum, myType);

  this.skills = ["Pick Up", "Drop", "Attack", "Bunker Down"];
  this.actionPoints = 6;
  this.health = 12;

  this.attack = function(target){
    if(currPlayerAP[currPlayer] >= 3){
      target.health -= 3;
      currPlayerAP[currPlayer] -= 3;
    }
  }

  this.bunkerDown(target){
    target.modifier = 0.5;
    if(this.searchInventory("Tower Shield")){
      for(let player of party){
        player.modifier = 0.5;
      }
    }
  }
}

function professor(myPlayerNum, myType){
  player.call(this, myPlayerNum, myType);

  this.skills = ["Pick Up", "Drop", "Read", "Spellwork"];
  this.actionPoints = 5;
  this.health = 10;
}

var badGoals = {
  "Thief" : [],
  "Politician" : [],
  "Veteran" : [],
  "Professor" : []
}

var goodGoals = {
  "Thief" : [],
  "Politician" : [],
  "Veteran" : [],
  "Professor" : []
}

function fillParty(){
  party[0] = new thief(0, "Thief");
  party[1] = new politician(1, "Politician");
  party[2] = new veteran(2, "Veteran");
  party[3] = new professor(3, "Professor");
};

//---------------------GAME STATES---------------------
var states = {};
var currState = "movementPhase";
var currPlayerAP = [];
var currPlayerHealth = [];

states["Movement Phase"] = new movementPhase();
states["Action Phase"] = new actionPhase();

function stateManager(){
  states[currState].update();
};

function movementPhase(){
  this.begin = function(){

    for(var i = 0; i < party.length; i++){
      currPlayerAP[i] = party[i].actionPoints;
    }
  }

  this.draw = function(){

  }

  this.update = function(){

    if(currPlayer >= 4){
      currPlayer = 0;
      transitionState("Action Phase");
    }else if(currPlayerAP[currPlayer] > 0){
    }else if(currPlayerAP[currPlayer] < 2){
      console.log("No more points!");
      nextPlayer();
    }
    displayPlayer();
    draw();
  }
};


function actionPhase(){
  this.begin = function(){
    console.log("ActionPhase");
}

  this.draw = function(){

  }

  this.update = function(){

    if(currPlayer >= 4){
      currPlayer = 0;
      transitionState("Movement Phase");
    }else if(currPlayerAP[currPlayer] > 0){
    }else if(currPlayerAP[currPlayer] <= 0){
      nextPlayer();
    }
    displayPlayer();
    displayAbilities();
    draw();
  }
};

function transitionState(newState){
  currState = newState;
  states[currState].begin();
}
//---------------------GAME FUNCTIONS------------------
function init(){
  currStage = 1;
  museum = [];
  party = [];
  currPlayer = 0;

  var input = new CanvasInput({
  canvas: document.getElementById('The-Museum-Game'),
  x : 10,
  y : canvas.height/2
  });

  var myGUI = new gui();
  myGUI.guiInit();
  canvas.addEventListener("mouseup", button_click);

  function button_click(e) {
          for (let button of buttonArray) {
              if (checkBounds(button, e.clientX, e.clientY)) {
                if (button.text == "Enter") button.click(inputClick, input.value());
                else if (button.text == "Next Turn") button.click(nextPlayer, null);
                input.value("");
              }
          }
  }

  for (var i = 0; i < 4; i++){
    currPlayerHealth[i] = party[currPlayer].health;
  }

  fillParty();

  displayPlayer();

  makeMap();

  draw();
  transitionState("Movement Phase");
};

function draw(){
  for(let button of buttonArray){
    button.draw();
  }
  for(let guiElement of guiArray){
    guiElement.clearGUI();
    guiElement.draw();
  }
}

init();
setInterval(stateManager,FRAMES);
