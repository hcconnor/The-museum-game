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

states["movementPhase"] = new movementPhase();
states["actionPhase"] = new actionPhase();

function stateManager(){
  states[currState].update();
};

function movementPhase(){
  this.begin = function(){
    console.log("MovementPhase");
    canvas.addEventListener("mouseup", button_click);
    var input = new CanvasInput({
    canvas: document.getElementById('The-Museum-Game')
    });

    // buttonArray[0].click(function(){
    //   //console.log(input.value());
    //   input.value = "";
    //   currPlayerAP[currPlayer] -= 2;
    //   currPlayer++;});

    for(var i = 0; i < party.length; i++){
      currPlayerAP[i] = party[i].actionPoints;
    }

    function button_click(e) {
            for (let button of buttonArray) {
                if (checkBounds(button, e.clientX, e.clientY)) {
                  button.click(inputClick, input.value());
                  input.value("");
                }
            }
    }
  }

  this.draw = function(){
    for(let button of buttonArray){
      button.draw();
    }
    for(let guiElement of guiArray){
      guiElement.draw();
    }
  }

  this.update = function(){
    //console.log("current Player: " + currPlayer);

    if(currPlayer >= 4){
      currPlayer = 0;
      transitionState("actionPhase");
    }else if(currPlayerAP[currPlayer] > 0){
      //console.log("current AP: " + currPlayerAP[currPlayer]);
      //ask for input
      //currPlayerAP[currPlayer]--;
    }else{
      console.log("No more points!");
      currPlayer++;
    }
    this.draw();
  }
};


function actionPhase(){
  this.begin = function(){
    console.log("ActionPhase");
    canvas.addEventListener("mouseup", button_click);
    var input = new CanvasInput({
    canvas: document.getElementById('The-Museum-Game')
    });

  //  $("#theButton").click(function(){
  //      console.log(input.value());
  //      currPlayerAP[currPlayer]--;
  //  })

  function button_click(e) {
            for (let button of buttonArray) {
                if (checkBounds(button, e.clientX, e.clientY)) {
                  button.click(inputClick, input.value());
                  input.value("");
                }
            }
    }
  }

  this.draw = function(){
    for(let button of buttonArray){
      button.draw();
    }
    for(let guiElement of guiArray){
      guiElement.draw();
    }
  }

  this.update = function(){
  //  console.log("current Player: " + currPlayer);

    if(currPlayer >= 4){
      currPlayer = 0;
      transitionState("movementPhase");
    }else if(currPlayerAP[currPlayer] > 0){
      //ask for input
      //currPlayerAP[currPlayer]--;
    }else{
  //    Console.log("No more points!");
      currPlayer++;
    }
    this.draw();
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
  var myGUI = new gui();
  myGUI.guiInit();

  fillParty();
  transitionState("movementPhase");
};




init();
setInterval(stateManager,FRAMES);
