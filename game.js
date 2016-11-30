var currStage;

var museum;
//-----------------------PLAYER------------------------
var party;
var currPlayer
//---------------------GAME FUNCTIONS------------------
function init(){
  currStage = 1;
  museum = [];
  party = [];
  currPlayer = 0;

}

function fillParty(){
  var roles = ["Thief", "Politician", "Veteran", "Professor"];
  for(var i = 0; i < 4; i++){
    party.push(new player(i+1, roles[i]))
  }
}

function draw(){

}

function update(){
  draw();
  console.log("This is working");
}

init();
setInterval(update(),30);
