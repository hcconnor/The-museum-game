var currStage;
var museum;

function init(){
  currStage = 1;
  museum = [];

// }
// function makeMap(){

}

function draw(){

}

function update(){
  draw();
}

init();
setInterval(update(),30);

var input = new CanvasInput({
canvas: document.getElementById('The-Museum-Game')
});

$("#theButton").click(function(){
    console.log(input.value())
})
