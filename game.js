int currStage;
var museum;

function init(){
  currStage = 1;
  museum = [];

  makeMap();
}

function draw(){

}

function update(){
  draw();
}

init();
setInterval(update(),30);
