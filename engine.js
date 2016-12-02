var canvas = document.getElementById('The-Museum-Game'); //something from index goes here
var context = canvas.getContext('2d');
//-----------------GLOBAL VARIABLES--------------------
var buttonArray = [];
var guiArray = [];
//-----------------ENGINE MECHANICS---------------------
function gui(){
  this.guiInit = function(){
    buttonArray[0] = new button("Enter", canvas.width/2, canvas.height/2, 100, 50);
    buttonArray[1] = new button("Next Turn", buttonArray[0].x + 2*buttonArray[0].width + 20, canvas.height/2, 150, 50);

    guiArray[0] = new guiElement(5,10,400,200,false,null);
    guiArray[1] = new guiElement(410,10,200,200,false,null);
  }

};

function guiElement(X, Y, width, height, filled, color){
  this.x = X;
  this.y = Y;
  this.width = width;
  this.height = height;
  this.filled = filled;

  this.draw = function(){
    if(!this.filled){
      context.rect(this.x, this.y, this.width, this.height);
      context.stroke();
    }else{
      context.fillStyle = color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

function button(text, X, Y, width, height) {
    this.text = text;
    this.width = width;
    this.height = height;
    this.x = X - this.width / 2;
    this.y = Y - this.height / 2;

    //Pass in a function then its parameter
    this.click = function(method,param) {
        method(param);
    }
    this.draw = function() {
        context.fillStyle = "GREY";
        context.fillRect(this.x, this.y, this.width, this.height);
		    context.font = "30px Arial";
        context.fillStyle = "BLACK";
        context.fillText(this.text, this.x + this.width / 2 - 50, this.y + this.height / 2);
    }
};

function checkBounds(object, mouseX, mouseY) {
    if ((mouseX < (object.x + object.width)) && (mouseY < (object.y + object.height)) && (mouseX > (object.x)) && (mouseY > (object.y))) {
        return true;
    } else {
        return false;
    }
};

function inputClick(testStr){
  console.log(testStr);
  if (currState == "movementPhase"){
    currPlayerAP[currPlayer] -= 2;
    console.log("Current Player: "+currPlayer);
    console.log("Current AP: "+currPlayerAP[currPlayer]);
    currPlayer++;
  } else if( currState == "actionPhase"){
    currPlayerAP[currPlayer]--;
    console.log("Current Player: "+currPlayer);
    console.log("Current Player: "+currPlayer);
  }
}
