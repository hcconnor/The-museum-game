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

    guiArray[0] = new guiElement(5,10,400,200,false,null);  //Main Display
    guiArray[1] = new guiElement(410,10,200,200,false,null); //Player state
  }

};

function guiElement(X, Y, width, height, filled, color){
  this.x = X;
  this.y = Y;
  this.width = width;
  this.height = height;
  this.filled = filled;
  this.text = [];

  this.fillText = function(str){
    this.text.push(str);
  }

  this.clearText = function(){
    this.text = [];
  }

  this.clearGUI = function(){
    context.fillStyle = "WHITE";
    context.fillRect(this.x,this.y,this.width,this.height);
  }

  this.draw = function(){
    if(!this.filled){
      context.rect(this.x, this.y, this.width, this.height);
      context.stroke();

      var Yoffset = 0;
      for(let str in this.text){
        context.fillStyle = "BLACK";
        context.font = "20px Arial";
        context.fillText(this.text[str], this.x+5,this.y+25+Yoffset);
        Yoffset += 25;
      }
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

function inputClick(inputStr){
  var output;
  if (currState == "Movement Phase"){
    currPlayerAP[currPlayer] -= 2;
    output = searchDatabase(inputStr);
    nextPlayer();
    if (guiArray[0].text.length > 0) guiArray[0].clearText();
    guiArray[0].fillText(output.room);
    guiArray[0].fillText(output.dialogue);
    guiArray[0].fillText(output.effect);
    displayPlayer();
  } else if( currState == "Action Phase"){
    currPlayerAP[currPlayer]--;
    output = searchDatabase(inputStr);
    if (guiArray[0].text.length > 0) guiArray[0].clearText();
    guiArray[0].fillText(output.room);
    guiArray[0].fillText(output.dialogue);
    guiArray[0].fillText(output.effect);
    displayPlayer();
  }
  for(var i = 0; i < guiArray.length; i++){
    guiArray[i].clearGUI();
    guiArray[i].draw();
  }
}

function displayPlayer(){
  if (currPlayer < 4){
    guiArray[1].clearText();
    guiArray[1].clearGUI();
    guiArray[1].fillText("Player: "+party[currPlayer].playerNum);
    guiArray[1].fillText("AP: "+party[currPlayer].actionPoints);
    guiArray[1].fillText(currState);
  }
}

function nextPlayer(None){
  console.log(currPlayer);
  currPlayer++;
}
