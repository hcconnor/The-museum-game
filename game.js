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
  this.skills = abilities[this.type];
  this.inventory = [];
  this.actionPoints = AP[this.type];
  this.health = 10;

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
}

var abilities = {
         "Thief": ["Pick Up","Drop","Unlock","lol whatever this one was"],
    "Politician": [],
       "Veteran": [],
     "Professor": []
};
//Action points subject to change
var AP = {
  "Thief": 5,
  "Politician": 5,
  "Veteran": 5,
  "Professor": 5
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

function pickup(player, item){
  player.inventory.push(item);
}

function drop(player, item){
  for(let myItem of player.inventory){
    if (myItem.name == item.name) {
      int i = indexOf(myItem);
      inventory.splice(i,1);
    }
  }
}

function fillParty(){
  var roles = ["Thief", "Politician", "Veteran", "Professor"];
  for(var i = 0; i < 4; i++){
    party.push(new player(i+1, roles[i]))
  }
};

//---------------------GAME STATES---------------------
var states = {};
var currState = "movementPhase";
var currPlayerAP = [];

states["Movement Phase"] = new movementPhase();
states["Action Phase"] = new actionPhase();

function stateManager(){
  states[currState].update();
};

function movementPhase(){
  this.begin = function(){
  //  canvas.addEventListener("mouseup", button_click);
    // var input = new CanvasInput({
    // canvas: document.getElementById('The-Museum-Game')
    // });

    // buttonArray[0].click(function(){
    //   //console.log(input.value());
    //   input.value = "";
    //   currPlayerAP[currPlayer] -= 2;
    //   currPlayer++;});

    for(var i = 0; i < party.length; i++){
      currPlayerAP[i] = party[i].actionPoints;
    }

    // function button_click(e) {
    //         for (let button of buttonArray) {
    //             if (checkBounds(button, e.clientX, e.clientY)) {
    //               if (button.text == "Enter") button.click(inputClick, input.value());
    //               else if (button.text == "Next Turn") button.click(nextPlayer, null);
    //               input.value("");
    //             }
    //         }
    // }
  }

  this.draw = function(){

  }

  this.update = function(){
    //console.log("current Player: " + currPlayer);

    if(currPlayer > 4){
      currPlayer = 0;
      transitionState("Action Phase");
    }else if(currPlayerAP[currPlayer] > 0){
      //console.log("current AP: " + currPlayerAP[currPlayer]);
      //ask for input
      //currPlayerAP[currPlayer]--;
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
  //  canvas.addEventListener("mouseup", button_click);


  //  $("#theButton").click(function(){
  //      console.log(input.value());
  //      currPlayerAP[currPlayer]--;
  //  })


}

  this.draw = function(){

  }

  this.update = function(){
  //  console.log("current Player: " + currPlayer);

    if(currPlayer > 4){
      currPlayer = 0;
      transitionState("Movement Phase");
    }else if(currPlayerAP[currPlayer] > 0){
      //ask for input
      //currPlayerAP[currPlayer]--;
    }else if(currPlayerAP[currPlayer] <= 0){
  //    Console.log("No more points!");
      nextPlayer();
    }
    displayPlayer();
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

  fillParty();

  displayPlayer();

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
